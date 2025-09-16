import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Jan 10", value: 12 },
  { name: "Jan 11", value: 18 },
  { name: "Jan 12", value: 25 },
  { name: "Jan 13", value: 22 },
  { name: "Jan 14", value: 15 },
  { name: "Jan 15", value: 28 },
  { name: "Jan 16", value: 20 },
  { name: "Jan 17", value: 32 },
  { name: "Jan 18", value: 45 },
];

interface UtilizationChartProps {
  className?: string;
}

export function UtilizationChart({ className = "" }: UtilizationChartProps) {
  return (
    <div className={`h-64 w-full ${className} group`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            className="group-hover:opacity-80 transition-opacity duration-300"
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            className="group-hover:opacity-80 transition-opacity duration-300"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-card)',
            }}
            cursor={{ 
              fill: 'hsl(var(--primary) / 0.1)',
              stroke: 'hsl(var(--primary))',
              strokeWidth: 2,
            }}
          />
          <Bar 
            dataKey="value" 
            fill="hsl(var(--chart-primary))"
            radius={[4, 4, 0, 0]}
            className="transition-all duration-300 hover:opacity-80"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}