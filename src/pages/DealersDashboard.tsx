import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PerformanceGauge } from "@/components/dashboard/PerformanceGauge";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { UtilizationChart } from "@/components/dashboard/UtilizationChart";
import { ExpenseChart } from "@/components/dashboard/ExpenseChart";
import { 
  Users, 
  DollarSign, 
  Package, 
  CreditCard, 
  TrendingUp,
  Calendar,
  Filter
} from "lucide-react";

export default function DealersDashboard() {
  const [timeFilter, setTimeFilter] = useState("month");
  
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dealers Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor dealer performance and analytics</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-all duration-200 hover:shadow-md">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <div className="flex bg-accent rounded-lg p-1 shadow-inner">
            {["week", "month", "year"].map((period) => (
              <Button
                key={period}
                variant={timeFilter === period ? "default" : "ghost"}
                size="sm"
                onClick={() => setTimeFilter(period)}
                className="capitalize transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                {period}
                {timeFilter === period && (
                  <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column - Greeting Card & Performance */}
        <div className="xl:col-span-1 space-y-6">
          {/* Greeting Card */}
          <Card className="bg-gradient-purple border-purple/20 shadow-card hover:shadow-hover transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group animate-slide-in-up">
            <CardContent className="p-6 relative overflow-hidden">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-purple-foreground mb-2">
                  Hey Alex Thompson 👋
                </h2>
                <div className="text-lg text-purple-foreground/90 mb-6">
                  You have <span className="font-bold">3</span> pending actions
                </div>
                
                <Button 
                  className="bg-purple-foreground/20 hover:bg-purple-foreground/30 text-purple-foreground border-purple-foreground/30 hover:scale-105 transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                  variant="outline"
                >
                  Take action
                </Button>
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-foreground/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-foreground/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500" />
            </CardContent>
          </Card>

          {/* Performance Score Card */}
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 group animate-fade-in">
            <CardContent className="p-6 relative overflow-hidden">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Performance Overview
                </h3>
              </div>
              
              {/* Performance Gauge */}
              <PerformanceGauge 
                value={87} 
                total={100} 
                label="Dealer Performance Score"
                className="mb-6"
              />
              
              {/* Action Buttons */}
              <div className="flex gap-3 mb-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-200 hover:shadow-lg">
                  Dealers
                </Button>
                <Button variant="outline" className="flex-1 hover:scale-105 transition-all duration-200 hover:shadow-md">
                  Reports
                </Button>
              </div>
              
              {/* Status */}
              <div className="text-center text-sm text-muted-foreground">
                Check Last Update{" "}
                <span className="font-medium">15th Sep</span>{" "}
                <button className="text-orange hover:underline">
                  Take action
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Analytics */}
        <div className="xl:col-span-2 space-y-6">
          {/* Utilization Chart */}
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.005] group animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">Dealer Utilization</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Average Used <span className="font-semibold text-foreground">28.5 hr</span>{" "}
                  <span className="text-success">↗ 42.8%</span>
                </p>
              </div>
              <div className="flex gap-2">
                <Badge variant="default" className="bg-primary">Dealers</Badge>
                <Badge variant="outline">Apps</Badge>
                <Badge variant="outline">All</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <UtilizationChart />
            </CardContent>
          </Card>

          {/* Bottom Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Monthly Expenses */}
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Monthly Dealer Expenses
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-2">
                  $6.2k
                  <span className="text-sm font-normal text-success ml-2">↗ 37.8%</span>
                </div>
                <ExpenseChart />
              </CardContent>
            </Card>

            {/* Dealer Profiles */}
            <MetricCard
              title="Dealer Profiles"
              value="340"
              subtitle="18 New Profiles"
              trend={{ value: 12, isPositive: true }}
              icon={<Users className="h-4 w-4" />}
              chartType="profile"
            />

            {/* Transactions */}
            <MetricCard
              title="Dealer Transactions"
              value="2.1k"
              subtitle="24 New Transactions"
              trend={{ value: 8, isPositive: true }}
              icon={<CreditCard className="h-4 w-4" />}
              chartType="transaction"
            />

            {/* Products */}
            <MetricCard
              title="Dealer Products"
              value="180"
              subtitle="7 New Products"
              trend={{ value: 5, isPositive: true }}
              icon={<Package className="h-4 w-4" />}
              chartType="product"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Card className="bg-gradient-subtle border-border/50 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.005] group animate-fade-in">
        <CardContent className="p-6 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Total Active Dealers
              </h3>
              <p className="text-sm text-muted-foreground">
                Showing 285 / 320 dealers
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="hover:scale-105 transition-all duration-200 hover:shadow-md">
                All Dealers
              </Button>
              <Button variant="outline" className="hover:scale-105 transition-all duration-200 hover:shadow-md">
                Subscriptions
              </Button>
              <Button className="bg-orange hover:bg-orange/90 text-orange-foreground hover:scale-105 transition-all duration-200 hover:shadow-lg">
                Add Dealer
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}