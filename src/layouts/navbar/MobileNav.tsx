import {useState} from "react";
import {Button} from "../../components/ui/button";
import {Menu, X} from "lucide-react";
import {Link} from "react-router";
import {cn} from "../../lib/utils.ts";
import {MOBILE_NAV_ITEMS} from "../../constants/navigation.ts";

export const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                        {MOBILE_NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "px-4 py-2 rounded-md text-sm transition-colors hover:bg-accent cursor-pointer",
                                    location.pathname === item.to && "text-secondary/50"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
};