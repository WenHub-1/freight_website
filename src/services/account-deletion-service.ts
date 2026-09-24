import { useMutation, useQuery } from "@tanstack/react-query";
import { axios, type ApiResponse } from "@/lib/axios";

const BASE = "/account-deletion/public";

export interface PolicyLabel {
  en: string;
  ar: string;
}

export interface PolicyItem {
  key: string;
  label: PolicyLabel;
  basis: PolicyLabel;
  period: PolicyLabel;
  controlled_by?: "qdam" | "third_party";
}

export interface DeletionPolicy {
  grace_period_days: number;
  completion_sla_days: number;
  deletion_record_retention_months: number;
  audit_snapshot_redaction_months: number;
  deleted: PolicyItem[];
  retained: PolicyItem[];
}

export const useDeletionPolicy = () =>
  useQuery({
    queryKey: ["account-deletion-policy"],
    queryFn: async () => {
      const res = (await axios.get(
        `${BASE}/policy`,
      )) as unknown as ApiResponse<DeletionPolicy>;
      return res.data;
    },
  });

export interface RequestOtpPayload {
  phone: string;
}

export const useRequestDeletionOtp = () =>
  useMutation({
    mutationFn: (payload: RequestOtpPayload) =>
      axios.post(`${BASE}/otp/request`, payload) as unknown as Promise<
        ApiResponse<null>
      >,
  });

export type DeletionRequestStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "cancelled"
  | "completed";

export interface VerifyOtpPayload {
  phone: string;
  otp: string;
  reason?: string;
}

export interface VerifyOtpResult {
  reference: string;
  status: DeletionRequestStatus;
}

export const useVerifyDeletionOtp = () =>
  useMutation({
    mutationFn: (payload: VerifyOtpPayload) =>
      axios.post(`${BASE}/otp/verify`, payload) as unknown as Promise<
        ApiResponse<VerifyOtpResult>
      >,
  });

export interface CheckRequestPayload {
  reference: string;
  phone: string;
}

export interface DeletionRequestDetail {
  reference: string;
  status: DeletionRequestStatus;
  requested_at: string;
  scheduled_deletion_at: string | null;
  completed_at: string | null;
  review_note: string | null;
}

export const useCheckDeletionRequestStatus = () =>
  useMutation({
    mutationFn: (payload: CheckRequestPayload) =>
      axios.post(`${BASE}/requests/status`, payload) as unknown as Promise<
        ApiResponse<DeletionRequestDetail>
      >,
  });

export const useCancelDeletionRequest = () =>
  useMutation({
    mutationFn: (payload: CheckRequestPayload) =>
      axios.post(`${BASE}/requests/cancel`, payload) as unknown as Promise<
        ApiResponse<DeletionRequestDetail>
      >,
  });
