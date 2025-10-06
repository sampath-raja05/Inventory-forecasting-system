import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Plus, Mail, Phone } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Suppliers = () => {
  const suppliers = [
    { id: 1, name: "Acme Corp", products: 45, onTime: 98, avgLead: 3, status: "excellent" },
    { id: 2, name: "Tech Supply Co", products: 32, onTime: 95, avgLead: 5, status: "good" },
    { id: 3, name: "Global Parts Ltd", products: 28, onTime: 92, avgLead: 7, status: "good" },
    { id: 4, name: "Industrial Goods", products: 18, onTime: 88, avgLead: 6, status: "fair" },
  ];

  const performanceData = suppliers.map(s => ({
    name: s.name.split(' ')[0],
    onTimeRate: s.onTime,
    leadTime: s.avgLead,
    products: s.products
  }));

  const trendData = [
    { month: "Jan", onTime: 92, leadTime: 6.2 },
    { month: "Feb", onTime: 93, leadTime: 6.0 },
    { month: "Mar", onTime: 91, leadTime: 6.1 },
    { month: "Apr", onTime: 94, leadTime: 5.8 },
    { month: "May", onTime: 95, leadTime: 5.5 },
    { month: "Jun", onTime: 94, leadTime: 5.2 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Supplier Management</h1>
          <p className="text-muted-foreground mt-1">
            Track supplier performance and manage relationships
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Supplier
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Suppliers</p>
              <h3 className="text-2xl font-bold mt-2">12</h3>
            </div>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>
        <Card className="stat-card">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Avg On-Time Rate</p>
            <h3 className="text-2xl font-bold mt-2">94.2%</h3>
            <p className="text-sm text-success mt-1">+2.1% this quarter</p>
          </div>
        </Card>
        <Card className="stat-card">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Avg Lead Time</p>
            <h3 className="text-2xl font-bold mt-2">5.2 days</h3>
            <p className="text-sm text-success mt-1">-0.8 days improved</p>
          </div>
        </Card>
        <Card className="stat-card">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Active Products</p>
            <h3 className="text-2xl font-bold mt-2">123</h3>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="data-card">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Supplier Performance</h3>
            <p className="text-sm text-muted-foreground">On-time delivery rates by supplier</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" domain={[80, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem"
                }}
              />
              <Legend />
              <Bar dataKey="onTimeRate" fill="hsl(var(--chart-1))" name="On-Time Rate %" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="data-card">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Performance Trends</h3>
            <p className="text-sm text-muted-foreground">Monthly on-time rate & lead time trends</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" domain={[85, 100]} />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" domain={[0, 10]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem"
                }}
              />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="onTime" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={3}
                dot={{ r: 4 }}
                name="On-Time Rate %"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="leadTime" 
                stroke="hsl(var(--chart-3))" 
                strokeWidth={3}
                dot={{ r: 4 }}
                name="Lead Time (days)"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {suppliers.map((supplier) => (
          <Card key={supplier.id} className="data-card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">{supplier.name}</h3>
                <p className="text-sm text-muted-foreground">{supplier.products} products supplied</p>
              </div>
              <Badge 
                variant={
                  supplier.status === "excellent" ? "default" : 
                  supplier.status === "good" ? "secondary" : 
                  "outline"
                }
              >
                {supplier.status}
              </Badge>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">On-Time Delivery</span>
                <span className="font-medium">{supplier.onTime}%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Avg Lead Time</span>
                <span className="font-medium">{supplier.avgLead} days</span>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
