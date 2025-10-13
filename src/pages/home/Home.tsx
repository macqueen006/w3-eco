import {MobileNav, NavInnerLeft, NavInnerRight, NavWrapper} from "../../layouts/navbar";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "../../components/ui/navigation-menu.tsx";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../../components/ui/avatar.tsx";
import {NAV_ITEMS} from "../../constants/navigation.ts";
import {Link} from "react-router";
import {cn} from "../../lib/utils.ts";
import {Button} from "../../components/ui/button.tsx";
import {ArrowRight} from "lucide-react";
import Marquee from "react-fast-marquee";
import {ICON_CARDS} from "../../constants/cards.ts";
import {ServicesTabsSection} from "./ServicesTabsSection.tsx";
import ImageBackgroundSection from "./ImageBackgroundSection.tsx";
import {Section} from "../../components/Section.tsx";
import {ResourcesSection} from "./ResourcesSection.tsx";

function Home() {
    return (
        <div className="z-100 min-h-screen w-full p-[6px] flex flex-col relative">
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

                <div className="px-6 py-12 relative w-full h-full z-10">
                    <div className="flex flex-col h-full w-full md:flex-row gap-6 justify-between items-end">
                        <div
                            className="flex flex-col p-6 backdrop-blur-[18px] opacity-[1] bg-surface/50 gap-9 rounded-sm max-w-[571px] mx-auto md:mx-0">
                             Content
                            <div className="flex flex-col justify-start gap-6">
                                <span className="text-surface">[Lifecycle solutions]</span>
                                <h3 className="text-surface">
                                    Future-proof Your Operations.
                                </h3>
                                <p className="text-[20px] leading-[28px] text-surface">
                                    At Lifecycle, we help organizations future-proof operations through smart planning,
                                    efficient systems, and sustainable execution.
                                </p>
                            </div>

                            <Button asChild variant="primary"
                                    className="uppercase h-14 flex items-center text-sm justify-center font-normal scale-100 hover:scale-[.95]">
                                <Link to="/about">learn more about us</Link>
                            </Button>
                        </div>

                        <Link to="/about"
                              className="p-3 bg-surface max-w-[452px] mx-auto md:mx-0 text-foreground w-full flex items-center rounded-sm justify-between group hover:bg-surface/80 transition-colors">
                            <div className="flex justify-start items-center gap-3">
                                <div
                                    className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                    <Avatar className="h-[71px] w-[54px]">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="h-[71px] w-[54px]">
                                        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter"/>
                                        <AvatarFallback>LR</AvatarFallback>
                                    </Avatar>
                                </div>
                                <p className="uppercase text-foreground text-sm font-badges">speak with our team</p>
                            </div>

                            <div
                                className="inline-flex items-center justify-center rounded-full bg-primary p-3 group-hover:bg-primary/90 transition-colors">
                                <ArrowRight className="h-6 w-6"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <Section>
                <div className="text-center flex flex-col items-center justify-start pb-16 gap-16 w-full overflow-hidden">
                    <div className="font-badges">Helping 100+ leading companies get better results</div>
                    <div className="marquee">
                        <Marquee
                            speed={50}
                            gradient={true}
                            gradientColor="white"
                            gradientWidth={100}
                        >
                            <div className="flex gap-16 items-center h-[48px] last:pr-16">
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68353460e39a8797e6f64f4e_marquee-logo-01.svg"
                                    alt="" className="marquee-logo"/>
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/683534603fd5947ee8bc5fb1_marquee-logo-02.svg"
                                    alt="" className="marquee-logo"/>
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68353460930016f8c1865842_marquee-logo-03.svg"
                                    alt="" className="marquee-logo"/>
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68353460ec4b1d80f6269124_marquee-logo-04.svg"
                                    alt="" className="marquee-logo"/>
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68353460ec4b1d80f6269120_marquee-logo-05.svg"
                                    alt="" className="marquee-logo"/>
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/683534603fb873b0cc291864_marquee-logo-06.svg"
                                    alt="" className="marquee-logo"/>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </Section>

            <section className="py-28">
                <div className="w-full px-6">
                    <div className="grid gap-16 md:grid-cols-2 place-items-center h-full">
                        <div className="py-[6px] justify-between flex flex-col gap-16">
                            <div className="flex flex-col gap-6 items-start justify-start">
                                <div className="font-badges">[Applied efficiency]</div>
                                <div className="text-[51px] leading-[58.65px] -tracking-[0.51]">Optimize Operations with
                                    Real-time Data.
                                </div>
                                <Link to="/about"
                                      className="flex w-full gap-2 justify-start items-center">
                                    <div
                                        className="inline-flex items-center justify-center rounded-full bg-primary p-3 group-hover:bg-primary/90 transition-colors">
                                        <ArrowRight className="h-6 w-6"/>
                                    </div>
                                    <div className="font-badges uppercase text-sm">more information</div>
                                </Link>
                            </div>
                            <div
                                className="flex flex-col gap-6 items-start justify-start max-w-[571px] pl-9 border-l border-dotted border-foreground">
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68353460930016f8c1865842_marquee-logo-03.svg"
                                    alt=""/>
                                <div className="leading-[22.4px]">“This team understood the nuance of our industry and
                                    helped us map a way forward
                                    that was both ambitious and achievable. Their advice wasn’t theoretical—it was
                                    grounded, actionable, and already making a real difference.”
                                </div>
                                <div className="flex items-end justify-start gap-3">
                                    <Avatar className="rounded-full w-[54px] h-[71px]">
                                        <AvatarImage
                                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478b5154809023ec147_customer-02.webp"
                                            alt="@evilrabbit"
                                        />
                                        <AvatarFallback>ER</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-badges text-xs uppercase">jaya kowalski</div>
                                        <div className="font-badges text-xs uppercase">head of product</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="overflow-hidden relative flex py-9 h-auto items-center justify-center rounded-sm justify-self-stretch">
                            <div className="absolute w-full h-full overflow-hidden">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478235512b0e740acbe_landscape-18.webp"
                                    alt=""
                                    sizes="(max-width: 1440px) 100vw, 1440px"
                                    style={{
                                        willChange: "transform",
                                        transform: "translate3d(0px, 2.4998%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
                                        transformStyle: "preserve-3d"
                                    }}
                                />
                                <div className="absolute w-full h-full backdrop-blur-[18px] bg-surface/10"></div>
                            </div>
                            <div className="flex justify-start items-center flex-col relative gap-6 z-10">
                                <div className="flex gap-12">
                                    <div
                                        className="flex gap-3 relative rounded-sm overflow-hidden text-center flex-col max-w-[156px] px-[6px] pt-[6px] pb-3">
                                        <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                            <img
                                                src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc4783249441e9db3f46a_landscape-02.webp"
                                                alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                                className="z-20 rounded-sm"/>
                                            <div className="text-xs uppercase font-badges text-white z-10">solar<br/>potential
                                            </div>
                                        </div>
                                        <div
                                            className="absolute top-0 left-0 w-full h-full backdrop-blur-[18px] bg-surface/30"></div>
                                    </div>

                                    <div
                                        className="flex gap-3 relative rounded-sm overflow-hidden text-center flex-col max-w-[156px] px-[6px] pt-[6px] pb-3">
                                        <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                            <img
                                                src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc479b5154809023ec17d_landscape-12.webp"
                                                alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                                className="z-20 rounded-sm"/>
                                            <div className="text-xs uppercase font-badges text-white z-10">logistic<br/>frameworks
                                            </div>
                                        </div>
                                        <div
                                            className="absolute top-0 left-0 w-full h-full backdrop-blur-[18px] bg-surface/30"></div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center mx-auto w-full justify-start self-stretch">
                                    <div
                                        className="self-stretch h-6 mx-[25px] border-r border-b border-l border-dotted border-border rounded-b-sm"/>
                                    <div className="w-px h-6 border-l border-dotted border-border"/>
                                </div>
                                <div
                                    className="flex flex-col gap-3 rounded-sm bg-primary text-center max-w-[156px] p-[6px_6px_12px]">
                                    <div
                                        className="inline-flex justify-center items-center w-36 h-36 rounded-sm bg-[#3b3b3333]">
                                        <img
                                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03ed96832163a6db842_icon-radar.svg"
                                            alt=""/>
                                    </div>
                                    <div className="font-badges text-xs uppercase">accelerated fulfillment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-28 bg-linear-to-t from-surface to-background">
                <div className="w-full px-6">
                    <div className="grid gap-16 md:grid-cols-2 h-auto relative">
                        <div className="py-[6px] flex flex-col gap-16">
                            <div className="flex flex-col items-start justify-start gap-6">
                                <div className="font-badges text-xs uppercase">[our purpose]</div>
                                <div className="text-[51px] leading-[58.65px] -tracking-[0.51]">
                                    Delivering Low-Emissions Infrastructure.
                                </div>
                                <Link to="/about" className="flex w-full gap-2 justify-start items-center">
                                    <div
                                        className="inline-flex items-center justify-center rounded-full bg-primary p-3 group-hover:bg-primary/90 transition-colors">
                                        <ArrowRight className="h-6 w-6"/>
                                    </div>
                                    <div className="font-badges uppercase text-sm">our processes</div>
                                </Link>
                            </div>
                            <div>
                                <div className="border-t border-slate-300">
                                    <div
                                        className="flex gap-6 border-b border-dotted border-slate-500 items-center justify-start py-6">
                                        <div
                                            className="size-[60px] shrink-0 flex justify-center items-center bg-foreground text-surface rounded-sm">
                                            <img
                                                src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03e584218f3051169c3_icon-my-location-light.svg"
                                                alt="" className="size-9"/>
                                        </div>
                                        <div className="max-w-[425px]">
                                            Deploying solar solutions to cut emissions, reduce grid dependence, and
                                            power freight.
                                        </div>
                                    </div>
                                    <div
                                        className="flex gap-6 border-b border-dotted border-slate-500 items-center justify-start py-6">
                                        <div
                                            className="size-[60px] shrink-0 flex justify-center items-center bg-foreground text-surface rounded-sm">
                                            <img
                                                src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03e438e97278eb4cba0_icon-forest-light.svg"
                                                alt="" className="size-9"/>
                                        </div>
                                        <div className="max-w-[425px]">
                                            Advising on-site and off-site wind integration to help logistics operations
                                            transition to Zero Emissions.
                                        </div>
                                    </div>
                                    <div
                                        className="flex gap-6 border-b border-dotted border-slate-500 items-center justify-start py-6">
                                        <div
                                            className="size-[60px] shrink-0 flex justify-center items-center bg-foreground text-surface rounded-sm">
                                            <img
                                                src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03e90f8bdd05370ec4b_icon-map-pinpoint-light.svg"
                                                alt="" className="size-9"/>
                                        </div>
                                        <div className="max-w-[425px]">
                                            Harnessing sensor data and analytics to optimize flow and predict
                                            disruptions across multi-modal networks.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-[623px] min-h-full overflow-hidden relative rounded-sm">
                            <img
                                className="rounded-sm h-full w-full object-cover"
                                src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478823d5a3deb3b4427_portrait-02.webp"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-28 bg-linear-to-b from-surface to-background">
                <div className="w-full px-6">
                    <div className="flex flex-col gap-20">
                        <div
                            className="max-w-[928px] gap-6 text-center flex flex-col justify-start items-center mx-auto">
                            <div className="text-3xl md:text-[40px] leading-[48px] tracking-[-0.4px] text-foreground">Partner with
                                W3-Tech to solve your most complex operational
                                challenges.
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 auto-cols-fr">
                            {ICON_CARDS.map((card) => (
                                <div
                                    key={card.id}
                                    className="flex flex-col justify-start items-start gap-24 rounded-sm bg-background shadow px-[18px] pt-[18px] pb-6"
                                >
                                    <div
                                        className="flex justify-center items-center w-auto h-auto p-[18px] rounded-sm bg-primary flex-none">
                                        <img src={card.icon} alt=""/>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="text-lg font-semibold">{card.title}</div>
                                        <div className="text-base">{card.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ServicesTabsSection/>

            <ImageBackgroundSection
                badge="[our purpose]"
                title="We Build Cleaner Solutions for Resilient Economic Environments."
                linkText="More about us"
                linkHref="/about"
                backgroundImage="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478b3f8c853c905c0c0_landscape-15.webp"
            />

            <Section>
                <ResourcesSection />
            </Section>
        </div>
    );
}

export default Home;