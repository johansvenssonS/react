import FloatingSidebar from "./components/FloatingSidebar";
import FloatingHeader from "./components/FloatingHeader";
import DashboardHero from "./components/DashboardHero";
import QuickStats from "./components/QuickStats";
import Features from "./components/Features";

function App() {
  // prettier-ignore
  return (
    <div className="flex w-full h-screen p-4 bg-green-500/20 ">
      {/* Sidebar */}
      <FloatingSidebar></FloatingSidebar>


      <div className="flex-1 flex-col">
        {/* header */}
      <FloatingHeader></FloatingHeader>
      

      <main className="">

      {/* Hero */}
      <DashboardHero></DashboardHero>
      {/* Stats */}
      <QuickStats></QuickStats>
      {/* Features */}
      <Features></Features>
      {/* ======= */}
      {/* Footer */}
      </main>
      </div>
    </div>
  );
}

export default App;

// {/* <div
// className="
// flex items-center justify-between gap-4   /* layout & align */
//   w-full max-w-md h-12                      /* storlek */
//   p-4 m-2                                   /* padding & margin */
//   border border-gray-300 rounded-lg         /* border */
//   bg-white text-gray-800 text-sm font-medium /* färg & text */
//   shadow-sm                                 /* effekter */
//   hover:bg-gray-50 transition               /* states */
// "
// ></div>; */}
