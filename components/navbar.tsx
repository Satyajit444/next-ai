
import { MobileSidebar } from "@/components/mobile-sidebar";

const Navbar = async () => {

  return ( 
    <div className="flex items-center bg-glass p-4">
      <MobileSidebar/>
      <div className="flex w-full justify-end">
      </div>
    </div>
   );
}
 
export default Navbar;