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

    interface TabData {
        id: string;
        title: string;
        content: string;
        link: string;
    }

    interface CardData {
        id: string;
        image: string;
        title: string;
        description: string;
        link: string;
        linkText?: string;
    }

    interface ResourcesSectionProps {
        badge?: string;
        title?: string;
        description?: string;
        cards?: CardData[];
        columns?: 3 | 4;
    }

}