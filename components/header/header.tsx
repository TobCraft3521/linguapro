import { cn } from "@/lib/utils";
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { ModeToggle } from "../global/mode-toggle";
import { Button } from "../ui/button";
import LinguaPro from "./linguapro-logo";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Sidebar from "../sidebar/sidebar";

interface HeaderProps {
  border?: boolean;
  mode?: "light" | "dark";
}

const Header = async ({ border }: HeaderProps) => {
  const { userId } = auth();
  const user = await currentUser();
  return (
    <header
      className={cn(
        "top-0 z-50 flex h-16 w-full items-center justify-between border-b-[1px] pl-8 pr-8 md:pl-16",
        !border && "border-b-0 pt-8",
      )}
    >
      <LinguaPro />
      <div className="flex flex-row items-center justify-center gap-4 md:gap-8">
        {!userId && (
          <div className="hidden flex-row items-center justify-center gap-2 md:flex">
            <a href="/sign-up">
              <Button variant="primary" className="font-extrabold uppercase">
                Sign Up
              </Button>
            </a>
            <a href="/sign-in">
              <Button variant="outline" className="font-extrabold uppercase">
                Sign In
              </Button>
            </a>
          </div>
        )}
        {userId && (
          <div className="flex h-full flex-row items-center justify-center gap-2 text-lg font-semibold">
            <UserButton />
            <div className="hidden md:flex">{user?.username}</div>
          </div>
        )}
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent>
            <Sidebar className="" />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
