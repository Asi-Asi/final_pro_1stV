import { CheckCircle } from "lucide-react"

export function WelcomeSection() {
  return (
    <div className="flex flex-col justify-center p-6">
      <h2 className="text-4xl font-bold mb-4 text-[#F4F4F4]">Welcome Back</h2>
      <p className="mb-8 text-lg text-[#F4F4F4]">Log in to your account to continue your journey</p>

      <div className="space-y-4">
        {["Track your progress", "Access exclusive content", "Sync across all devices"].map((text, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle size={20} className="text-[#00A896]" />
            <span className="text-[#F4F4F4]">{text}</span>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#B8860B]">
            <span className="text-xs font-bold text-[#F4F4F4]">1</span>
          </div>
          <span className="text-[#B8860B]">Achievement Unlocked</span>
        </div>
        <p className="text-sm text-[#F4F4F4]">Join over 10,000 users who have improved their skills</p>
      </div>
    </div>
  )
}