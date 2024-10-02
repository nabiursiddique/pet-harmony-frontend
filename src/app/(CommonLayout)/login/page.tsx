"use client";

import { Suspense } from "react";
import LogIn from "./_components/login";
import Loading from "@/src/components/UI/Loading";

const LogInPage = () => {
  return (
    <Suspense
      fallback={
        <>
          <Loading />
        </>
      }
    >
      <LogIn />
    </Suspense>
  );
};

export default LogInPage;
