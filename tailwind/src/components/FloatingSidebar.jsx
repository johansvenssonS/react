import { Book, Settings, Home, Sparkle, PiggyBank } from "lucide-react";

const FloatingSidebar = () => {
  const navItems = [
    { name: "Översikt", icon: <Home></Home> },
    { name: "Mina kurser", icon: <Book></Book> },
    { name: "Ekonomi", icon: <PiggyBank></PiggyBank> },
    { name: "Inställningar", icon: <Settings></Settings> },
  ];
  //prettier-ignore
  return (
  <aside className=" w-72 h-full bg-blue-400 rounded-[2rem] mt-4">
    {/* LOGO */}
    <div className="flex px-8">
        <div className="flex-1 mt-4 flex-col">
            <div className="border-2 flex justify-around text-amber-300">
                <Sparkle size={30}></Sparkle>
                <span>POLARSTJÄRNA</span>
            </div>
        </div>
        
    </div>
    
    {/* NAVIGATION */}
    <nav>
        <ul className="flex flex-col ml-2 mr-2 mt-5 gap-5">

        {
            navItems.map((item, i) => (
                <li className="flex border-1" key={i}>{item.icon} {item.name}</li>
            ))
        }
        </ul>
    </nav>

    {/* ACTION BUTTONS */}
  </aside>
  )
};

export default FloatingSidebar;
