import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ArrowDownCircle, Package } from "lucide-react";

const reorderItems = [
  { id: 1, product: "Widget A-101", priority: "high", stock: 45, reorderPoint: 100, leadTime: "3 days" },
  { id: 2, product: "Component B-202", priority: "medium", stock: 120, reorderPoint: 150, leadTime: "5 days" },
  { id: 3, product: "Part C-303", priority: "low", stock: 280, reorderPoint: 300, leadTime: "7 days" },
];

export const ReorderQueue = () => {
  return (
    <Card className="data-card">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Reorder Priority Queue</h3>
          <p className="text-sm text-muted-foreground">Items approaching reorder point</p>
        </div>
        <Button size="sm" variant="default">
          <Package className="h-4 w-4 mr-2" />
          Create PO
        </Button>
      </div>
      <div className="space-y-3">
        {reorderItems.map((item) => (
          <div 
            key={item.id}
            className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border hover:bg-muted/50 transition-colors"
          >
            <div className="flex-1">
              <p className="font-medium">{item.product}</p>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-sm text-muted-foreground">
                  Stock: {item.stock} / {item.reorderPoint}
                </span>
                <span className="text-sm text-muted-foreground">
                  Lead: {item.leadTime}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge 
                variant={item.priority === "high" ? "destructive" : item.priority === "medium" ? "default" : "secondary"}
              >
                {item.priority}
              </Badge>
              <div className="flex flex-col gap-1">
                <Button size="icon" variant="ghost" className="h-6 w-6">
                  <ArrowUpCircle className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-6 w-6">
                  <ArrowDownCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
