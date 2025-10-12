import type {ReactNode} from "react";
import {cn} from "../../lib/utils.ts";

export const NavWrapper = ({children, className}: { children?: ReactNode, className?: string }) => {
    return (
        <div
            className={cn("h-[72px] border-b border-border backdrop-blur-[20px] bg-background sticky top-0 flex items-center justify-center z-100", className)}>
            <div className="w-full mx-auto relative px-6 z-[3]">
                <div className="flex items-center justify-between">
                    {children}
                </div>
            </div>
        </div>
    );
};

