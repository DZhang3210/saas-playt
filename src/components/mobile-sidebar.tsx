"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";

export default function MobileSidebar() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size="icon" className="block md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="border-0 p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}