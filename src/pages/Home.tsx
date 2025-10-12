import {MobileNav, NavInnerLeft, NavInnerRight, NavWrapper} from "../layouts/navbar";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "../components/ui/navigation-menu.tsx";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../components/ui/avatar";
import {NAV_ITEMS} from "../constants/navigation.ts";
import {Link} from "react-router";
import {cn} from "../lib/utils.ts";
import {Button} from "../components/ui/button.tsx";
import {ArrowRight} from "lucide-react";

function Home() {
    return (
        <div className="z-100 min-h-screen p-[6px] flex relative">
            <section
                className="bg-secondary rounded-sm text-surface flex flex-col relative overflow-hidden justify-between flex-1">
                <NavWrapper className="bg-transparent text-white">
                    <NavInnerLeft
                        logo={
                            <a href="/public" aria-current="page"
                               className="relative text-[#333] decoration-0 bg-transparent shrink-0"
                               aria-label="home">
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68465530cad72707fd6d1674_logo-lifecycle-light.svg"
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
                                                      className={cn("!text-base font-normal !p-0 hover:text-foreground/75 bg-transparent text-white",
                                                          location.pathname === item.to && "text-primary"
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
                {/*Video Attachment*/}
                <div
                    className="video absolute top-0 left-0 h-screen w-screen pointer-none z-[1] opacity-[1] hero-transform">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683507f1d1111d1fb59552ce_video-poster-00001.jpg"
                    >
                        <source
                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683507f1d1111d1fb59552ce_video-transcode.mp4"
                            data-wf-ignore="true"/>
                        <source
                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683507f1d1111d1fb59552ce_video-transcode.webm"
                            data-wf-ignore="true"/>
                    </video>
                </div>
                {/*End video */}
                {/*Hero text content*/}
                <div className="px-6 py-12 relative w-full h-full z-10">
                    <div className="flex gap-6 justify-between items-end">
                        <div
                            className="flex flex-col p-6 backdrop-blur-[18px] opacity-[1] bg-surface/50 gap-9 rounded-sm max-w-[571px]">
                            {/* Content */}
                            <div className="flex flex-col justify-start gap-6">
                                <span className="text-surface">[Lifecycle solutions]</span>
                                <h1 className="text-surface">
                                    Future-proof<br/>Your<br/>Operations.
                                </h1>
                                <p className="text-[20px] leading-[28px] text-surface">
                                    At Lifecycle, we help organizations future-proof operations through smart planning,
                                    efficient systems, and sustainable execution.
                                </p>
                            </div>
                            {/* Button */}
                            <Button asChild variant="primary"
                                    className="uppercase h-14 flex items-center text-sm justify-center font-normal scale-100 hover:scale-[.95]">
                                <Link to="/about">learn more about us</Link>
                            </Button>
                        </div>

                        <Link to="/about"
                              className="p-3 bg-surface max-w-[452px] text-foreground w-full flex items-center rounded-sm justify-between">
                            <div className="flex justify-start items-center gap-3">
                                <div
                                    className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                    <Avatar className="h-[71px] w-[54px]">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="h-[71px] w-[54px]">
                                        <AvatarImage
                                            src="https://github.com/maxleiter.png"
                                            alt="@maxleiter"
                                        />
                                        <AvatarFallback>LR</AvatarFallback>
                                    </Avatar>
                                </div>
                                <p className="uppercase text-foreground text-sm font-badges">speak with our team</p>
                            </div>
                            <Button asChild variant="primary" className="rounded-full">
                                <Link to="/about">
                                    <ArrowRight className="h-6 w-6" />
                                </Link>
                            </Button>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;