import { Scale, Target, TrendingDown, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WeightOverview() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold text-[#FFD100]">
        <Scale className="mr-2 inline-block h-5 w-5" />
        Body Weight Overview
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Last Recorded Weight */}
        <Card className="border-none bg-[#333533] shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#F4F4F4]">
              Last Recorded Weight
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-[#FFD100]">82.5 kg</p>
              <p className="text-sm text-[#F4F4F4]">
                Recorded on March 5, 2025
              </p>
              <div className="mt-4 w-full space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-[#333533] p-2">
                  <div className="flex items-center">
                    <Activity className="mr-2 h-4 w-4 text-[#00A896]" />
                    <span className="text-sm text-[#F4F4F4]">BMI</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-[#00A896]">
                      23.8
                    </span>
                    <span className="ml-1 text-xs text-[#F4F4F4]/70">
                      (Normal)
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#333533] p-2">
                  <div className="flex items-center">
                    <TrendingDown className="mr-2 h-4 w-4 text-[#00A896]" />
                    <span className="text-sm text-[#F4F4F4]">Weekly Loss</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#00A896]">
                      0.8 kg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weight Change Graph */}
        <Card className="border-none bg-[#333533] shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#F4F4F4]">
              30-Day Weight Change
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-full flex-col items-center justify-center">
              <div className="relative h-24 w-full">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 100 50"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="0"
                    stroke="#F4F4F4"
                    strokeWidth="0.2"
                  />
                  <line
                    x1="0"
                    y1="25"
                    x2="100"
                    y2="25"
                    stroke="#F4F4F4"
                    strokeWidth="0.2"
                  />
                  <line
                    x1="0"
                    y1="50"
                    x2="100"
                    y2="50"
                    stroke="#F4F4F4"
                    strokeWidth="0.2"
                  />
                  <text x="0" y="55" fontSize="3" fill="#F4F4F4">
                    Feb 5
                  </text>
                  <text x="50" y="55" fontSize="3" fill="#F4F4F4">
                    Feb 20
                  </text>
                  <text x="95" y="55" fontSize="3" fill="#F4F4F4">
                    Mar 5
                  </text>
                  <polyline
                    points="0,40 10,38 20,35 30,33 40,30 50,28 60,25 70,22 80,20 90,18 100,15"
                    fill="none"
                    stroke="#00A896"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <p className="mt-4 text-center text-sm font-medium text-[#00A896]">
                -2.5 kg in the last 30 days
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Weight Goal */}
        <Card className="border-none bg-[#333533] shadow-md text-[#F4F4F4]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#F4F4F4]">
              Weight Goal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="mb-2 rounded-full bg-[#005F73] p-3">
                <Target className="h-6 w-6 text-[#F4F4F4]" />
              </div>
              <p className="text-xl font-bold text-[#FFD100]">80.0 kg</p>
              <div className="mt-2 w-full">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs">Progress</span>
                  <span className="text-xs">2.5 kg to go</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#1E1E1E]">
                  <div className="h-full w-[75%] rounded-full bg-[#00A896]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
