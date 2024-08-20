import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const DashboardPage = () => {
  auth().protect();
  return (
    <div>
      <Button variant="destructive" size="lg">
        DashboardPage(protected)
      </Button>
    </div>
  );
};

export default DashboardPage;
