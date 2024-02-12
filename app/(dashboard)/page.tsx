import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import HomePage from "./(routes)/dashboard/page";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <HomePage/>
      <LandingContent />
    </div>
  );
}
 
export default LandingPage;
