import { clsx } from "clsx";
import { delay } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

