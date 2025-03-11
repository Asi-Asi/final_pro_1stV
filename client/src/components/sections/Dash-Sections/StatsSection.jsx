import StatCard from "@/components/ui/statCard";
import { Progress } from "@/components/ui/progress";
import { Activity } from "lucide-react";

export default function StatsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Workouts This Month"
        description="Monthly Progress"
        value={
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">12</span>
            <span className="text-sm text-gray-400">out of 20 planned</span>
          </div>
        }
        color="bg-[#FFD100]"
        footerText={
          <div className="flex flex-col gap-3 w-full">
            {" "}
            {/* ✅ הרחבת הכל לרוחב הכרטיס */}
            {/* ✅ שמירה על ריווח כך שהפרוגרס יהיה בשורה נפרדת */}
            <div className="flex flex-col mt-5 gap-2 w-full">
              {" "}
              {/* ✅ וידוא שהפרוגרס יהיה ברוחב מלא */}
              {/* שורה עם הכותרת והאחוז */}
              <div className="flex items-center justify-between text-sm text-[#F4F4F4] w-full">
                <span>Progress</span>
                <span>{(12 / 20) * 100}%</span>
              </div>
              {/* ✅ פרוגרס פרוס על כל הרוחב */}
              <Progress
                value={(12 / 20) * 100} // ✅ חישוב אחוזים ישירות
                className="h-2 w-full bg-[#1E1E1E] relative overflow-hidden rounded-full"
                style={{ "--progress-color": "#FFD100" }} // ✅ צבע צהוב
              />
            </div>
            {/* ✅ טקסט ה-"+2 from last week" פרוס לרוחב */}
            <span className="text-[#00A896] font-medium text-sm text-left w-full">
              +2 from last week
            </span>
          </div>
        }
      />

      <StatCard
        title="Currnet Weight"
        description={
          lastMonth !== null
            ? "compared to last month"
            : lastWeek !== null
            ? "compared to last week"
            : null
        }
        value={
          <div className="flex items-center justify-between w-full text-3xl font-bold gap-2">
            <div className="flex items-center gap-2 font-bold">
              {`${current} `}
              <span className="text-lg font-light ">Kg</span>
            </div>

            <Activity className="h-5 w-5 text-[#00A896]" />

            {previousWeight !== null && (
              <div className="text-sm text-green-400">
                {`${previousWeight > current ? "-" : "+"}${Math.abs(
                  (previousWeight - current).toFixed(1)
                )} Kg`}
              </div>
            )}
          </div>
        }
        max={100}
        progress={current}
        color="bg-[#00A896]"
        footerText={
          <div className="flex items-center justify-between w-full text-xs px-4">
            <div className="text-[#00A896] text-right">Current</div>
            <div className="text-[#B8860B] text-left">Goal</div>
          </div>
        }
        markers={[
          { value: current, label: "Current", color: "#00A896" },
          { value: goal, label: "Goal", color: "#B8860B" },
        ]}
      />

      <StatCard
        title="Recent Performance"
        description="Max Weight Lifted"
        color="bg-[#B8860B]"
        footerText={
          <>
            <div className="w-full font-medium text-base text-[#F4F4F4]">
              <div className="flex w-full gap-3">
                <span className="font-bold text-[#F4F4F4]">Bench Press:</span>
                <span className="text-[#FFD100]">85 kg</span>
              </div>
              <div className="flex w-full gap-3">
                <span className="font-bold text-[#F4F4F4]">Squat:</span>
                <span className="text-[#FFD100]">120 kg</span>
              </div>
              <div className="flex w-full gap-3">
                <span className="font-bold text-[#F4F4F4]">Deadlift:</span>
                <span className="text-[#FFD100]">140 kg</span>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}

const current = 70;
const goal = 80;
const lastWeek = 71;
const lastMonth = null;
const previousWeight =
  lastMonth !== null ? lastMonth : lastWeek !== null ? lastWeek : null;

// useEffect(() => {
//   fetch("/api/user-weight")
//     .then((res) => res.json())
//     .then((data) => {
//       setCurrentWeight(data.current);
//       setGoalWeight(data.goal);
//     });
// }, []);
