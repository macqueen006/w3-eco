import {Link} from "react-router";
import {ArrowRight, type LucideIcon} from "lucide-react";
import {cn} from "../lib/utils";
import * as React from "react";

interface ArrowLinkProps {
    to: string;
    children?: React.ReactNode;
    icon?: LucideIcon;
    variant?: "default" | "light" | "dark" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    iconClassName?: string;
    external?: boolean;
}

export function ArrowLink({to, children, icon: Icon = ArrowRight, variant = "default", size = "md", className, iconClassName, external = false
}: ArrowLinkProps) {
    const variantStyles = {
        default: "bg-primary text-foreground hover:bg-primary/90",
        light: "bg-white text-foreground hover:bg-white/90",
        dark: "bg-foreground text-white hover:bg-foreground/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white"
    };

    const sizeStyles = {
        sm: {
            wrapper: "gap-2",
            icon: "p-2",
            iconSize: "h-4 w-4",
            text: "text-xs"
        },
        md: {
            wrapper: "gap-2",
            icon: "p-3",
            iconSize: "h-6 w-6",
            text: "text-sm"
        },
        lg: {
            wrapper: "gap-3",
            icon: "p-4",
            iconSize: "h-7 w-7",
            text: "text-base"
        }
    };

    const sizes = sizeStyles[size];

    const linkClassName = cn(
        "flex w-full justify-start items-center group",
        sizes.wrapper,
        className
    );

    const iconContent = (
        <>
            <div
                className={cn(
                    "inline-flex items-center justify-center rounded-full transition-colors",
                    variantStyles[variant],
                    sizes.icon,
                    iconClassName
                )}
            >
                <Icon className={sizes.iconSize}/>
            </div>
            <div className={cn("font-badges uppercase", sizes.text)}>
                {children}
            </div>
        </>
    );

    if (external) {
        return (
            <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
            >
                {iconContent}
            </a>
        );
    }

    return (
        <Link to={to} className={linkClassName}>
            {iconContent}
        </Link>
    );
}
