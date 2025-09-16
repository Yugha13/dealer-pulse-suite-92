import { useEffect, useState } from "react";

interface PerformanceGaugeProps {
  value: number;
  total: number;
  label: string;
  className?: string;
}

export function PerformanceGauge({ value, total, label, className = "" }: PerformanceGaugeProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const percentage = Math.round((value / total) * 100);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  const circumference = 2 * Math.PI * 90;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedValue / 100) * circumference;

  return (
    <div className={`flex flex-col items-center ${className} group`}>
      <div className="relative w-48 h-48 transition-all duration-300 group-hover:scale-105">
        <svg
          className="w-full h-full transform -rotate-90 transition-transform duration-500 group-hover:rotate-[-85deg]"
          viewBox="0 0 200 200"
        >
          {/* Background track */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="hsl(var(--gauge-track))"
            strokeWidth="12"
            className="opacity-20"
          />
          
          {/* Progress arc */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="hsl(var(--gauge-fill))"
            strokeWidth="12"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              filter: "drop-shadow(0 0 8px hsl(var(--gauge-fill) / 0.3))",
            }}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-110">
          <div className="text-5xl font-bold text-foreground mb-1 transition-all duration-300 group-hover:text-primary">
            {animatedValue}%
          </div>
          <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {label} {value}/{total}
          </div>
        </div>
        
        {/* Animated glow effect */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 bg-gradient-to-r from-primary/20 via-orange/20 to-primary/20 animate-pulse" />
      </div>
    </div>
  );
}