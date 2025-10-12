import type {ReactNode} from "react";

export const NavInnerRight = ({button, mobileMenu}: { button?: ReactNode, mobileMenu?: ReactNode }) => {
    return (
        <div>
            {button}
            {mobileMenu}
        </div>
    );
};