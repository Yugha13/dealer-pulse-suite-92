import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, BarChart3, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Welcome to DealerPro
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your premium dealer management platform. Monitor performance, track analytics, and manage dealer relationships with ease.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-orange/10">
                  <Users className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-semibold">Dealer Management</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Comprehensive dealer profiles, performance tracking, and relationship management.
              </p>
              <Link to="/dealers">
                <Button className="w-full group-hover:bg-orange group-hover:text-orange-foreground transition-colors">
                  View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-chart-primary/10">
                  <BarChart3 className="h-6 w-6 text-chart-primary" />
                </div>
                <h3 className="text-lg font-semibold">Analytics</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Real-time analytics, performance metrics, and detailed reporting tools.
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-success/10">
                  <Package className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-lg font-semibold">Product Catalog</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Manage dealer products, inventory, and catalog organization.
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Link to="/dealers">
            <Button size="lg" className="bg-gradient-orange text-orange-foreground hover:opacity-90 transition-opacity">
              Get Started with Dealers Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
