import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Plus, Search, Download } from "lucide-react";

const reorderItems = [
  {
    id: 1,
    product: "Widget A",
    sku: "WDG-001",
    currentStock: 120,
    reorderPoint: 500,
    reorderQty: 1000,
    supplier: "Acme Corp",
    leadTime: 3,
    status: "urgent"
  },
  {
    id: 2,
    product: "Component B",
    sku: "CMP-002",
    currentStock: 380,
    reorderPoint: 400,
    reorderQty: 500,
    supplier: "TechSupply",
    leadTime: 5,
    status: "warning"
  },
  {
    id: 3,
    product: "Part C",
    sku: "PRT-003",
    currentStock: 50,
    reorderPoint: 300,
    reorderQty: 1000,
    supplier: "FastParts",
    leadTime: 2,
    status: "urgent"
  },
  {
    id: 4,
    product: "Material D",
    sku: "MAT-004",
    currentStock: 650,
    reorderPoint: 500,
    reorderQty: 800,
    supplier: "BulkCo",
    leadTime: 7,
    status: "normal"
  },
];

const Reorder = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>;
      case "warning":
        return <Badge variant="default">Warning</Badge>;
      case "normal":
        return <Badge variant="secondary">Normal</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reorder Management</h1>
          <p className="text-muted-foreground mt-1">
            Automated reorder recommendations and purchase orders
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Manual PO
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Reorder Recommendations</CardTitle>
              <CardDescription>
                Items requiring reorder based on AI forecasts and lead times
              </CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Reorder Point</TableHead>
                <TableHead>Suggested Qty</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Lead Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reorderItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.product}</TableCell>
                  <TableCell className="text-muted-foreground">{item.sku}</TableCell>
                  <TableCell>
                    <span className={item.currentStock < item.reorderPoint ? "text-destructive font-medium" : ""}>
                      {item.currentStock}
                    </span>
                  </TableCell>
                  <TableCell>{item.reorderPoint}</TableCell>
                  <TableCell className="font-medium">{item.reorderQty}</TableCell>
                  <TableCell>{item.supplier}</TableCell>
                  <TableCell>{item.leadTime} days</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="default">
                      Create PO
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Urgent Reorders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">2</div>
            <p className="text-xs text-muted-foreground mt-1">
              Below critical level
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active POs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">
              In progress
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Lead Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 days</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across all suppliers
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reorder;
