import { Calendar, CheckCircle, Circle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GoalsBoard() {
    return (
    <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-[#FFD100]">
        <Calendar className="mr-2 inline-block h-5 w-5" />
        Goals Board
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Short-term Goals */}
        <Card className="border-none bg-[#333533] shadow-md text-[#F4F4F4]">
            <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#F4F4F4]">Short-term Goals</CardTitle>
            </CardHeader>
            <CardContent>
            <ul className="space-y-3">
                <li className="flex items-center justify-between rounded-lg bg-[#333533] p-3">
                <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#00A896]" />
                    <span>Lose 2kg in 3 weeks</span>
                </div>
                <div className="rounded bg-[#00A896] px-2 py-0.5 text-xs font-medium text-[#1E1E1E]">Completed</div>
                </li>
                <li className="flex items-center justify-between rounded-lg bg-[#333533] p-3">
                <div className="flex items-center">
                    <Circle className="mr-2 h-5 w-5 text-[#FFD100]" />
                    <span>Reduce body fat by 1% this month</span>
                </div>
                <div className="rounded bg-[#FFD100] px-2 py-0.5 text-xs font-medium text-[#1E1E1E]">In Progress</div>
                </li>
                <li className="flex items-center justify-between rounded-lg bg-[#333533] p-3">
                <div className="flex items-center">
                    <Circle className="mr-2 h-5 w-5 text-[#F4F4F4]" />
                    <span>Maintain weight during holiday season</span>
                </div>
                <div className="rounded bg-[#F4F4F4]/20 px-2 py-0.5 text-xs font-medium">Not Started</div>
                </li>
            </ul>
            </CardContent>
        </Card>

        {/* Long-term Goals */}
        <Card className="border-none bg-[#333533] shadow-md text-[#F4F4F4]">
            <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#F4F4F4]">Long-term Goals</CardTitle>
            </CardHeader>
            <CardContent>
            <ul className="space-y-3">
                <li className="flex items-center justify-between rounded-lg bg-[#333533] p-3">
                <div className="flex items-center">
                    <Circle className="mr-2 h-5 w-5 text-[#FFD100]" />
                    <span>Reach 75kg body weight</span>
                </div>
                <div>
                    <div className="mb-1 text-right text-xs">75%</div>
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[#1E1E1E]">
                        <div className="h-full w-[75%] rounded-full bg-[#FFD100]"></div>
                    </div>
                </div>
                </li>
                <li className="flex items-center justify-between rounded-lg bg-[#333533] p-3">
                <div className="flex items-center">
                    <Circle className="mr-2 h-5 w-5 text-[#FFD100]" />
                    <span>Achieve 15% body fat</span>
                </div>
                <div>
                    <div className="mb-1 text-right text-xs">60%</div>
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[#1E1E1E]">
                    <div className="h-full w-[60%] rounded-full bg-[#FFD100]"></div>
                    </div>
                </div>
                </li>
                <li className="flex items-center justify-between rounded-lg bg-[#333533] p-3">
                <div className="flex items-center">
                <Circle className="mr-2 h-5 w-5 text-[#FFD100]" />
                    <span>Maintain weight of 75kg for 6 months</span>
                </div>
                <div>
                    <div className="mb-1 text-right text-xs">25%</div>
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[#1E1E1E]">
                    <div className="h-full w-[25%] rounded-full bg-[#F4F4F4]"></div>
                    </div>
                </div>
                </li>
            </ul>
            </CardContent>
        </Card>
        </div>
    </section>
    );
}
