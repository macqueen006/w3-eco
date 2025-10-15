import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAssetUrl = (path: string) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
};