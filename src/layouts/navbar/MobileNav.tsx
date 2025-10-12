import {useState} from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "../../components/ui/collapsible";
import {Button} from "../../components/ui/button";
import {ChevronDown, Menu, X} from "lucide-react";
import {Link} from "react-router";
import {cn} from "../../lib/utils.ts";
import {MOBILE_NAV_ITEMS} from "../../constants/navigation.ts";

export const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

    const toggleDropdown = (id: string) => {
        setOpenDropdowns((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="sm:hidden">
            {/* Hamburger Button */}
            <Button
                variant="outline"
                className="text-secondary"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-[54px] left-0 right-0 bg-background border-b shadow-lg z-50">
                    <nav className="mx-auto px-4 py-4 flex flex-col gap-2">
                        {MOBILE_NAV_ITEMS.map((item) => {
                            // Regular link without dropdown
                            if ("to" in item && item.to) {
                                return (
                                    <Link
                                        key={item.label}
                                        to={item.to}
                                        onClick={() => setIsOpen(false)}
                                        className={cn("px-4 py-2 rounded-md text-sm transition-colors hover:bg-accent cursor-pointer",
                                            location.pathname === item.to && "text-secondary/50")}>
                                        {item.label}
                                    </Link>
                                );
                            }

                            // Dropdown menu item
                            return (
                                <Collapsible
                                    key={item.id}
                                    open={openDropdowns.includes(item.id!)}
                                    onOpenChange={() => toggleDropdown(item.id!)}>
                                    <CollapsibleTrigger
                                        className="w-full px-4 py-3 rounded-md text-base font-normal cursor-pointer transition-colors hover:bg-accent flex items-center justify-between text-foreground">
                                        {item.label}
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform ${
                                                openDropdowns.includes(item.id!)
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="pl-4 pt-2 flex flex-col gap-1">
                                        {item.children?.map((child) => (
                                            <Link
                                                key={child.to}
                                                to={child.to}
                                                onClick={() => setIsOpen(false)}
                                                className={cn("px-4 py-2 rounded-md text-sm transition-colors hover:bg-accent cursor-pointer",
                                                    location.pathname === item.to && "text-secondary/50")}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </CollapsibleContent>
                                </Collapsible>
                            );
                        })}
                    </nav>
                </div>
            )}
        </div>
    );
};
