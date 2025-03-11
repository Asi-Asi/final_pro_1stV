{
  /* layout imports */
}
import Sidebar from "@/components/layout/SideBar";
import NavBarHeader from "@/components/layout/NavBar-Header";
import { Footer } from "@/components/layout/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";

{
  /* sections imports */
}
import DesktopHeader from "@/components/layout/DeskTopHeader";
import WelcomeBanner from "@/components/sections/Dash-Sections/WelcomeBanner";
import StatCards from "@/components/sections/Dash-Sections/StatsSection";
import Charts from "@/components/sections/Dash-Sections/ChartsSection";

import RecentWorkouts from "@/components/sections/Dash-Sections/RecentWorkoutSection";


export default function Dashboard() {
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

            {/* Main Content */}
            <main className="flex-1 bg-[#1E1E1E] min-h-screen w-full">
              {/* Desktop Header */}
              <DesktopHeader />

              {/* Welcome Banner */}
              <WelcomeBanner />

              {/* Dashboard Content */}
              <div className="p-4 md:p-6 lg:p-8">
                {/* Stat Cards */}
                {/* תקין */}
                <StatCards />

                {/* Charts Section */}
                {/* תקין */}
                <Charts />

                {/* Recent Workouts */}
                <RecentWorkouts />
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </SidebarProvider>
    </>
  );
}
