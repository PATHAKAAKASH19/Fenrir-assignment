import { Badge } from "./badge";
import { cn } from "../../lib/utils";
import { IconCheck, IconClock, IconX, IconLoader2 } from "@tabler/icons-react";

type StatusType = "completed" | "scheduled" | "failed" | "in_progress";

interface StatusChipProps {
  status: StatusType;
  className?: string;
}

const statusConfig = {
  completed: {
    color:
      "bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20",
    icon: IconCheck,
    label: "Completed",
  },
  scheduled: {
    color:
      "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20 border-gray-500/20",
    icon: IconClock,
    label: "Scheduled",
  },
  failed: {
    color: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20",
    icon: IconX,
    label: "Failed",
  },
  in_progress: {
    color:
      "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20",
    icon: IconLoader2,
    label: "In Progress",
  },
};

export function StatusChip({ status, className }: StatusChipProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge variant="outline" className={cn(config.color, "border", className)}>
      <Icon
        size={12}
        className={cn("mr-1", status === "in_progress" && "animate-spin")}
      />
      {config.label}
    </Badge>
  );
}
