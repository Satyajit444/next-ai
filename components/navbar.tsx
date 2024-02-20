
import { MobileSidebar } from "@/components/mobile-sidebar";

const Navbar = async () => {

  return (
    <div className="flex items-center bg-glass absolute top-0 bg-[#131313]  p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end"></div>
    </div>
  );
}
 
export default Navbar;