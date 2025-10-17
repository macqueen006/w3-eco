import type {ReactNode} from "react";
import {cn} from "../../lib/utils.ts";

export const NavWrapper = ({children, className}: { children?: ReactNode, className?: string }) => {
    return (
        <header className={cn("h-auto py-1.5 border-b border-border backdrop-blur-[20px] bg-background/50 sticky top-0 flex items-center justify-center z-[200]", className)}>
            <div className="w-full mx-auto relative px-6 z-[3]">
                <div className="flex items-center justify-between">
                    {children}
                </div>
            </div>
        </header>
    );
};

