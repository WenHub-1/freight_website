import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { APP_ROUTES } from "@/lib/constants";
import {
  useCancelDeletionRequest,
  useCheckDeletionRequestStatus,
  useDeletionPolicy,
  useRequestDeletionOtp,
  useVerifyDeletionOtp,
  type DeletionRequestDetail,
  type DeletionRequestStatus,
} from "@/services/account-deletion-service";

const PHONE_PATTERN = /^\+9665\d{8}$/;
const OTP_PATTERN = /^\d{6}$/;

type Tab = "request" | "check";
type RequestStep = "phone" | "otp" | "success";

type PhoneFormValues = { phone: string };
type OtpFormValues = { otp: string; reason: string };
type CheckFormValues = { reference: string; phone: string };

const statusBadgeClass: Record<DeletionRequestStatus, string> = {
  pending: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  approved: "bg-primary/15 text-primary border-primary/30",
  rejected: "bg-destructive/15 text-destructive border-destructive/30",
  cancelled: "bg-white/10 text-muted-foreground border-white/15",
  completed: "bg-white/10 text-muted-foreground border-white/15",
};

const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <div
    className={cn(
      "bg-navy-mid border border-white/8 rounded-3xl p-6 sm:p-8",
      className,
    )}
  >
    {children}
  </div>
);

