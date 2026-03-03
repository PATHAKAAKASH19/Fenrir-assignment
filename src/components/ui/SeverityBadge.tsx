import { Badge } from "./badge";
import { cn } from "../../lib/utils";
import { IconAlertTriangle, IconArrowUp, IconMinus, IconArrowDown } from "@tabler/icons-react";

type SeverityLevel = "critical" | "high" | "medium" | "low";

interface SeverityBadgeProps {
  severity: SeverityLevel;
  count?: number;
  showIcon?: boolean;
  className?: string;
}

const severityConfig = {
  critical: {
    color: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20",
    icon: IconAlertTriangle,
  },
  high: {
    color:
      "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-orange-500/20",
    icon: IconArrowUp,
  },
  medium: {
    color:
      "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20",
    icon: IconMinus,
  },
  low: {
    color:
      "bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20",
    icon: IconArrowDown,
  },
};

export function SeverityBadge({
  severity,
  count,
  showIcon = true,
  className,
}: SeverityBadgeProps) {
  const config = severityConfig[severity];
  const Icon = config.icon;

  return (
    <Badge variant="outline" className={cn(config.color, "border", className)}>
      {showIcon && <Icon size={12} className="mr-1" />}
      <span className="capitalize">{severity}</span>
      {count !== undefined && (
        <span className="ml-1.5 rounded-full bg-black/20 px-1.5 py-0.5 text-[10px]">
          {count}
        </span>
      )}
    </Badge>
  );
}
