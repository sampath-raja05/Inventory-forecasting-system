import { DollarSign, TrendingUp, AlertTriangle, Package } from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";
import { ForecastChart } from "@/components/dashboard/ForecastChart";
import { NetworkPreview } from "@/components/dashboard/NetworkPreview";
import { ReorderQueue } from "@/components/dashboard/ReorderQueue";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">
          Real-time inventory insights and AI-powered forecasts
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Stock Value"
          value="$2.4M"
          change="+12.3%"
          trend="up"
          icon={DollarSign}
        />
        <KPICard
          title="Service Level"
          value="96.8%"
          change="+2.1%"
          trend="up"
          icon={TrendingUp}
        />
        <KPICard
          title="Active Stockouts"
          value="3"
          change="-5 items"
          trend="up"
          icon={AlertTriangle}
        />
        <KPICard
          title="Carrying Cost"
          value="$48.2K"
          change="-8.4%"
          trend="down"
          icon={Package}
        />
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ForecastChart />
        </div>
        <NetworkPreview />
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <ReorderQueue />
        <div className="lg:col-span-2">
          {/* Placeholder for additional widgets */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
