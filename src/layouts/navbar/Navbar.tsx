import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu.tsx";

import {Link, useLocation} from "react-router";
import {cn} from "../../lib/utils.ts";
import {MobileNav} from "./MobileNav.tsx";
import {NavInnerRight} from "./NavInnerRight.tsx";
import {NavInnerLeft} from "./NavInnerLeft.tsx";
import {NavWrapper} from "./NavWrapper.tsx";
import {NAV_ITEMS} from "../../constants/navigation.ts";

function Navbar() {
    const location = useLocation();

    return (
        <NavWrapper>
            <NavInnerLeft
                logo={
                    <a href="/public" aria-current="page"
                       className="relative text-[#333] decoration-0 shrink-0"
                       aria-label="home">
                        <img
                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/684655302e77639311d54413_logo-lifecycle.svg"
                            alt="logo" className="max-h-[36px] shrink-0"/>
                    </a>
                }
                navigation={
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className="sm:flex flex-row gap-6 my-0 hidden">
                            {NAV_ITEMS.map((item) => (
                                <NavigationMenuItem key={item.label}>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to={item.to}
                                              className={cn("!text-base font-normal !p-0 hover:text-foreground/75",
                                                  location.pathname === item.to && "text-secondary/50"
                                              )}>{item.label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                }
            />

            {/*Right navigation*/}
            <NavInnerRight
                button={
                    <div className="w-full hidden md:block">
                        <a href="/contact"
                           target="_blank"
                           className="h-[42px] px-[18px] flex justify-center items-center rounded-sm font-normal relative bg-primary text-dark text-sm uppercase">
                            <div className="button-text-wrapper">
                                <div className="button-text">W3 Licences</div>
                            </div>
                        </a>
                    </div>
                }
                mobileMenu={
                    <MobileNav/>
                }
            />
        </NavWrapper>
    )
}

export default Navbar;