import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { month: "Jan", actual: 4000, forecast: 4200, lower: 3800, upper: 4600 },
  { month: "Feb", actual: 3000, forecast: 3100, lower: 2700, upper: 3500 },
  { month: "Mar", actual: 2000, forecast: 2200, lower: 1800, upper: 2600 },
  { month: "Apr", actual: 2780, forecast: 2900, lower: 2500, upper: 3300 },
  { month: "May", actual: 1890, forecast: 2000, lower: 1600, upper: 2400 },
  { month: "Jun", forecast: 2390, lower: 2000, upper: 2800 },
  { month: "Jul", forecast: 3490, lower: 3000, upper: 4000 },
];

export const ForecastChart = () => {
  return (
    <Card className="data-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Demand Forecast</h3>
        <p className="text-sm text-muted-foreground">Historical & predicted demand with confidence intervals</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem"
            }}
          />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="upper" 
            stroke="none" 
            fill="url(#colorConfidence)" 
            fillOpacity={1}
          />
          <Area 
            type="monotone" 
            dataKey="lower" 
            stroke="none" 
            fill="hsl(var(--background))" 
            fillOpacity={1}
          />
          <Line 
            type="monotone" 
            dataKey="actual" 
            stroke="hsl(var(--chart-1))" 
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="forecast" 
            stroke="hsl(var(--chart-2))" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
