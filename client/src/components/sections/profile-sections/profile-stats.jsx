import { TrendingUp, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfileStats() {
    return (
    <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-[#FFD100]">
        <TrendingUp className="mr-2 inline-block h-5 w-5" />
        Progress Overview
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Average Working Weights */}
        <Card className="border-none bg-[#333533] shadow-md">
            <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#F4F4F4]">Average Working Weights</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="space-y-2 text-[#F4F4F4]">
                <div className="flex items-center justify-between">
                <span className="text-sm">Chest</span>
                <span className="font-bold text-[#FFD100]">85 kg</span>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-sm">Back</span>
                <span className="font-bold text-[#FFD100]">95 kg</span>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-sm">Legs</span>
                <span className="font-bold text-[#FFD100]">120 kg</span>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-sm">Shoulders</span>
                <span className="font-bold text-[#FFD100]">65 kg</span>
                </div>
            </div>
            </CardContent>
        </Card>

        {/* Load Graph */}
        <Card className="border-none bg-[#333533] shadow-md text-[#F4F4F4]">
            <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Weekly Load Graph</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="space-y-3">
                <div>
                <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs">Squat</span>
                    <span className="text-xs text-[#00A896]">+5%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#333533]">
                    <div className="h-full w-[85%] rounded-full bg-[#00A896]"></div>
                </div>
                </div>
                <div>
                <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs">Deadlift</span>
                    <span className="text-xs text-[#00A896]">+8%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#333533]">
                    <div className="h-full w-[92%] rounded-full bg-[#00A896]"></div>
                </div>
                </div>
                <div>
                <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs">Bench Press</span>
                    <span className="text-xs text-[#FF5733]">-2%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#333533]">
                    <div className="h-full w-[65%] rounded-full bg-[#FF5733]"></div>
                </div>
                </div>
            </div>
            </CardContent>
        </Card>

        {/* Overall Status */}
        <Card className="border-none bg-[#333533] shadow-md">
            <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#F4F4F4]">Overall Status</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="flex flex-col items-center justify-center">
                <div className="mb-2 rounded-full bg-[#00A896] p-4">
                <ArrowUp className="h-8 w-8 text-[#F4F4F4]" />
                </div>
                <p className="text-center text-lg font-bold text-[#00A896]">Improving</p>
                <p className="mt-2 text-center text-sm text-[#F4F4F4]">
                Your performance has improved by 6% in the last 30 days
                </p>
            </div>
            </CardContent>
        </Card>
        </div>
    </section>
    );
}
