import React from "react";
import { useForm } from "react-hook-form";
import { BarChart3, Check, Home, Mail, Settings, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter as DialogFooterSection,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ThemeSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

function ThemeSection({ title, description, children }: ThemeSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}

const buttonVariants: Array<{
  label: string;
  props: React.ComponentProps<typeof Button>;
}> = [
  { label: "Default", props: { children: "Default" } },
  {
    label: "Secondary",
    props: { children: "Secondary", variant: "secondary" },
  },
  {
    label: "Destructive",
    props: { children: "Destructive", variant: "destructive" },
  },
  { label: "Outline", props: { children: "Outline", variant: "outline" } },
  { label: "Ghost", props: { children: "Ghost", variant: "ghost" } },
  { label: "Link", props: { children: "Link", variant: "link" } },
];

const buttonSizes: Array<{
  label: string;
  props: React.ComponentProps<typeof Button>;
}> = [
  { label: "Small", props: { children: "Small", size: "sm" } },
  { label: "Default", props: { children: "Default", size: "default" } },
  { label: "Large", props: { children: "Large", size: "lg" } },
  { label: "Icon", props: { children: <Check />, size: "icon" } },
];

const tableData = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { name: "Ben Ibarra", email: "ben@example.com", role: "Editor" },
  { name: "Chloe King", email: "chloe@example.com", role: "Viewer" },
];

type DemoFormValues = {
  name: string;
  email: string;
  plan: string;
};

const ThemePage: React.FC = () => {
  const form = useForm<DemoFormValues>({
    defaultValues: {
      name: "",
      email: "",
      plan: "pro",
    },
  });

  return (
    <div className="bg-background text-foreground min-h-screen space-y-10 px-6 py-10 lg:px-12">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">
          Theme Playground
        </p>
        <h1 className="text-3xl font-semibold">Component Catalogue</h1>
        <p className="text-muted-foreground max-w-2xl">
          Explore the full design system—each card demonstrates a component, its
          key states, and how it responds to the active theme tokens.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <ThemeSection
          title="Buttons"
          description="Primary actions, secondary emphasis, and utility button styles."
        >
          <div className="flex flex-wrap gap-3">
            {buttonVariants.map(({ label, props }) => (
              <div key={label} className="flex flex-col items-start gap-1">
                <Label className="text-xs uppercase text-muted-foreground">
                  {label}
                </Label>
                <Button {...props} />
              </div>
            ))}
          </div>
          <Separator />
          <div className="flex flex-wrap gap-3">
            {buttonSizes.map(({ label, props }) => (
              <div key={label} className="flex flex-col items-start gap-1">
                <Label className="text-xs uppercase text-muted-foreground">
                  {label}
                </Label>
                <Button variant="secondary" {...props} />
              </div>
            ))}
          </div>
        </ThemeSection>

        <ThemeSection
          title="Inputs & Form"
          description="Form controls, helper text, and validation messaging."
        >
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit((values) => {
                console.info("Form submitted", values);
              })}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="Alex Smith" {...field} />
                    </FormControl>
                    <FormDescription>
                      This name appears across the application.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose a plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectLabel>Available plans</SelectLabel>
                          <SelectItem value="starter">Starter</SelectItem>
                          <SelectItem value="pro">Pro</SelectItem>
                          <SelectItem value="enterprise">Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <Button type="submit">Save changes</Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </ThemeSection>

        <ThemeSection
          title="Cards"
          description="Surface containers for grouping related content."
        >
          <div className="grid gap-4">
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle>Onboarding progress</CardTitle>
                <CardDescription>
                  Summarise a workflow with supporting actions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Completed steps
                    </p>
                    <p className="text-2xl font-semibold">3 / 5</p>
                  </div>
                  <Skeleton className="h-16 w-24 rounded-xl" />
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button size="sm" variant="outline">
                  Skip for now
                </Button>
                <Button size="sm">Continue setup</Button>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Collaborators</CardTitle>
                <CardDescription>
                  Invite teammates and assign roles.
                </CardDescription>
                <CardAction>
                  <Button size="sm" variant="secondary">
                    Invite
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="space-y-2">
                {tableData.map((user) => (
                  <div
                    key={user.email}
                    className="flex items-center justify-between rounded-lg border bg-background px-3 py-2"
                  >
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {user.email}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Manage
                    </Button>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="link" size="sm">
                  View all collaborators
                </Button>
              </CardFooter>
            </Card>
          </div>
        </ThemeSection>

        <ThemeSection
          title="Data Display"
          description="Tables, separators, tooltips, and skeleton states."
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.email}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableCaption>
              Team members and their current access level.
            </TableCaption>
          </Table>
          <Separator />
          <div className="flex flex-wrap items-center gap-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="secondary">
                  <Mail />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Send notification</TooltipContent>
            </Tooltip>
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-56" />
              <Skeleton className="h-4 w-44" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
        </ThemeSection>

        <ThemeSection
          title="Overlays"
          description="Dialogs and sheets inherit theme colors for interactive layers."
        >
          <div className="flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite teammate</DialogTitle>
                  <DialogDescription>
                    Share permissions and send an email invitation in one step.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3">
                  <Label htmlFor="invite-email">Email</Label>
                  <Input
                    id="invite-email"
                    placeholder="new.member@example.com"
                    type="email"
                  />
                </div>
                <DialogFooterSection className="gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Send invite</Button>
                </DialogFooterSection>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary">Open sheet</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Quick settings</SheetTitle>
                  <SheetDescription>
                    Update account preferences and notification rules.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 px-4">
                  <div className="space-y-2">
                    <Label>Daily summary</Label>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Notifications</Label>
                    <Select defaultValue="email">
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="sms">SMS</SelectItem>
                        <SelectItem value="push">Push</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline">Discard</Button>
                  <Button>Apply changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </ThemeSection>

        <ThemeSection
          title="Sidebar Layout"
          description="Navigation chrome and inset content areas."
        >
          <SidebarProvider className="rounded-xl border shadow-sm">
            <div className="flex h-96 overflow-hidden rounded-xl">
              <Sidebar>
                <SidebarHeader>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="secondary">
                        <BarChart3 className="size-4" />
                      </Button>
                      <span className="font-semibold">WenHub</span>
                    </div>
                    <SidebarTrigger />
                  </div>
                </SidebarHeader>
                <SidebarSeparator />
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton isActive>
                          <Home className="size-4" />
                          <span>Overview</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Users className="size-4" />
                          <span>Teams</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Settings className="size-4" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroup>
                </SidebarContent>
                <SidebarFooter className="mt-auto">
                  <Separator />
                  <div className="flex items-center justify-between px-2 py-3">
                    <div>
                      <p className="text-sm font-medium">Alex Rivera</p>
                      <p className="text-muted-foreground text-xs">
                        alex@wenhub.com
                      </p>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Mail className="size-4" />
                    </Button>
                  </div>
                </SidebarFooter>
              </Sidebar>
              <SidebarInset className="bg-muted/20">
                <div className="flex h-full flex-col gap-4 p-6">
                  <div>
                    <h2 className="text-lg font-semibold">Project health</h2>
                    <p className="text-muted-foreground text-sm">
                      High-level summary of key metrics.
                    </p>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Active users</CardTitle>
                        <CardDescription>Last 7 days</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-semibold">1,204</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Conversion</CardTitle>
                        <CardDescription>Current quarter</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-semibold">18.5%</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </ThemeSection>
      </div>
    </div>
  );
};

export default ThemePage;
