import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Truck, Clock } from "lucide-react";

const Network = () => {
  const locations = [
    { id: 1, name: "Headquarters", type: "HQ", stock: 12500, status: "optimal" },
    { id: 2, name: "Warehouse 1", type: "Warehouse", stock: 8900, status: "optimal" },
    { id: 3, name: "Warehouse 2", type: "Warehouse", stock: 6700, status: "warning" },
    { id: 4, name: "Store 1", type: "Retail", stock: 1200, status: "critical" },
    { id: 5, name: "Store 2", type: "Retail", stock: 1800, status: "optimal" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Network & Locations</h1>
        <p className="text-muted-foreground mt-1">
          Visualize and manage your multi-location inventory network
        </p>
      </div>

      <Card className="data-card">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Network Map</h3>
          <p className="text-sm text-muted-foreground">Geographic distribution of inventory locations</p>
        </div>
        <div className="h-[400px] bg-muted/30 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Interactive map visualization (Mapbox integration)</p>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <Card key={location.id} className="data-card">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{location.name}</h4>
                  <p className="text-xs text-muted-foreground">{location.type}</p>
                </div>
              </div>
              <Badge 
                variant={
                  location.status === "optimal" ? "secondary" : 
                  location.status === "warning" ? "default" : 
                  "destructive"
                }
              >
                {location.status}
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Current Stock</span>
                <span className="font-medium">{location.stock.toLocaleString()} units</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Truck className="h-3 w-3" />
                  <span>3 transfers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>2-5 days</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Network;
