import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center text-[#1a1a1a]">
        <div className="w-1/2 mt-44">
        <div className="z-10 flex items-center justify-center">
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              Introducing UniBuddy
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </div>
          <h2 className="font-black sm:text-6xl">Your Anonymous Buddy <br /><span className=" bg-gradient-to-r from-[#ffaa40] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">Get the Help You Need</span>,<br /><span className="">When You Need It.</span></h2>
          <h2 className="opacity-50 mt-5">Need help with assignments? At Uni Buddy, we connect you with fellow students who are ready to assist with your academic tasks, all while maintaining complete anonymity. Whether you’re swamped with deadlines or looking for some expert guidance.</h2>
        </div>
        <Button className="mt-3">Get Started</Button>
      </div>
      <div className="my-32 flex items-center justify-center">
          <img src="https://placehold.co/1920x1080" className="w-1/2 rounded-2xl" alt=""/>
      </div>
    </>
  );
}
