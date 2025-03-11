import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { RecentWorkouts } from "./RecentWorkout";

export default function RecentWorkoutsSection() {

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#F4F4F4]">Recent Workouts</h2>
        <Button
          variant="outline"
          size="sm"
          className="text-[#1E1E1E] border-[#F4F4F4] hover:bg-[#00A896] hover:text-[#1E1E1E]"
        >
          View All
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <Card className="border-none bg-[#333533] shadow-md">
        <CardContent className="p-0">
          <RecentWorkouts />
        </CardContent>
      </Card>
    </div>
  );
}
