import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Forecast = () => {
  const modelComparison = [
    { model: "ARIMA", mae: 145, rmse: 198, mape: 8.2 },
    { model: "Prophet", mae: 132, rmse: 178, mape: 7.5 },
    { model: "ML Ensemble", mae: 118, rmse: 156, mape: 6.8 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Forecast & Analysis</h1>
        <p className="text-muted-foreground mt-1">
          Advanced predictive analytics and model performance
        </p>
      </div>

      <Tabs defaultValue="forecast" className="space-y-4">
        <TabsList>
          <TabsTrigger value="forecast">Forecast</TabsTrigger>
          <TabsTrigger value="historical">Historical Data</TabsTrigger>
          <TabsTrigger value="models">Model Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="forecast" className="space-y-4">
          <Card className="data-card">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">30-Day Forecast</h3>
              <p className="text-sm text-muted-foreground">ML Ensemble prediction with confidence intervals</p>
            </div>
            <div className="h-[350px] bg-muted/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Time series forecast visualization</p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="historical" className="space-y-4">
          <Card className="data-card">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Historical Sales</h3>
              <p className="text-sm text-muted-foreground">Past 12 months of sales data</p>
            </div>
            <div className="h-[350px] bg-muted/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Historical data visualization</p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="models" className="space-y-4">
          <Card className="data-card">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Model Performance</h3>
              <p className="text-sm text-muted-foreground">Error metrics comparison across models</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={modelComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="model" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
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
            <div className="mt-4 flex gap-2">
              <Badge variant="secondary">Best: ML Ensemble</Badge>
              <Badge variant="outline">MAPE: 6.8%</Badge>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Forecast;
