import { Calendar, Search, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function WorkoutHistory() {
    return (
    <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-[#FFD100]">
        <Calendar className="mr-2 inline-block h-5 w-5" />
        Workout History
        </h2>
        <Card className="border-none bg-[#333533] shadow-md">
        <CardHeader className="pb-2">
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <CardTitle className="text-sm font-medium text-[#F4F4F4]">Recent Workouts</CardTitle>
            <div className="relative w-full sm:w-64">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#F4F4F4]/60" />
                <Input
                placeholder="Search by date..."
                className="border-[#1E1E1E] bg-[#1E1E1E] pl-8 text-sm text-[#F4F4F4] placeholder:text-[#F4F4F4]/60"
                />
            </div>
            </div>
        </CardHeader>
        <CardContent>
            <div className="space-y-2">
            {workoutData.map((workout, index) => (
                <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-[#1E1E1E] p-3 transition-colors hover:bg-[#1E1E1E]/80"
                >
                <div>
                    <p className="font-medium text-[#F4F4F4]">{workout.name}</p>
                    <div className="flex items-center text-sm text-[#F4F4F4]/70">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>{workout.date}</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 rounded bg-[#005F73] px-2 py-0.5 text-xs">{workout.type}</span>
                    <button className="rounded-full p-1 text-[#FFD100] hover:bg-[#1E1E1E]">
                    <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
                </div>
            ))}
            </div>
            <div className="mt-4 text-center">
            <button className="text-sm text-[#FFD100] hover:underline">View All Workouts</button>
            </div>
        </CardContent>
        </Card>
    </section>
    );
}

const workoutData = [
    {
    name: "Push Workout",
    date: "Mar 7, 2025",
    type: "Strength",
    },
    {
    name: "Pull Workout",
    date: "Mar 5, 2025",
    type: "Hypertrophy",
    },
    {
    name: "Leg Day",
    date: "Mar 3, 2025",
    type: "Strength",
    },
    {
    name: "Cardio & Core",
    date: "Mar 1, 2025",
    type: "Cardio",
    },
    {
    name: "Push Workout",
    date: "Feb 28, 2025",
    type: "Hypertrophy",
    },
];
