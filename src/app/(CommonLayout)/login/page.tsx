"use client";

import { Suspense } from "react";
import LogIn from "./_components/login";

const LogInPage = () => {
  return (
    <Suspense fallback={<p>Fallback</p>}>
      <LogIn />
    </Suspense>
  );
};

export default LogInPage;
