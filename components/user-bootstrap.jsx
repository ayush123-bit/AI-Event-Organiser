"use client";

import { useEffect, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function UserBootstrap({ children }) {
  const { isLoaded, isSignedIn } = useUser();
  const storeUser = useMutation(api.users.store);

  // Prevent duplicate calls
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;
    if (hasRun.current) return;

    hasRun.current = true;
    storeUser();
  }, [isLoaded, isSignedIn, storeUser]);

  return children;
}
