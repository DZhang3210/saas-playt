import { Button } from "@/components/ui/button";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div className="">
      LandingPage (unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      </div>
      <div>
        <Link href="/sign-up">
          <Button>Signup</Button>
        </Link>
      </div>
    </div>
  );
}
