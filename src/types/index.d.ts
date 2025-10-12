export {}; // This makes it a module

declare global {
    interface User {
        id: number;
        name: string;
        email: string;
    }

    type NavItem = {
        to: string;
        label: string;
    }

    type NavbarProps = {
        logo?: ReactNode;
        navItems?: NavItem[];
        button?: ReactNode;
        colors?: NavbarColors;
        className?: string;
        mobileNavColors?: NavbarColors;
    };

    type NavbarColors = {
        background?: string;
        text?: string;
        textHover?: string;
        textActive?: string;
        border?: string;
        buttonBg?: string;
        buttonText?: string;
        buttonHover?: string;
    }
}