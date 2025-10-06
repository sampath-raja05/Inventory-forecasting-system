import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Configure system preferences and integrations
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card className="data-card">
            <h3 className="text-lg font-semibold mb-4">Organization Settings</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="org-name">Organization Name</Label>
                <Input id="org-name" placeholder="Your Company" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" placeholder="UTC-5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Input id="currency" placeholder="USD" />
              </div>
              <Button>Save Changes</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="data-card">
            <h3 className="text-lg font-semibold mb-4">Alert Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Stockout Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts when stock levels are critical</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Forecast Updates</Label>
                  <p className="text-sm text-muted-foreground">Weekly forecast summary emails</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Reorder Suggestions</Label>
                  <p className="text-sm text-muted-foreground">Automated reorder recommendations</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Supplier Delays</Label>
                  <p className="text-sm text-muted-foreground">Notify about delayed shipments</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card className="data-card">
            <h3 className="text-lg font-semibold mb-4">API Integrations</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sales-api">Sales API Key</Label>
                <Input id="sales-api" type="password" placeholder="••••••••" />
                <p className="text-sm text-muted-foreground">Connect to your sales platform</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="supply-api">Supply Chain API Key</Label>
                <Input id="supply-api" type="password" placeholder="••••••••" />
                <p className="text-sm text-muted-foreground">Integrate with supply chain management</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="slack-webhook">Slack Webhook URL</Label>
                <Input id="slack-webhook" placeholder="https://hooks.slack.com/..." />
                <p className="text-sm text-muted-foreground">Receive alerts in Slack</p>
              </div>
              <Button>Save Integrations</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
