"use client"
import Safari from "@/components/magicui/safari";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center text-[#1a1a1a] px-4 sm:px-0">
        <div className="w-full sm:w-1/2 mt-20 sm:mt-44">
        <BlurFade delay={0.25} inView>
          <div className="z-20 flex items-center justify-center">
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
          <h2 className="font-black text-3xl sm:text-6xl">
            <span className="bg-gradient-to-b from-[#0a0a0a] to-[#4a4a4a] bg-clip-text text-transparent">Your Anonymous Buddy </span>
            <br />
            <span className="bg-gradient-to-r from-[#ffaa40] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">Get the Help You Need</span>,
            <br />
            <span className="bg-gradient-to-b from-[#0a0a0a] to-[#4a4a4a] bg-clip-text text-transparent">When You Need It.</span>
          </h2>
          </BlurFade>
          <BlurFade delay={0.25*2} inView>
          <h2 className="opacity-50 mt-5 text-sm sm:text-base">
            Need help with assignments? At Uni Buddy, we connect you with fellow students who are ready to assist with your academic tasks for some small amount in return, all while maintaining complete anonymity. Join now and get your assignments done in no time before the deadline!
          </h2>
          </BlurFade>
        </div>
        <BlurFade delay={0.25*2} inView>
        <Button className="mt-8" onClick={()=>{router.push("/assignments")}}>Get Started</Button>
        </BlurFade>
      </div>
      <BlurFade delay={0.25*2} inView>
      <div className="my-16 sm:my-28 flex items-center justify-center">
        <div className="relative w-full sm:w-auto">
          <Safari url="unibuddy.com" src="" className="w-full sm:w-auto" />
        </div>
      </div>
      </BlurFade>
    </>
  );
}