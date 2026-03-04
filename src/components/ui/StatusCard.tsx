import { Card, CardContent } from "./card";
import { cn } from "../../lib/utils";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";

interface StatCardProps {
  title: string;
  value: number | string;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  icon,
  className,
}: StatCardProps) {
  const isPositive = change && change > 0;
  const ChangeIcon = isPositive ? IconArrowUpRight : IconArrowDownRight;
  const changeColor = isPositive ? "text-green-500" : "text-red-500";

  return (
    <Card className={cn("hover:shadow-md transition-shadow", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{title}</span>
          {icon && <span className="text-muted-foreground">{icon}</span>}
        </div>
        <div className="mt-2 flex items-baseline justify-between">
          <span className="text-2xl font-bold">{value}</span>
          {change !== undefined && (
            <span className={cn("flex items-center text-sm", changeColor)}>
              <ChangeIcon size={16} />
              {Math.abs(change)}%
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
