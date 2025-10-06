import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Truck, Building2, Store } from "lucide-react";

const locations = [
  { 
    id: 1, 
    name: "Main Warehouse", 
    type: "warehouse", 
    location: "Chicago, IL",
    stock: 12500,
    capacity: 20000,
    utilization: 62.5
  },
  { 
    id: 2, 
    name: "NYC Distribution", 
    type: "distribution", 
    location: "New York, NY",
    stock: 5400,
    capacity: 8000,
    utilization: 67.5
  },
  { 
    id: 3, 
    name: "Store NYC", 
    type: "retail", 
    location: "Manhattan, NY",
    stock: 850,
    capacity: 1200,
    utilization: 70.8
  },
  { 
    id: 4, 
    name: "Store LA", 
    type: "retail", 
    location: "Los Angeles, CA",
    stock: 920,
    capacity: 1200,
    utilization: 76.7
  },
];

const transfers = [
  { id: 1, from: "Main Warehouse", to: "NYC Distribution", quantity: 1200, eta: "2 days", status: "in-transit" },
  { id: 2, from: "NYC Distribution", to: "Store NYC", quantity: 400, eta: "1 day", status: "scheduled" },
  { id: 3, from: "Main Warehouse", to: "Store LA", quantity: 450, eta: "3 days", status: "in-transit" },
];

const Network = () => {
  const getLocationIcon = (type: string) => {
    switch (type) {
      case "warehouse": return Building2;
      case "distribution": return Truck;
      case "retail": return Store;
      default: return MapPin;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Network & Locations</h1>
        <p className="text-muted-foreground mt-1">
          Manage inventory distribution across your network
        </p>
      </div>

      <Tabs defaultValue="map" className="space-y-4">
        <TabsList>
          <TabsTrigger value="map">Network Map</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="transfers">Transfers</TabsTrigger>
        </TabsList>

        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Network Graph</CardTitle>
              <CardDescription>
                Visualize stock flows and connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-muted/20 rounded-lg border border-border">
                <svg className="w-full h-full">
                  {/* Network visualization */}
                  <g>
                    <line x1="20%" y1="50%" x2="50%" y2="40%" className="stroke-primary/40" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="50%" y1="40%" x2="70%" y2="30%" className="stroke-primary/40" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="50%" y1="40%" x2="75%" y2="60%" className="stroke-primary/40" strokeWidth="2" strokeDasharray="4 4" />
                  </g>
                  
                  <g>
                    <circle cx="20%" cy="50%" r="30" className="fill-primary" opacity="0.9" />
                    <text x="20%" y="50%" textAnchor="middle" dy=".3em" className="fill-white text-xs font-semibold">12.5K</text>
                  </g>
                  
                  <g>
                    <circle cx="50%" cy="40%" r="25" className="fill-accent" opacity="0.9" />
                    <text x="50%" y="40%" textAnchor="middle" dy=".3em" className="fill-white text-xs font-semibold">5.4K</text>
                  </g>
                  
                  <g>
                    <circle cx="70%" cy="30%" r="20" className="fill-success" opacity="0.9" />
                    <text x="70%" y="30%" textAnchor="middle" dy=".3em" className="fill-white text-xs font-semibold">850</text>
                  </g>
                  
                  <g>
                    <circle cx="75%" cy="60%" r="20" className="fill-success" opacity="0.9" />
                    <text x="75%" y="60%" textAnchor="middle" dy=".3em" className="fill-white text-xs font-semibold">920</text>
                  </g>
                </svg>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="locations" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {locations.map((location) => {
              const Icon = getLocationIcon(location.type);
              return (
                <Card key={location.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-primary" />
                          {location.name}
                        </CardTitle>
                        <CardDescription>{location.location}</CardDescription>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {location.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Current Stock</span>
                        <span className="font-medium">{location.stock.toLocaleString()} units</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Capacity</span>
                        <span className="font-medium">{location.capacity.toLocaleString()} units</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Utilization</span>
                          <span className="font-medium">{location.utilization}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${location.utilization}%` }}
                          />
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-2" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="transfers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Transfers</CardTitle>
              <CardDescription>
                Track inventory movements between locations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {transfers.map((transfer) => (
                  <div
                    key={transfer.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-primary" />
                        <span className="font-medium text-sm">
                          {transfer.from} → {transfer.to}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {transfer.quantity} units • ETA: {transfer.eta}
                      </p>
                    </div>
                    <Badge
                      variant={transfer.status === "in-transit" ? "default" : "secondary"}
                    >
                      {transfer.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Network;
