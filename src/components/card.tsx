"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface CardProps {
  value: string;
  isFaceUp: boolean;
}

export default function Card({ value, isFaceUp }: CardProps) {
  const [_isFaceUp, _setIsFaceUp] = useState(isFaceUp);

  return (
    <div
      className={cn(
        "cursor-pointer rounded-lg border-4 border-white p-4 text-4xl transition-transform duration-100 ease-in-out hover:scale-110 active:scale-95",
        { "bg-white": !_isFaceUp },
      )}
      onClick={() => {
        _setIsFaceUp(!_isFaceUp);
      }}
    >
      <span className={cn({ invisible: !_isFaceUp })}>{value}</span>
    </div>
  );
}
