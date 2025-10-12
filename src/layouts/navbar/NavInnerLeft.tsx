import type {ReactNode} from "react";

export const NavInnerLeft = ({logo, navigation}: { logo?: ReactNode, navigation?: ReactNode }) => {
    return (
        <div className="flex items-center gap-6 justify-start">
            {logo}
            {navigation}
        </div>
    );
};