import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const NetworkGraph = () => {
  return (
    <Card className="data-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Multi-Location Network</h3>
        <p className="text-sm text-muted-foreground">Interactive view of stock flows and lead times</p>
      </div>
      <div className="relative h-[300px] bg-muted/30 rounded-lg flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Simplified network visualization placeholder */}
          <div className="relative w-full h-full p-8">
            {/* Center node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-16 w-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <span className="text-xs font-semibold">HQ</span>
              </div>
            </div>
            
            {/* Satellite nodes */}
            <div className="absolute top-8 left-1/4">
              <div className="h-12 w-12 rounded-full bg-chart-2/20 border-2 border-chart-2 flex items-center justify-center">
                <span className="text-xs">W1</span>
              </div>
            </div>
            
            <div className="absolute top-8 right-1/4">
              <div className="h-12 w-12 rounded-full bg-chart-3/20 border-2 border-chart-3 flex items-center justify-center">
                <span className="text-xs">W2</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-1/3">
              <div className="h-12 w-12 rounded-full bg-chart-4/20 border-2 border-chart-4 flex items-center justify-center">
                <span className="text-xs">S1</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-1/3">
              <div className="h-12 w-12 rounded-full bg-chart-5/20 border-2 border-chart-5 flex items-center justify-center">
                <span className="text-xs">S2</span>
              </div>
            </div>
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="50%" x2="25%" y2="15%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="50%" y1="50%" x2="75%" y2="15%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="50%" y1="50%" x2="33%" y2="85%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="50%" y1="50%" x2="67%" y2="85%" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Badge variant="secondary">4 Locations</Badge>
          <Badge variant="secondary">Active</Badge>
        </div>
      </div>
    </Card>
  );
};
