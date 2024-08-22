"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("c41da2c2-32e1-467b-87ee-8e19c4cc0714");
  });
  return null;
}
