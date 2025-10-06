import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: LucideIcon;
}

export const KPICard = ({ title, value, change, trend, icon: Icon }: KPICardProps) => {
  const trendColor = {
    up: "text-success",
    down: "text-destructive",
    neutral: "text-muted-foreground",
  }[trend];

  return (
    <Card className="stat-card">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <p className={`text-sm mt-1 ${trendColor}`}>{change}</p>
        </div>
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};
