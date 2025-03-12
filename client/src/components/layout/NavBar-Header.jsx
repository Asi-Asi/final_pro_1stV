import { Link, useNavigate } from "react-router-dom";


import {
  Menu,
  Dumbbell,
  Home,
  Dumbbell as DumbbellIcon,
  Scale,
  Calendar,
  LogOut,
  User,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// יבוא פונקציות ליבוא נתונים מהקונטקסט
// השמור בזיכרון המקומי
import { UserContext } from "@/context/userContext";
import { useContext } from "react";

export default function Header() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // מחיקת נתוני המשתמש מה-Local Storage
    localStorage.removeItem("sidebarCollapsed"); // מחיקת נתוני המשתמש מה-Local Storage
    navigate("/"); // ניתוב לדף ההתחברות
};

  const userImage = user?.profileImage || null; // כתובת התמונה
  const fullName = user?.fullName || "User";
  const initials = fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");

  return (
    <header className="flex h-16 items-center justify-between border-b border-[#1E1E1E] bg-[#1E1E1E] px-4 md:hidden">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-[#F4F4F4]">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 bg-[#333533]">
            <div className="flex h-16 items-center border-b border-[#1E1E1E] px-6">
              <div className="flex items-center gap-2">
                <DumbbellIcon className="h-6 w-6 text-[#FFD100]" />
                <span className="text-lg font-bold text-[#F4F4F4]">
                  Progress Pulse
                </span>
              </div>
            </div>
            <nav className="px-2 py-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-3 rounded-lg bg-[#1E1E1E] px-3 py-2 text-[#F4F4F4]"
                  >
                    <Home className="h-5 w-5 text-[#FFD100]" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/personal-workouts"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#F4F4F4] hover:bg-[#1E1E1E]"
                  >
                    <Dumbbell className="h-5 w-5 text-[#FFD100]" />
                    <span>Personal Workouts</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/weight-tracking"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#F4F4F4] hover:bg-[#1E1E1E]"
                  >
                    <Scale className="h-5 w-5 text-[#FFD100]" />
                    <span>Weight Tracking</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/monthly-progress"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#F4F4F4] hover:bg-[#1E1E1E]"
                  >
                    <Calendar className="h-5 w-5 text-[#FFD100]" />
                    <span>Monthly Progress</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#F4F4F4] hover:bg-[#1E1E1E]"
                  >
                    <User className="h-5 w-5 text-[#FFD100]" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#F4F4F4] hover:bg-[#1E1E1E]"
                  >
                    <Settings className="h-5 w-5 text-[#FFD100]" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Button 
                    className="bg-[#FF5733] text-white hover:bg-[#FF5733]/30"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                  </Button>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
        <Dumbbell className="h-6 w-6 text-[#FFD100]" />
        <h1 className="text-xl font-bold text-[#F4F4F4]">Progress Pulse</h1>
      </div>
      <Avatar className="h-8 w-8 border border-[#FFD100] flex items-center justify-center overflow-hidden">
        {userImage ? (
          <AvatarImage
            src={userImage}
            alt={fullName}
            className="object-cover w-full h-full"
          />
        ) : (
          <AvatarFallback className="bg-[#1E1E1E] text-[#FFD100] flex items-center justify-center w-full h-full">
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
    </header>
  );
}
