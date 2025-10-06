import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { month: "Jan", actual: 4200, forecast: 4000, upper: 4500, lower: 3500 },
  { month: "Feb", actual: 3800, forecast: 3900, upper: 4400, lower: 3400 },
  { month: "Mar", actual: 4500, forecast: 4300, upper: 4800, lower: 3800 },
  { month: "Apr", actual: 4800, forecast: 4700, upper: 5200, lower: 4200 },
  { month: "May", actual: 5200, forecast: 5100, upper: 5600, lower: 4600 },
  { month: "Jun", actual: null, forecast: 5400, upper: 5900, lower: 4900 },
  { month: "Jul", actual: null, forecast: 5600, upper: 6100, lower: 5100 },
];

export function ForecastChart() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Demand Forecast</CardTitle>
        <CardDescription>
          Historical sales and AI-powered forecast with confidence intervals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
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
                stackId="1"
                stroke="none"
                fill="url(#colorConfidence)"
                name="Upper Bound"
              />
              <Area
                type="monotone"
                dataKey="lower"
                stackId="1"
                stroke="none"
                fill="transparent"
                name="Lower Bound"
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-1))" }}
                name="Actual Sales"
              />
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "hsl(var(--chart-2))" }}
                name="Forecast"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
