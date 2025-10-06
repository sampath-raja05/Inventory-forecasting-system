import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Clock } from "lucide-react";

const reorders = [
  { id: 1, product: "Widget A", priority: "high", quantity: 500, leadTime: "3 days", supplier: "Acme Corp" },
  { id: 2, product: "Component B", priority: "medium", quantity: 250, leadTime: "5 days", supplier: "TechSupply" },
  { id: 3, product: "Part C", priority: "high", quantity: 1000, leadTime: "2 days", supplier: "FastParts" },
  { id: 4, product: "Material D", priority: "low", quantity: 150, leadTime: "7 days", supplier: "BulkCo" },
];

export function ReorderQueue() {
  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle>Reorder Priority Queue</CardTitle>
        <CardDescription>
          Upcoming purchase orders by priority
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {reorders.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-lg border border-border bg-card/50 transition-all hover:bg-card hover:shadow-sm"
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm">{item.product}</p>
                  <Badge
                    variant={
                      item.priority === "high"
                        ? "destructive"
                        : item.priority === "medium"
                        ? "default"
                        : "secondary"
                    }
                    className="text-xs"
                  >
                    {item.priority}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>Qty: {item.quantity}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.leadTime}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">{item.supplier}</p>
                <Button size="sm" variant="outline" className="h-7 text-xs">
                  Create PO
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
