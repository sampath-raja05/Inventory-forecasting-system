import { DollarSign, TrendingUp, AlertCircle, Package } from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";
import { ForecastChart } from "@/components/dashboard/ForecastChart";
import { NetworkGraph } from "@/components/dashboard/NetworkGraph";
import { ReorderQueue } from "@/components/dashboard/ReorderQueue";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Real-time overview of your inventory intelligence
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Stock Value"
          value="₹2.4 Cr"
          change="+12.5% from last month"
          trend="up"
          icon={DollarSign}
        />
        <KPICard
          title="Service Level"
          value="96.8%"
          change="+2.3% from last month"
          trend="up"
          icon={TrendingUp}
        />
        <KPICard
          title="Stockouts"
          value="3"
          change="-5 from last week"
          trend="up"
          icon={AlertCircle}
        />
        <KPICard
          title="Carrying Cost"
          value="₹45 L"
          change="-8.2% from last month"
          trend="up"
          icon={Package}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ForecastChart />
        <NetworkGraph />
      </div>

      <ReorderQueue />
    </div>
  );
};

export default Dashboard;
