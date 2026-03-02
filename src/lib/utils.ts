import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Permite combinar clases de Tailwind CSS de forma inteligente.
 * - clsx: Maneja condicionales (ej: isPending && 'opacity-50')
 * - twMerge: Resuelve conflictos (ej: 'p-4' vs 'p-2' -> gana el último)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}