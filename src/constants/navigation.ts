
export const NAV_ITEMS: NavItem[] = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/compliance", label: "Compliance" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact Us" },
];

export const MOBILE_NAV_ITEMS = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    {
        label: "Services",
        id: "services",
        children: [
            { to: "/services/consulting", label: "Consulting" },
            { to: "/services/audit", label: "Audit" },
            { to: "/services/training", label: "Training" },
        ],
    },
];

export const FOOTER_LINKS = [
    // ...
];

export const SOCIAL_LINKS = [
    // ...
];