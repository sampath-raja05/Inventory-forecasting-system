import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const locations = [
  { id: 1, name: "Main Warehouse", x: 30, y: 50, type: "warehouse", stock: 12500 },
  { id: 2, name: "Store NYC", x: 60, y: 30, type: "retail", stock: 850 },
  { id: 3, name: "Store LA", x: 70, y: 70, type: "retail", stock: 920 },
  { id: 4, name: "Distribution Hub", x: 50, y: 50, type: "distribution", stock: 5400 },
];

const connections = [
  { from: 1, to: 4, flow: 1200 },
  { from: 4, to: 2, flow: 400 },
  { from: 4, to: 3, flow: 450 },
];

export function NetworkPreview() {
  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle>Network Overview</CardTitle>
        <CardDescription>
          Multi-location inventory distribution
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 bg-muted/20 rounded-lg border border-border">
          <svg className="w-full h-full">
            {/* Connections */}
            {connections.map((conn, idx) => {
              const from = locations.find(l => l.id === conn.from);
              const to = locations.find(l => l.id === conn.to);
              if (!from || !to) return null;
              
              return (
                <g key={idx}>
                  <line
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    className="stroke-primary/30"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </g>
              );
            })}
            
            {/* Nodes */}
            {locations.map((loc) => (
              <g key={loc.id}>
                <circle
                  cx={`${loc.x}%`}
                  cy={`${loc.y}%`}
                  r="20"
                  className={
                    loc.type === "warehouse" 
                      ? "fill-primary" 
                      : loc.type === "distribution"
                      ? "fill-accent"
                      : "fill-chart-3"
                  }
                  opacity="0.9"
                />
                <text
                  x={`${loc.x}%`}
                  y={`${loc.y}%`}
                  textAnchor="middle"
                  dy=".3em"
                  className="fill-white text-xs font-semibold"
                >
                  {loc.stock > 1000 ? `${Math.round(loc.stock / 1000)}K` : loc.stock}
                </text>
              </g>
            ))}
          </svg>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">Warehouse</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-muted-foreground">Distribution</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-chart-3" />
              <span className="text-muted-foreground">Retail</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
