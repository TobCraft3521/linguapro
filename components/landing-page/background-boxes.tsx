"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import Flueny from "../header/linguapro-logo";
import Image from "next/image";
import Flags from "./languages";
import People from "@/public/imgs/people.png";

export function BackgroundBoxesDemo() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-100 [mask-image:radial-gradient(transparent,white)] dark:bg-slate-900" />

      <Boxes />
      <div className="z-20 mt-4 flex flex-col items-center justify-center md:flex-row">
        <div className="m-16 pt-[10vh] md:pb-16">
          <h1 className="text-center text-3xl font-semibold">
            Learn to speak new
            <br />
            languages fluently with
          </h1>
          <Flueny />
          <div className="mt-8 flex flex-col gap-2">
            <Link href="/sign-up">
              <Button
                variant="primary"
                className="w-full font-extrabold uppercase"
              >
                Start now
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                variant="sidebarOutline"
                className="w-full font-extrabold uppercase"
              >
                Log in
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image src={People} alt="People" height={512} />
        </div>
      </div>
      <Flags />
    </div>
  );
}