const PolicySection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { data: policy, isLoading } = useDeletionPolicy();
  const lang = i18n.language === "ar" ? "ar" : "en";
  const steps = t("deleteAccountPage.policy.steps", {
    returnObjects: true,
  }) as string[];

  return (
    <Card className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-tajawal font-bold text-white text-lg">
          {t("deleteAccountPage.policy.title")}
        </h3>
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex items-center justify-center shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold">
                {i + 1}
              </span>
              <span className="text-muted-foreground text-sm md:text-base">
                {step}
              </span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-primary/90 bg-primary/5 border border-primary/20 rounded-xl px-4 py-3">
          {t("deleteAccountPage.policy.windowNote", {
            days: policy?.grace_period_days ?? 15,
          })}
        </p>
      </div>

      {isLoading ? (
        <div className="grid sm:grid-cols-2 gap-6">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
      ) : policy ? (
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-white/90 font-medium text-sm">
              {t("deleteAccountPage.policy.deletedTitle")}
            </h4>
            <div className="space-y-3">
              {policy.deleted.map((item) => (
                <div key={item.key} className="border-s-2 border-white/10 ps-3">
                  <p className="text-white/90 text-sm">{item.label[lang]}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {item.period[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-white/90 font-medium text-sm">
              {t("deleteAccountPage.policy.retainedTitle")}
            </h4>
            <div className="space-y-3">
              {policy.retained.map((item) => (
                <div
                  key={item.key}
                  className="border-s-2 border-primary/25 ps-3"
                >
                  <p className="text-white/90 text-sm">
                    {item.label[lang]}
                    {item.controlled_by === "third_party" && (
                      <span className="text-xs text-muted-foreground/70">
                        {" "}
                        ({t("deleteAccountPage.policy.thirdPartyNote")})
                      </span>
                    )}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {item.basis[lang]}
                  </p>
                  <p className="text-muted-foreground/70 text-xs italic mt-0.5">
                    {item.period[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </Card>
  );
};

const RequestDeletionPanel: React.FC = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState<RequestStep>("phone");
  const [phone, setPhone] = useState("");
  const [reference, setReference] = useState("");

  const requestOtp = useRequestDeletionOtp();
  const verifyOtp = useVerifyDeletionOtp();

  const phoneForm = useForm<PhoneFormValues>({ defaultValues: { phone: "" } });
  const otpForm = useForm<OtpFormValues>({
    defaultValues: { otp: "", reason: "" },
  });

  const onSubmitPhone = phoneForm.handleSubmit((values) => {
    const normalized = values.phone.trim();
    requestOtp.mutate(
      { phone: normalized },
      {
        onSuccess: () => {
          setPhone(normalized);
          otpForm.reset({ otp: "", reason: "" });
          setStep("otp");
        },
      },
    );
  });

  const onSubmitOtp = otpForm.handleSubmit((values) => {
    verifyOtp.mutate(
      {
        phone,
        otp: values.otp.trim(),
        reason: values.reason.trim() || undefined,
      },
      {
        onSuccess: (res) => {
          setReference(res.data.reference);
          setStep("success");
        },
      },
    );
  });

  const handleResend = () => {
    requestOtp.mutate({ phone });
  };

  if (step === "success") {
    return (
      <Card className="text-center space-y-4">
        <h3 className="font-tajawal font-bold text-white text-xl">
          {t("deleteAccountPage.form.success.title")}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
          {t("deleteAccountPage.form.success.description")}
        </p>
        <div className="inline-block bg-primary/10 border border-primary/25 rounded-xl px-5 py-3">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {t("deleteAccountPage.form.success.referenceLabel")}
          </p>
          <p className="text-primary font-mono font-semibold text-lg">
            {reference}
          </p>
        </div>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          {t("deleteAccountPage.form.success.note")}
        </p>
        <Button asChild variant="outline" size="lg">
          <Link to={APP_ROUTES.home}>
            {t("deleteAccountPage.form.success.backHome")}
          </Link>
        </Button>
      </Card>
    );
  }

  if (step === "otp") {
    return (
      <Card className="space-y-6">
        <div className="space-y-1">
          <h3 className="font-tajawal font-bold text-white text-lg">
            {t("deleteAccountPage.form.otp.title")}
          </h3>
          <p className="text-muted-foreground text-sm">
            {t("deleteAccountPage.form.otp.description", { phone })}
          </p>
        </div>

        <Form {...otpForm}>
          <form className="space-y-4" onSubmit={onSubmitOtp}>
            <FormField
              control={otpForm.control}
              name="otp"
              rules={{
                required: t("deleteAccountPage.form.otp.invalid"),
                pattern: {
                  value: OTP_PATTERN,
                  message: t("deleteAccountPage.form.otp.invalid"),
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("deleteAccountPage.form.otp.label")}</FormLabel>
                  <FormControl>
                    <Input
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="123456"
                      className="tracking-[0.5em] text-center text-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={otpForm.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("deleteAccountPage.form.otp.reasonLabel")}
                  </FormLabel>
                  <FormControl>
                    <textarea
                      rows={3}
                      placeholder={t(
                        "deleteAccountPage.form.otp.reasonPlaceholder",
                      )}
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                size="lg"
                className="flex-1"
                disabled={verifyOtp.isPending}
              >
                {verifyOtp.isPending && (
                  <Loader2 className="animate-spin" size={16} />
                )}
                {t("deleteAccountPage.form.otp.submit")}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                disabled={requestOtp.isPending}
                onClick={handleResend}
              >
                {requestOtp.isPending && (
                  <Loader2 className="animate-spin" size={16} />
                )}
                {t("deleteAccountPage.form.otp.resend")}
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setStep("phone")}
              className="text-muted-foreground hover:text-primary text-sm underline underline-offset-4 bg-transparent border-0 cursor-pointer"
            >
              {t("deleteAccountPage.form.otp.back")}
            </button>
          </form>
        </Form>
      </Card>
    );
  }

  return (
    <Card>
      <Form {...phoneForm}>
        <form className="space-y-4" onSubmit={onSubmitPhone}>
          <FormField
            control={phoneForm.control}
            name="phone"
            rules={{
              required: t("deleteAccountPage.form.phone.invalid"),
              pattern: {
                value: PHONE_PATTERN,
                message: t("deleteAccountPage.form.phone.invalid"),
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("deleteAccountPage.form.phone.label")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("deleteAccountPage.form.phone.placeholder")}
                    {...field}
                  />
                </FormControl>
                <p className="text-muted-foreground text-sm">
                  {t("deleteAccountPage.form.phone.helper")}
                </p>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={requestOtp.isPending}
          >
            {requestOtp.isPending && (
              <Loader2 className="animate-spin" size={16} />
            )}
            {t("deleteAccountPage.form.phone.submit")}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

const CheckStatusPanel: React.FC = () => {
  const { t } = useTranslation();
  const [detail, setDetail] = useState<DeletionRequestDetail | null>(null);
  const [cancelled, setCancelled] = useState(false);

  const checkStatus = useCheckDeletionRequestStatus();
  const cancelRequest = useCancelDeletionRequest();

  const form = useForm<CheckFormValues>({
    defaultValues: { reference: "", phone: "" },
  });

  const onSubmit = form.handleSubmit((values) => {
    setCancelled(false);
    checkStatus.mutate(
      {
        reference: values.reference.trim(),
        phone: values.phone.trim(),
      },
      {
        onSuccess: (res) => setDetail(res.data),
      },
    );
  });

  const handleCancel = () => {
    if (!window.confirm(t("deleteAccountPage.check.cancelConfirm"))) return;
    const values = form.getValues();
    cancelRequest.mutate(
      {
        reference: values.reference.trim(),
        phone: values.phone.trim(),
      },
      {
        onSuccess: (res) => {
          setDetail(res.data);
          setCancelled(true);
        },
      },
    );
  };

  return (
    <Card className="space-y-6">
      <p className="text-muted-foreground text-sm md:text-base">
        {t("deleteAccountPage.check.description")}
      </p>

      <Form {...form}>
        <form className="space-y-4" onSubmit={onSubmit}>
          <FormField
            control={form.control}
            name="reference"
            rules={{
              required: t("deleteAccountPage.check.referenceInvalid"),
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t("deleteAccountPage.check.referenceLabel")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t(
                      "deleteAccountPage.check.referencePlaceholder",
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            rules={{
              required: t("deleteAccountPage.form.phone.invalid"),
              pattern: {
                value: PHONE_PATTERN,
                message: t("deleteAccountPage.form.phone.invalid"),
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("deleteAccountPage.check.phoneLabel")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("deleteAccountPage.form.phone.placeholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={checkStatus.isPending}
          >
            {checkStatus.isPending && (
              <Loader2 className="animate-spin" size={16} />
            )}
            {t("deleteAccountPage.check.submit")}
          </Button>
        </form>
      </Form>

      {detail && (
        <div className="border-t border-white/8 pt-6 space-y-4">
          {cancelled && (
            <p className="text-primary text-sm bg-primary/5 border border-primary/20 rounded-xl px-4 py-3">
              {t("deleteAccountPage.check.cancelledNotice")}
            </p>
          )}

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">
              {t("deleteAccountPage.check.statusLabel")}
            </span>
            <span
              className={cn(
                "text-xs font-semibold px-3 py-1 rounded-full border",
                statusBadgeClass[detail.status],
              )}
            >
              {t(`deleteAccountPage.check.statuses.${detail.status}`)}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground">
                {t("deleteAccountPage.check.requestedAtLabel")}
              </p>
              <p className="text-white/90">
                {new Date(detail.requested_at).toLocaleDateString()}
              </p>
            </div>
            {detail.scheduled_deletion_at && (
              <div>
                <p className="text-muted-foreground">
                  {t("deleteAccountPage.check.scheduledLabel")}
                </p>
                <p className="text-white/90">
                  {new Date(detail.scheduled_deletion_at).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>

          {detail.review_note && (
            <div>
              <p className="text-muted-foreground text-sm">
                {t("deleteAccountPage.check.reviewNoteLabel")}
              </p>
              <p className="text-white/90 text-sm">{detail.review_note}</p>
            </div>
          )}

          {(detail.status === "pending" || detail.status === "approved") &&
            !cancelled && (
              <Button
                type="button"
                variant="destructive"
                size="lg"
                className="w-full"
                disabled={cancelRequest.isPending}
                onClick={handleCancel}
              >
                {cancelRequest.isPending && (
                  <Loader2 className="animate-spin" size={16} />
                )}
                {t("deleteAccountPage.check.cancelSubmit")}
              </Button>
            )}
        </div>
      )}
    </Card>
  );
};

const DeleteAccount: React.FC = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<Tab>("request");

  return (
    <div>
      <PageHeading title={t("deleteAccountPage.pageTitle")} />

      <section className="py-16 bg-background">
        <Container>
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="heading-page font-tajawal font-black text-white leading-[1.2]">
                {t("deleteAccountPage.heading")}
              </h2>
              <p className="text-muted-foreground text-base max-w-md mx-auto">
                {t("deleteAccountPage.subtitle")}
              </p>
            </div>

            <PolicySection />

            <div className="flex justify-center gap-2 bg-white/5 border border-white/8 rounded-full p-1 w-fit mx-auto">
              {(["request", "check"] as Tab[]).map((tabKey) => (
                <button
                  key={tabKey}
                  type="button"
                  onClick={() => setTab(tabKey)}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer border-0",
                    tab === tabKey
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent text-muted-foreground hover:text-white",
                  )}
                >
                  {t(`deleteAccountPage.tabs.${tabKey}`)}
                </button>
              ))}
            </div>

            {tab === "request" ? (
              <RequestDeletionPanel />
            ) : (
              <CheckStatusPanel />
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DeleteAccount;
