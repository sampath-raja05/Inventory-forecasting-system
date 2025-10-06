import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Download, Settings } from "lucide-react";

const forecastData = [
  { month: "Jan", sales: 4200, forecast: 4100, arima: 4050, prophet: 4150 },
  { month: "Feb", sales: 3800, forecast: 3900, arima: 3850, prophet: 3920 },
  { month: "Mar", sales: 4500, forecast: 4400, arima: 4380, prophet: 4420 },
  { month: "Apr", sales: 4800, forecast: 4700, arima: 4650, prophet: 4730 },
  { month: "May", sales: 5200, forecast: 5100, arima: 5050, prophet: 5130 },
];

const errorMetrics = [
  { model: "ARIMA", mae: 145, rmse: 187, mape: 3.2 },
  { model: "Prophet", mae: 132, rmse: 168, mape: 2.9 },
  { model: "ML Ensemble", mae: 121, rmse: 155, mape: 2.6 },
];

const Forecast = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Forecast & Analysis</h1>
          <p className="text-muted-foreground mt-1">
            Compare models and analyze demand patterns
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Select defaultValue="all-products">
          <SelectTrigger>
            <SelectValue placeholder="Select Product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-products">All Products</SelectItem>
            <SelectItem value="widget-a">Widget A</SelectItem>
            <SelectItem value="component-b">Component B</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="6-months">
          <SelectTrigger>
            <SelectValue placeholder="Forecast Horizon" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3-months">3 Months</SelectItem>
            <SelectItem value="6-months">6 Months</SelectItem>
            <SelectItem value="12-months">12 Months</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="daily">
          <SelectTrigger>
            <SelectValue placeholder="Granularity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="comparison" className="space-y-4">
        <TabsList>
          <TabsTrigger value="comparison">Model Comparison</TabsTrigger>
          <TabsTrigger value="accuracy">Accuracy Metrics</TabsTrigger>
          <TabsTrigger value="seasonality">Seasonality</TabsTrigger>
        </TabsList>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Forecast Model Comparison</CardTitle>
              <CardDescription>
                Historical sales vs. multiple forecasting models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={forecastData}>
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
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                      name="Actual Sales"
                    />
                    <Line
                      type="monotone"
                      dataKey="arima"
                      stroke="hsl(var(--chart-2))"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="ARIMA"
                    />
                    <Line
                      type="monotone"
                      dataKey="prophet"
                      stroke="hsl(var(--chart-3))"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Prophet"
                    />
                    <Line
                      type="monotone"
                      dataKey="forecast"
                      stroke="hsl(var(--chart-4))"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="ML Ensemble"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accuracy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Model Accuracy Metrics</CardTitle>
              <CardDescription>
                Comparing error rates across forecasting models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={errorMetrics}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="model" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "0.5rem"
                      }}
                    />
                    <Legend />
                    <Bar dataKey="mae" fill="hsl(var(--chart-1))" name="MAE" />
                    <Bar dataKey="rmse" fill="hsl(var(--chart-2))" name="RMSE" />
                    <Bar dataKey="mape" fill="hsl(var(--chart-3))" name="MAPE %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seasonality" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Seasonality Analysis</CardTitle>
              <CardDescription>
                Identify patterns and seasonal trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Seasonality decomposition and trend analysis will be displayed here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Forecast;
