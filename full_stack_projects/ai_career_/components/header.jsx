import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="AI_Career_coach_logo"
            width={100}
            height={20}
            className="h-30 py-1 w-auto object-contain"
          />
        </Link>
        <div className=" flex items-center space-x-2 ">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block"> Industry Insights</span>
              </Button>
            </Link>
   

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarsIcon className="h-4 w-4" />
                <span className="hidden md:block">Growth Tool</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/resume"} className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden md:block">Build Resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/cover_letter"}
                  className="flex items-center gap-2"
                >
                  <PenBox className="h-4 w-4" />
                  <span className="hidden md:block">Cover Letter</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/interview_preparation"}
                  className="flex items-center gap-2"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden md:block">Interview Preparation</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant= "outline">Sign In</Button>
            </SignInButton>
           
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton 
            appearance={
              {
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadown-xi",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }
            }
            afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default header;
