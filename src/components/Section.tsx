import {type ReactNode} from "react";
import {cn} from "../lib/utils";

interface SectionProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    padding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "default";
    background?: "default" | "surface" | "muted" | "accent" | "transparent";
    id?: string;
}

export function Section({children, className, containerClassName, padding = "lg", maxWidth = "default", background = "default", id
}: SectionProps) {
    const paddingStyles = {
        none: "",
        sm: "py-8",
        md: "py-12",
        lg: "py-16",
        xl: "py-20",
        "2xl": "py-28"
    };

    const maxWidthStyles = {
        sm: "max-w-3xl",
        md: "max-w-5xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        "2xl": "max-w-[1400px]",
        full: "max-w-full",
        default: "max-w-[1366px]"
    };

    const backgroundStyles = {
        default: "bg-background",
        surface: "bg-surface",
        muted: "bg-muted",
        accent: "bg-accent",
        transparent: "bg-transparent"
    };

    return (
        <section
            id={id}
            className={cn(
                "block relative",
                paddingStyles[padding],
                backgroundStyles[background],
                className
            )}
        >
            <div
                className={cn(
                    "w-full px-6 mx-auto",
                    maxWidthStyles[maxWidth],
                    containerClassName
                )}
            >
                {children}
            </div>
        </section>
    );
}