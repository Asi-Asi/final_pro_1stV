import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

/* eslint-disable */

export default function StatCard({
  title,
  description,
  value,
  max,
  progress,
  color,
  footerText,
  icon,
  markers,
}) {
  return (
    <Card className="overflow-hidden border-none bg-[#333533] shadow-md">
      <div className={`h-2 ${color}`} />
      <CardHeader className="pb-3">
        <CardTitle className="text-[#F4F4F4] text-2xl font-bold">
          {title}
        </CardTitle>
        <CardDescription className="text-[#F4F4F4]/70 text-base font-bold">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div className="text-3xl font-bold text-[#F4F4F4]">{value}</div>
          {icon && (
            <div className="flex items-center gap-1 text-[#00A896]">{icon}</div>
          )}
        </div>
        {progress !== undefined && (
          <>
            <span className="text-sm text-gray-400">{progress}%</span>{" "}
            {/* הצגת האחוזים */}
            <Progress
              value={progress}
              max={max}
              markers={markers}
              className="h-2 mt-4 bg-[#1E1E1E]"
            />
          </>
        )}
      </CardContent>
      {footerText && (
        <CardFooter className="w-full pt-0 text-xs text-[#F4F4F4]/70 flex justify-between">
          {footerText}
        </CardFooter>
      )}
    </Card>
  );
}
