import { Home, Dumbbell, Scale, Calendar, User, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";

// יבוא פונקציות ליבוא נתונים מהקונטקסט
// השמור בזיכרון המקומי

export default function SidebarComponent() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userImage = user.profileImage || ""; // כתובת התמונה
  const fullName = user.fullName || "User";
  const initials = fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");





  return (
    <Sidebar
      className="hidden md:flex"
      variant="floating"
      collapsible="icon"
    >
      <SidebarHeader
        className="bg-[#333533] text-[#F4F4F4] flex items-center transition-all duration-200 
    group-data-[state=collapsed]:justify-center justify-start"
      >
        {/* SidebarTrigger ממורכז כשהתפריט סגור, ומיושר לימין כשהוא פתוח */}
        <SidebarTrigger
          className="text-[#F4F4F4] w-full"
        />

        <div className="flex items-center gap-2 p-4 group-data-[state=collapsed]:hidden">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD100]">
            <Dumbbell className="h-6 w-6 text-[#333533]" />
          </div>

          <span className="text-lg font-bold">Progress Pulse</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#333533]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="dashboard">
                  <Link
                    to="/dashboard"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/dashboard"
                        ? "bg-[#FFD100] text-[#1E1E1E] font-bold"
                        : "text-[#F4F4F4]"
                    }`}
                    style={
                      location.pathname === "/dashboard"
                        ? { color: "#1E1E1E" }
                        : {}
                    }
                  >
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="personal Workouts">
                  <Link
                    to="/personalWorkouts"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/personalWorkouts"
                        ? "bg-[#FFD100]  text-[#000000] font-bold"
                        : "text-[#F4F4F4]"
                    }`}
                    style={
                      location.pathname === "/personalWorkouts"
                        ? { color: "#1E1E1E" }
                        : {}
                    }
                  >
                    <Dumbbell className="h-5 w-5" />
                    <span>Personal Workouts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Weight Tracking">
                  <Link
                    to="/weightTracking"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/weightTracking"
                        ? "bg-[#FFD100] text-[#000000] font-bold"
                        : "text-[#F4F4F4]"
                    }`}
                    style={
                      location.pathname === "/weightTracking"
                        ? { color: "#1E1E1E" }
                        : {}
                    }
                  >
                    <Scale className="h-5 w-5" />
                    <span>Weight Tracking</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="monthly Progress">
                  <Link
                    to="/monthlyProgress"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/monthlyProgress"
                        ? "bg-[#FFD100] text-[#000000] font-bold"
                        : "text-[#F4F4F4]"
                    }`}
                    style={
                      location.pathname === "/monthlyProgress"
                        ? { color: "#1E1E1E" }
                        : {}
                    }
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Monthly Progress</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="profile">
                  <Link
                    to="/profile"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/profile"
                        ? "bg-[#FFD100] text-[#000000] font-bold"
                        : "text-[#F4F4F4]"
                    }`}
                    style={
                      location.pathname === "/profile"
                        ? { color: "#1E1E1E" }
                        : {}
                    }
                  >
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="settings">
                  <Link
                    to="/settings"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/settings"
                        ? "bg-[#FFD100] text-[#000000] font-bold"
                        : "text-[#F4F4F4]"
                    }`}
                    style={
                      location.pathname === "/settings"
                        ? { color: "#1E1E1E" }
                        : {}
                    }
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#333533] border-t border-[#1E1E1E]">
        <div
          className="flex flex-col items-center justify-center w-full py-4 transition-all duration-200 
        group-data-[state=collapsed]:py-2"
        >
          {/* Avatar - ממורכז לחלוטין */}
          <Avatar
            className="
              shrink-0 border-2 border-[#FFD100] 
              h-15 w-15 transition-all duration-200 
              group-data-[state=collapsed]:h-10 group-data-[state=collapsed]:w-10"
          >
            {userImage ? (
              <AvatarImage src={userImage} alt={fullName} />
            ) : (
              <AvatarImage src="/placeholder.svg" alt="User" />
            )}
            <AvatarFallback className="bg-[#1E1E1E] text-[#FFD100]">
              {userImage ? "" : initials}
            </AvatarFallback>
          </Avatar>
          {/* טקסט - מוסתר כשה- Sidebar סגור */}
          <div
            className="flex flex-col items-center transition-all duration-200 
            group-data-[state=collapsed]:hidden"
          >
            <span className="text-sm font-medium text-[#F4F4F4]">
              {user ? fullName : "User"}
            </span>
            <span className="text-xs text-[#F4F4F4]/70">Advanced Trainee</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
