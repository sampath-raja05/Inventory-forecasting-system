import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Save } from "lucide-react";

const suppliers = [
  { id: 1, name: "Acme Corp", rating: 4.5, leadTime: "3 days", reliability: 98, cost: "$$$" },
  { id: 2, name: "TechSupply", rating: 4.2, leadTime: "5 days", reliability: 95, cost: "$$" },
  { id: 3, name: "FastParts", rating: 4.8, leadTime: "2 days", reliability: 99, cost: "$$$$" },
  { id: 4, name: "BulkCo", rating: 4.0, leadTime: "7 days", reliability: 92, cost: "$" },
];

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Configure forecasting models, suppliers, and system preferences
        </p>
      </div>

      <Tabs defaultValue="suppliers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="suppliers" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Supplier Management</CardTitle>
                  <CardDescription>
                    Manage supplier relationships and SLAs
                  </CardDescription>
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Supplier
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Supplier Name</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Avg Lead Time</TableHead>
                    <TableHead>Reliability</TableHead>
                    <TableHead>Cost Level</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {suppliers.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableCell className="font-medium">{supplier.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <span className="text-sm">⭐</span>
                          <span>{supplier.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>{supplier.leadTime}</TableCell>
                      <TableCell>
                        <Badge variant={supplier.reliability >= 95 ? "default" : "secondary"}>
                          {supplier.reliability}%
                        </Badge>
                      </TableCell>
                      <TableCell>{supplier.cost}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecasting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Forecasting Configuration</CardTitle>
              <CardDescription>
                Adjust model parameters and optimization goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="horizon">Forecast Horizon (months)</Label>
                    <Input id="horizon" type="number" defaultValue="6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confidence">Confidence Level (%)</Label>
                    <Input id="confidence" type="number" defaultValue="95" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="model">Primary Model</Label>
                  <select
                    id="model"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  >
                    <option value="ml-ensemble">ML Ensemble (Recommended)</option>
                    <option value="arima">ARIMA</option>
                    <option value="prophet">Prophet</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable Seasonality Detection</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically adjust for seasonal patterns
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-optimize Parameters</Label>
                    <p className="text-sm text-muted-foreground">
                      Use AI to tune model hyperparameters
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Configure alerts for stockouts, reorders, and anomalies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive alerts via email
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Slack Integration</Label>
                    <p className="text-sm text-muted-foreground">
                      Post alerts to Slack channel
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Stockout Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Notify when items reach critical level
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Forecast Anomalies</Label>
                    <p className="text-sm text-muted-foreground">
                      Alert when actual sales deviate significantly
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Integrations</CardTitle>
              <CardDescription>
                Connect to sales, supply chain, and ERP systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div className="space-y-1">
                    <p className="font-medium">Sales API</p>
                    <p className="text-sm text-muted-foreground">
                      Sync historical and real-time sales data
                    </p>
                  </div>
                  <Badge variant="default">Connected</Badge>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div className="space-y-1">
                    <p className="font-medium">Supply Chain API</p>
                    <p className="text-sm text-muted-foreground">
                      Integration with supplier and logistics systems
                    </p>
                  </div>
                  <Badge variant="secondary">Not Connected</Badge>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div className="space-y-1">
                    <p className="font-medium">ERP System</p>
                    <p className="text-sm text-muted-foreground">
                      Bidirectional sync with enterprise resource planning
                    </p>
                  </div>
                  <Badge variant="secondary">Not Connected</Badge>
                </div>
              </div>

              <Button variant="outline">
                Configure Integrations
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
