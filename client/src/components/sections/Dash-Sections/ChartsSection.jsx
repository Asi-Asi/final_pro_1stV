import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart4, Scale } from "lucide-react";
import {WorkoutChart} from "@/components/sections/Dash-Sections/charts/WorkoutChart";
import {WeightChart} from "@/components/sections/Dash-Sections/charts/WeightChart";

export default function ChartsSection() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="strength" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#F4F4F4]">
            Charts & Progress
          </h2>
          <TabsList className="bg-[#333533] border border-[#1E1E1E]">
            <TabsTrigger
              value="strength"
              className="data-[state=active]:bg-[#FFD100] data-[state=active]:text-[#1E1E1E]"
            >
              <BarChart4 className="h-4 w-4 mr-2" /> Strength Improvement
            </TabsTrigger>
            <TabsTrigger
              value="weight"
              className="data-[state=active]:bg-[#FFD100] data-[state=active]:text-[#1E1E1E]"
            >
              <Scale className="h-4 w-4 mr-2" /> Weight Change
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="strength">
          <Card className="border-none bg-[#333533] shadow-md">
            <CardHeader>
              <CardTitle className="text-[#F4F4F4]">
                Strength Progress Over Time
              </CardTitle>
              <CardDescription className="text-[#F4F4F4]/70">
                Tracking progress in major exercises
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <WorkoutChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="weight">
          <Card className="border-none bg-[#333533] shadow-md">
            <CardHeader>
              <CardTitle className="text-[#F4F4F4]">
                Body Weight Change
              </CardTitle>
              <CardDescription className="text-[#F4F4F4]/70">
                Tracking body weight changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <WeightChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
