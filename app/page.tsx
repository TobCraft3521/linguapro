import FullWidthSection from "@/components/landing-page/blabla";
import Flags from "@/components/landing-page/languages";
import Flueny from "@/components/header/linguapro-logo";
import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import People from "@/public/imgs/people.png";
import Image from "next/image";
import Link from "next/link";
import IntroductionBlock from "@/components/landing-page/intro";
import AdditionalInfoBlock from "@/components/landing-page/third";
import { BackgroundBoxesDemo } from "@/components/landing-page/background-boxes";
import Hero from "@/components/landing-page/hero";
import { ScrollArea } from "@/components/ui/scroll-area";

export default () => {
  return (
    <ScrollArea className="h-screen w-full">
      <Hero />
      <IntroductionBlock />
      <FullWidthSection />
      <AdditionalInfoBlock />
    </ScrollArea>
  );
};
