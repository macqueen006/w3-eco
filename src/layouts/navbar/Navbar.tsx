import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu.tsx";

import {Link, useLocation} from "react-router";
import {cn, getAssetUrl} from "../../lib/utils.ts";
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
                    <Link to="/" aria-current="page"
                          className="relative text-[#333] decoration-0 shrink-0"
                          aria-label="home">
                        <img
                            src={getAssetUrl('img/logos/logo.png')}
                            alt="logo" className="max-h-14 shrink-0"/>
                    </Link>
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
                        <Link to="/contact-us"
                              className="h-[42px] px-[18px] flex justify-center items-center rounded-sm font-normal relative bg-primary text-dark text-sm uppercase">
                            <div className="button-text-wrapper">
                                <div className="button-text">Contact us</div>
                            </div>
                        </Link>
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