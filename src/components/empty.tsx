import Image from "next/image";
import React from "react";

type EmptyProps = {
  label: string;
};

export default function Empty({ label }: EmptyProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center p-20">
      <div className="relative h-72 w-72">
        <Image alt="Empty" fill src="/empty.jpg" />
      </div>
      <p className="text-center text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
