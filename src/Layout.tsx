import React, { Suspense } from "react";
import Header from "./components/Header";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-[1440px] max-h-screen">
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
