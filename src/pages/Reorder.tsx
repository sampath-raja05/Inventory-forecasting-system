import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Plus, FileText } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Reorder = () => {
  const reorderRules = [
    { id: 1, product: "Widget A-101", reorderPoint: 100, orderQty: 500, supplier: "Acme Corp", leadTime: 3 },
    { id: 2, product: "Component B-202", reorderPoint: 150, orderQty: 750, supplier: "Tech Supply", leadTime: 5 },
    { id: 3, product: "Part C-303", reorderPoint: 300, orderQty: 1000, supplier: "Global Parts", leadTime: 7 },
    { id: 4, product: "Assembly D-404", reorderPoint: 75, orderQty: 300, supplier: "Acme Corp", leadTime: 4 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reorder Management</h1>
          <p className="text-muted-foreground mt-1">
            Automated reorder rules and purchase order generation
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Export Rules
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Rule
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Rules</p>
              <h3 className="text-2xl font-bold mt-2">24</h3>
            </div>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Package className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>
        <Card className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending Orders</p>
              <h3 className="text-2xl font-bold mt-2">7</h3>
            </div>
            <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
              <FileText className="h-6 w-6 text-warning" />
            </div>
          </div>
        </Card>
        <Card className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avg Lead Time</p>
              <h3 className="text-2xl font-bold mt-2">4.5 days</h3>
            </div>
            <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
              <Package className="h-6 w-6 text-success" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="data-card">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Reorder Rules</h3>
          <p className="text-sm text-muted-foreground">Automated triggers and order quantities</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Reorder Point</TableHead>
              <TableHead>Order Quantity</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Lead Time</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reorderRules.map((rule) => (
              <TableRow key={rule.id}>
                <TableCell className="font-medium">{rule.product}</TableCell>
                <TableCell>{rule.reorderPoint} units</TableCell>
                <TableCell>{rule.orderQty} units</TableCell>
                <TableCell>{rule.supplier}</TableCell>
                <TableCell>
                  <Badge variant="outline">{rule.leadTime} days</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Reorder;
