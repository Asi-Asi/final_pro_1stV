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

export default function SidebarComponent() {

  const location = useLocation();

  

  return (
    <Sidebar className="hidden md:flex" variant="floating" collapsible="icon">
      <SidebarHeader className="bg-[#333533] text-[#F4F4F4]">
        <div className="flex items-center justify-center gap-2 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD100]">
            <Dumbbell className="h-6 w-6 text-[#333533]" />
          </div>
          <span
            className="text-lg font-bold transition-all duration-200 
            group-data-[state=collapsed]:hidden"
          >
            Progress Pulse
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-[#333533]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Dashboard">
                  <Link
                    to="/Dashboard"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/Dashboard" ? "bg-[#FFD100] text-[#1E1E1E] font-bold" : "text-[#F4F4F4]"
                    }`}
                    style={location.pathname === "/Dashboard" ? { color: "#1E1E1E" } : {}}

                  >
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Personal Workouts">
                  <Link
                    to="/PersonalWorkouts"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/PersonalWorkouts" ? "bg-[#FFD100]  text-[#000000] font-bold" : "text-[#F4F4F4]"
                      }`}
                      style={location.pathname === "/PersonalWorkouts" ? { color: "#1E1E1E" } : {}}

                  >
                    <Dumbbell className="h-5 w-5" />
                    <span>Personal Workouts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Weight Tracking">
                  <Link
                    to="/WeightTracking"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/WeightTracking" ? "bg-[#FFD100] text-[#000000] font-bold" : "text-[#F4F4F4]"
                      }`}
                      style={location.pathname === "/WeightTracking" ? { color: "#1E1E1E" } : {}}

                  >
                    <Scale className="h-5 w-5" />
                    <span>Weight Tracking</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Monthly Progress">
                  <Link
                    to="/MonthlyProgress"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/MonthlyProgress" ? "bg-[#FFD100] text-[#000000] font-bold" : "text-[#F4F4F4]"
                    }`}
                    style={location.pathname === "/MonthlyProgress" ? { color: "#1E1E1E" } : {}}

                  >
                    <Calendar className="h-5 w-5" />
                    <span>Monthly Progress</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Profile">
                  <Link
                    to="/Profile"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/Profile" ? "bg-[#FFD100] text-[#000000] font-bold" : "text-[#F4F4F4]"
                    }`}
                    style={location.pathname === "/Profile" ? { color: "#1E1E1E" } : {}}

                  >
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Settings">
                  <Link
                    to="/Settings"
                    className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                      location.pathname === "/Settings" ? "bg-[#FFD100] text-[#000000] font-bold" : "text-[#F4F4F4]"
                    }`}
                    style={location.pathname === "/Settings" ? { color: "#1E1E1E" } : {}}

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
          <Avatar className="h-8 w-8 shrink-0 border-2 border-[#FFD100]">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-[#1E1E1E] text-[#FFD100]">
              IG
            </AvatarFallback>
          </Avatar>

          {/* טקסט - מוסתר כשה- Sidebar סגור */}
          <div
            className="flex flex-col items-center transition-all duration-200 
            group-data-[state=collapsed]:hidden"
          >
            <span className="text-sm font-medium">User</span>
            <span className="text-xs text-[#F4F4F4]/70">Advanced Trainee</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
    