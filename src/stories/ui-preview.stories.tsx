import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  InboxIcon,
  SearchIcon,
  UserIcon,
  MailIcon,
  SettingsIcon,
  ChevronRightIcon,
  FileIcon,
  AlertCircleIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-3">
      <h2 className="border-b pb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  title: "UI/Preview",
  parameters: {
    layout: "padded",
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

// ---------------------------------------------------------------------------
// All components overview
// ---------------------------------------------------------------------------

function AllComponentsRender() {
  const [calDate, setCalDate] = React.useState<Date | undefined>(new Date())
  const [sliderValue, setSliderValue] = React.useState([40])

  return (
    <TooltipProvider>
      <div className="max-w-3xl space-y-10">
        {/* Accordion */}
        <Section title="Accordion">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-80"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
              <AccordionContent>
                A collection of re-usable components built with Radix UI and
                Tailwind CSS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes — built on Radix UI primitives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I customize it?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Copy the source and make it your own.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        {/* Alert */}
        <Section title="Alert">
          <div className="w-full max-w-md space-y-2">
            <Alert>
              <AlertCircleIcon />
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>
                This is a default alert with some information.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Something went wrong</AlertTitle>
              <AlertDescription>
                Your session has expired. Please sign in again.
              </AlertDescription>
            </Alert>
          </div>
        </Section>

        {/* AlertDialog */}
        <Section title="Alert Dialog">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone and will permanently delete your
                  account.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Section>

        {/* Avatar */}
        <Section title="Avatar">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>
                <UserIcon className="size-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </Section>

        {/* Badge */}
        <Section title="Badge — all variants">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="link">Link</Badge>
          </div>
        </Section>

        {/* Breadcrumb */}
        <Section title="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Section>

        {/* Button */}
        <Section title="Button — variants">
          <div className="flex flex-wrap items-center gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </Section>
        <Section title="Button — sizes">
          <div className="flex flex-wrap items-end gap-2">
            <Button size="lg">Large</Button>
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="xs">XSmall</Button>
            <Button size="icon">
              <UserIcon />
            </Button>
            <Button size="icon-lg">
              <UserIcon />
            </Button>
            <Button size="icon-sm">
              <UserIcon />
            </Button>
            <Button size="icon-xs">
              <UserIcon />
            </Button>
          </div>
        </Section>
        <Section title="Button — states">
          <div className="flex flex-wrap items-center gap-2">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled outline
            </Button>
            <Button>
              <Spinner className="mr-1" />
              Loading
            </Button>
          </div>
        </Section>

        {/* ButtonGroup */}
        <Section title="Button Group">
          <div className="flex flex-wrap items-start gap-4">
            <ButtonGroup>
              <Button variant="outline">Left</Button>
              <Button variant="outline">Center</Button>
              <Button variant="outline">Right</Button>
            </ButtonGroup>
            <ButtonGroup orientation="vertical">
              <Button variant="outline">Top</Button>
              <Button variant="outline">Middle</Button>
              <Button variant="outline">Bottom</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline">
                <BoldIcon />
              </Button>
              <ButtonGroupSeparator />
              <Button variant="outline">
                <ItalicIcon />
              </Button>
              <Button variant="outline">
                <UnderlineIcon />
              </Button>
            </ButtonGroup>
          </div>
        </Section>

        {/* Calendar */}
        <Section title="Calendar">
          <Calendar
            mode="single"
            selected={calDate}
            onSelect={setCalDate}
            className="w-fit rounded-md border"
          />
        </Section>

        {/* Card */}
        <Section title="Card">
          <Card className="w-80">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Manage your notification preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Push notifications are currently enabled for this device.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">Save</Button>
              <Button size="sm" variant="ghost">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </Section>

        {/* Checkbox */}
        <Section title="Checkbox">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="cb1" defaultChecked />
              <Label htmlFor="cb1">Checked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb2" />
              <Label htmlFor="cb2">Unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb3" disabled />
              <Label htmlFor="cb3" className="opacity-50">
                Disabled
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb4" defaultChecked disabled />
              <Label htmlFor="cb4" className="opacity-50">
                Checked disabled
              </Label>
            </div>
          </div>
        </Section>

        {/* Collapsible */}
        <Section title="Collapsible">
          <Collapsible defaultOpen className="w-80 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Starred repositories</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <ChevronRightIcon />
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-3 py-2 text-sm">shadcn/ui</div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-3 py-2 text-sm">
                radix-ui/primitives
              </div>
              <div className="rounded-md border px-3 py-2 text-sm">
                tailwindlabs/tailwindcss
              </div>
            </CollapsibleContent>
          </Collapsible>
        </Section>

        {/* Dialog */}
        <Section title="Dialog">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 py-2">
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input defaultValue="Ada Lovelace" />
                </Field>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input defaultValue="ada@example.com" type="email" />
                </Field>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <Button>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Section>

        {/* Drawer */}
        <Section title="Drawer">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>
                  Set your daily activity goal.
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4 py-2">
                <p className="text-sm text-muted-foreground">
                  Slider here or other controls.
                </p>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Section>

        {/* DropdownMenu */}
        <Section title="Dropdown Menu">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserIcon className="mr-2 size-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MailIcon className="mr-2 size-4" />
                Messages
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon className="mr-2 size-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Section>

        {/* Empty */}
        <Section title="Empty — default">
          <Empty className="w-80 border">
            <EmptyHeader>
              <EmptyMedia>
                <InboxIcon className="size-8 text-muted-foreground" />
              </EmptyMedia>
              <EmptyTitle>No messages</EmptyTitle>
              <EmptyDescription>
                Your inbox is empty. New messages will appear here.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm" variant="outline">
                Compose
              </Button>
            </EmptyContent>
          </Empty>
        </Section>
        <Section title="Empty — icon variant">
          <Empty className="w-80 border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <InboxIcon />
              </EmptyMedia>
              <EmptyTitle>No results</EmptyTitle>
              <EmptyDescription>
                Try adjusting your search or filters.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </Section>

        {/* Field */}
        <Section title="Field — orientations">
          <FieldGroup className="max-w-sm">
            <Field orientation="vertical">
              <FieldLabel>Vertical (default)</FieldLabel>
              <Input placeholder="Enter value" />
              <FieldDescription>Helper text below the input.</FieldDescription>
            </Field>
            <Field orientation="horizontal">
              <FieldLabel>Horizontal</FieldLabel>
              <Input placeholder="Enter value" />
            </Field>
            <Field orientation="vertical" data-invalid="true">
              <FieldLabel>With error</FieldLabel>
              <Input aria-invalid placeholder="Enter value" />
              <FieldError>This field is required.</FieldError>
            </Field>
          </FieldGroup>
        </Section>

        {/* HoverCard */}
        <Section title="Hover Card">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@shadcn</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium">@shadcn</p>
                  <p className="text-xs text-muted-foreground">
                    Creator of shadcn/ui.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Section>

        {/* Input */}
        <Section title="Input — states">
          <div className="w-80 space-y-2">
            <Input placeholder="Default" />
            <Input placeholder="Disabled" disabled />
            <Input placeholder="Invalid" aria-invalid />
            <Input
              type="password"
              placeholder="Password"
              defaultValue="secret"
            />
          </div>
        </Section>

        {/* InputGroup */}
        <Section title="Input Group">
          <div className="w-80 space-y-2">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="example.com" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon className="size-4 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search…" />
              <InputGroupAddon align="inline-end">
                <Kbd>⌘K</Kbd>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Section>

        {/* InputOTP */}
        <Section title="Input OTP">
          <InputOTP maxLength={6} defaultValue="123456">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Section>

        {/* Item */}
        <Section title="Item — variants × sizes">
          {(["default", "outline", "muted"] as const).map((variant) => (
            <div key={variant} className="space-y-1">
              <p className="text-xs text-muted-foreground capitalize">
                {variant}
              </p>
              <ItemGroup>
                {(["default", "sm", "xs"] as const).map((size) => (
                  <Item key={size} variant={variant} size={size}>
                    <ItemMedia variant="icon">
                      <FileIcon />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{`${variant} / ${size}`}</ItemTitle>
                      <ItemDescription>
                        Supporting description text
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Button size="icon-xs" variant="ghost">
                        <ChevronRightIcon />
                      </Button>
                    </ItemActions>
                  </Item>
                ))}
              </ItemGroup>
            </div>
          ))}
        </Section>

        {/* Kbd */}
        <Section title="Kbd">
          <div className="flex flex-wrap items-center gap-3">
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
            <KbdGroup>
              <Kbd>⌃</Kbd>
              <Kbd>⇧</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
            <Kbd>Enter</Kbd>
            <Kbd>Escape</Kbd>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>⌫</Kbd>
            </KbdGroup>
          </div>
        </Section>

        {/* Label */}
        <Section title="Label">
          <div className="flex flex-col gap-2">
            <Label>Default label</Label>
            <div className="flex items-center gap-2">
              <Checkbox id="label-ex" defaultChecked />
              <Label htmlFor="label-ex">Label with checkbox</Label>
            </div>
          </div>
        </Section>

        {/* NativeSelect */}
        <Section title="Native Select — sizes">
          <div className="flex flex-wrap items-center gap-3">
            <NativeSelect defaultValue="one">
              <NativeSelectOption value="one">Default size</NativeSelectOption>
              <NativeSelectOption value="two">Option two</NativeSelectOption>
            </NativeSelect>
            <NativeSelect size="sm" defaultValue="one">
              <NativeSelectOption value="one">Small size</NativeSelectOption>
              <NativeSelectOption value="two">Option two</NativeSelectOption>
            </NativeSelect>
            <NativeSelect disabled defaultValue="one">
              <NativeSelectOption value="one">Disabled</NativeSelectOption>
            </NativeSelect>
          </div>
        </Section>

        {/* Pagination */}
        <Section title="Pagination">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Section>

        {/* Popover */}
        <Section title="Popover">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Dimensions</h4>
                <p className="text-xs text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
                <div className="space-y-1.5">
                  <Field orientation="horizontal">
                    <FieldLabel className="w-16">Width</FieldLabel>
                    <Input defaultValue="100%" className="h-7" />
                  </Field>
                  <Field orientation="horizontal">
                    <FieldLabel className="w-16">Height</FieldLabel>
                    <Input defaultValue="auto" className="h-7" />
                  </Field>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </Section>

        {/* Progress */}
        <Section title="Progress">
          <div className="w-80 space-y-2">
            <Progress value={0} />
            <Progress value={25} />
            <Progress value={60} />
            <Progress value={100} />
          </div>
        </Section>

        {/* RadioGroup */}
        <Section title="Radio Group">
          <RadioGroup defaultValue="option-a" className="space-y-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-a" id="r1" />
              <Label htmlFor="r1">Option A</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-b" id="r2" />
              <Label htmlFor="r2">Option B</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-c" id="r3" disabled />
              <Label htmlFor="r3" className="opacity-50">
                Option C (disabled)
              </Label>
            </div>
          </RadioGroup>
        </Section>

        {/* ScrollArea */}
        <Section title="Scroll Area">
          <ScrollArea className="h-32 w-64 rounded-md border p-3">
            {Array.from({ length: 12 }, (_, i) => (
              <p key={i} className="text-sm text-muted-foreground">
                Item {i + 1}
              </p>
            ))}
          </ScrollArea>
        </Section>

        {/* Select */}
        <Section title="Select">
          <div className="w-64 space-y-2">
            <Select defaultValue="one">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one">Option one</SelectItem>
                <SelectItem value="two">Option two</SelectItem>
                <SelectItem value="three">Option three</SelectItem>
              </SelectContent>
            </Select>
            <Select disabled>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one">Option one</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Section>

        {/* Separator */}
        <Section title="Separator">
          <div className="space-y-3">
            <div className="w-80">
              <p className="text-sm">Above</p>
              <Separator className="my-2" />
              <p className="text-sm">Below</p>
            </div>
            <div className="flex h-6 items-center gap-2">
              <span className="text-sm">Left</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Right</span>
            </div>
          </div>
        </Section>

        {/* Skeleton */}
        <Section title="Skeleton">
          <div className="w-64 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/5" />
            <div className="flex items-center gap-2 pt-1">
              <Skeleton className="size-8 rounded-full" />
              <div className="flex-1 space-y-1.5">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
          </div>
        </Section>

        {/* Slider */}
        <Section title="Slider">
          <div className="w-64 space-y-4">
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={1}
            />
            <Slider defaultValue={[75]} max={100} />
            <Slider defaultValue={[30]} max={100} disabled />
          </div>
        </Section>

        {/* Spinner */}
        <Section title="Spinner">
          <div className="flex items-center gap-4">
            <Spinner className="size-4" />
            <Spinner className="size-6" />
            <Spinner className="size-8" />
          </div>
        </Section>

        {/* Switch */}
        <Section title="Switch">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch id="sw1" defaultChecked />
              <Label htmlFor="sw1">On</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="sw2" />
              <Label htmlFor="sw2">Off</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="sw3" disabled />
              <Label htmlFor="sw3" className="opacity-50">
                Disabled
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="sw4" defaultChecked disabled />
              <Label htmlFor="sw4" className="opacity-50">
                Checked disabled
              </Label>
            </div>
          </div>
        </Section>

        {/* Table */}
        <Section title="Table">
          <Table className="w-full max-w-lg">
            <TableCaption>Recent transactions</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "Alice", status: "Paid", amount: "$250.00" },
                { name: "Bob", status: "Pending", amount: "$150.00" },
                { name: "Carol", status: "Failed", amount: "$350.00" },
              ].map((row) => (
                <TableRow key={row.name}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell className="text-right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Section>

        {/* Tabs */}
        <Section title="Tabs — default variant">
          <Tabs defaultValue="account" className="w-80">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="pt-2 text-sm text-muted-foreground">
                Account settings.
              </p>
            </TabsContent>
            <TabsContent value="password">
              <p className="pt-2 text-sm text-muted-foreground">
                Change your password.
              </p>
            </TabsContent>
            <TabsContent value="billing">
              <p className="pt-2 text-sm text-muted-foreground">
                Manage billing.
              </p>
            </TabsContent>
          </Tabs>
        </Section>
        <Section title="Tabs — line variant">
          <Tabs defaultValue="account" className="w-80">
            <TabsList variant="line">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="pt-2 text-sm text-muted-foreground">
                Account settings.
              </p>
            </TabsContent>
            <TabsContent value="password">
              <p className="pt-2 text-sm text-muted-foreground">
                Change your password.
              </p>
            </TabsContent>
            <TabsContent value="billing">
              <p className="pt-2 text-sm text-muted-foreground">
                Manage billing.
              </p>
            </TabsContent>
          </Tabs>
        </Section>

        {/* Textarea */}
        <Section title="Textarea">
          <div className="w-80 space-y-2">
            <Textarea placeholder="Write something…" />
            <Textarea placeholder="Disabled" disabled />
            <Textarea placeholder="Invalid" aria-invalid />
          </div>
        </Section>

        {/* Toggle */}
        <Section title="Toggle — variants × sizes">
          <div className="space-y-2">
            {(["default", "outline"] as const).map((variant) => (
              <div key={variant} className="flex flex-wrap items-center gap-2">
                <span className="w-16 text-xs text-muted-foreground">
                  {variant}
                </span>
                {(["sm", "default", "lg"] as const).map((size) => (
                  <Toggle
                    key={size}
                    variant={variant}
                    size={size}
                    aria-label={`${variant} ${size}`}
                  >
                    <BoldIcon />
                  </Toggle>
                ))}
              </div>
            ))}
          </div>
        </Section>

        {/* ToggleGroup */}
        <Section title="Toggle Group">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-muted-foreground">single</span>
              <ToggleGroup type="single" defaultValue="bold">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <BoldIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <ItalicIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <UnderlineIcon />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-muted-foreground">
                multiple
              </span>
              <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <BoldIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <ItalicIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <UnderlineIcon />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-muted-foreground">
                outline
              </span>
              <ToggleGroup
                type="multiple"
                variant="outline"
                defaultValue={["bold"]}
              >
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <BoldIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <ItalicIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <UnderlineIcon />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </Section>

        {/* Tooltip */}
        <Section title="Tooltip">
          <div className="flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <SearchIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Search</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <SettingsIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Settings <Kbd className="ml-1">⌘,</Kbd>
              </TooltipContent>
            </Tooltip>
          </div>
        </Section>
      </div>
    </TooltipProvider>
  )
}

export const Overview: Story = {
  render: () => <AllComponentsRender />,
}

// ---------------------------------------------------------------------------
// Individual stories (kept for focused testing)
// ---------------------------------------------------------------------------

export const Buttons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const Inputs: Story = {
  render: () => (
    <div className="w-80 space-y-3">
      <Input placeholder="Default input" />
      <Input disabled placeholder="Disabled input" />
      <Input aria-invalid placeholder="Invalid input" />
    </div>
  ),
}

export const Badges: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
}

export const Selects: Story = {
  render: () => (
    <div className="w-80 space-y-3">
      <Select defaultValue="one">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="one">Option one</SelectItem>
          <SelectItem value="two">Option two</SelectItem>
          <SelectItem value="three">Option three</SelectItem>
        </SelectContent>
      </Select>

      <Select disabled>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Disabled select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="one">Option one</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}
