export type SeverityLevel = "critical" | "high" | "medium" | "low";

export type StatusType = "completed" | "scheduled" | "failed" | "in_progress";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg";

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}



