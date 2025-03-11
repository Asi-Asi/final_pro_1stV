import { useLocation } from "react-router-dom";

import { Calendar, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DesktopHeader() {

    const location = useLocation();

    const pageTitle ={
        "/Dashboard": "Dashboard",
        "/Personal-workouts": "Personal Workouts",
        "/Weight-tracking": "Weight Tracking",
        "/Workout-history": "Workout History",
        "/Profile": "Profile",
        "/Settings": "Settings",
    };


    const title = pageTitle[location.pathname];

    return (
        <div className="hidden md:block">
            <div className="flex h-16 items-center justify-between border-b border-[#333533] bg-[#1E1E1E] px-6">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="text-[#F4F4F4]" />
                    <h1 className="text-xl font-bold text-[#F4F4F4]">{title}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button
                    variant="outline"
                    className="text-[#1E1E1E] border-[#F4F4F4] hover:bg-[#00A896] hover:text-[#1E1E1E]"
                    >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a New Workout
                    </Button>
                    <Button className="bg-[#FF5733] text-white hover:bg-[#FF5733]/90">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                    </Button>
                </div>
            </div>
        </div>
    );    
}
