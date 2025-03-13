{
  /* layout imports */
}
import Sidebar from "@/components/layout/SideBar";
import DesktopHeader from "@/components/layout/DeskTopHeader";

import NavBarHeader from "@/components/layout/NavBar-Header";
import { Footer } from "@/components/layout/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";

/* sections imports*/
import ProfileStats from "@/components/sections/profile-sections/profile-stats";
import WeightOverview from "@/components/sections/profile-sections/weight-overview";
import GoalsBoard from "@/components/sections/profile-sections/goals-board";
import WorkoutHistory from "@/components/sections/profile-sections/workout-history";

/* ייבוא PopperComponent */
import PopperComponent from "@/components/sections/profile-sections/EditModel";

import { useNavigate } from "react-router-dom";


// יבוא פונקציות ליבוא נתונים מהקונטקסט
// השמור בזיכרון המקומי
import { UserContext } from "@/context/userContext";
import { useContext, useEffect } from "react";

export default function ProfilePage() {
  
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user"); 
    if (!user) {
      navigate("/"); 
    }
  }, [navigate]);




  const { user } = useContext(UserContext);
  const userImage = user?.profileImage || null; // כתובת התמונה
  const fullName = user?.fullName || "User";
  const initials = fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");




  return (
    <>
      <SidebarProvider w-full h-full overflow-hidden>
        <div className="min-h-screen bg-[#333533] text-[#F4F4F4] h-full w-full">
          {/* Top Navigation - Mobile Only */}
          <NavBarHeader />

          <div className="flex">
            {/* Sidebar - Desktop Only */}
            <Sidebar
              className="hidden md:flex"
              variant="floating"
              collapsible="icon"
            />
            {/*  */}
            <div className="flex-1 bg-[#1E1E1E] min-h-screen w-full">
              {/* Desktop Header */}
              <DesktopHeader />

              <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="mb-8 rounded-xl bg-[#333533] p-6 shadow-lg">
                  <h1 className="mb-6 text-center text-3xl font-bold text-[#FFD100]">
                    Personal Profile
                  </h1>
                  <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-[#FFD100]">
                      {userImage ? (
                        <img
                          src={userImage}
                          alt={fullName}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-[#1E1E1E] text-[#FFD100] text-3xl font-bold">
                          {initials}
                        </div>
                      )}
                    </div>
                    <div className="text-center md:text-left">
                      <h2 className="text-2xl font-bold">
                        {user ? user.fullName : "User"}
                      </h2>
                      <span className="inline-block rounded-full bg-[#00A896] px-3 py-1 text-sm font-medium">
                        Advanced Trainee
                      </span>
                      <div className="mt-2">
                        <PopperComponent />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 1: Progress Overview */}
                <ProfileStats />

                {/* Section 2: Body Weight Overview */}
                <WeightOverview />

                {/* Section 5: Goals Board */}
                <GoalsBoard />

                {/* Section 6: Workout History */}
                <WorkoutHistory />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </SidebarProvider>
    </>
  );
}
