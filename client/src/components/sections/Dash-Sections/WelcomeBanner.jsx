import { Progress } from "@/components/ui/progress";

export default function WelcomeBanner() {
  return (
    <div className="bg-gradient-to-r from-[#333533] to-[#1E1E1E] p-6 md:p-8 border-b border-[#333533]">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold text-[#F4F4F4] md:text-3xl">Hello, User!</h2>
        <p className="mt-2 text-[#F4F4F4]/80">
          This week, you completed 3 out of 5 planned workouts. Keep it up!
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-[#F4F4F4]">
            <span>Weekly Progress</span>
            <span>60%</span>
          </div>
          <Progress 
            value={60} 
            className="h-2 mt-1 bg-[#333533] relative overflow-hidden rounded-full"
            style={{ "--progress-color": "#FFD100" }} 
          />
        </div>
      </div>
    </div>
  );
}
