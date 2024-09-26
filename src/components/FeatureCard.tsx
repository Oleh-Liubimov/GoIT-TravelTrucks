import React from "react";

export interface FeatureCardProps {
  image: string;
  children: React.ReactNode;
}

export default function FeatureCard({ image, children }: FeatureCardProps) {
  return (
    <div className=" flex flex-col justify-center items-center">
      <img src={image} height="28px" width="32px" />
      {children}
    </div>
  );
}
