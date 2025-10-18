import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../../components/ui/avatar.tsx";
import {Link} from "react-router";
import {Button} from "../../components/ui/button.tsx";
import {ArrowRight, ChartLine, Check, Lock} from "lucide-react";
import Marquee from "react-fast-marquee";
import {ICON_CARDS} from "../../constants/cards.ts";
import {ServicesTabsSection} from "./ServicesTabsSection.tsx";
import ImageBackgroundSection from "./ImageBackgroundSection.tsx";
import {Section} from "../../components/Section.tsx";
import {ResourcesSection} from "./ResourcesSection.tsx";
import {getAssetUrl} from "../../lib/utils.ts";

function Home() {
    return (
        <div className="z-100 min-h-screen w-full p-[6px] flex flex-col relative">
            <section
                className="bg-secondary rounded-sm  min-h-screen text-surface flex flex-col relative overflow-hidden justify-between flex-1">
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

                <div className="px-6 py-12 relative w-full h-full mt-auto z-10">
                    <div className="flex flex-col h-full w-full md:flex-row gap-6 justify-between items-end">
                        <div
                            className="flex flex-col p-6 backdrop-blur-[18px] opacity-[1] bg-surface/50 gap-9 rounded-sm max-w-[571px] mx-auto md:mx-0">
                            <div className="flex flex-col justify-start gap-6">
                                <span
                                    className="text-surface">[Safeguarding Organizations, People, and the Environment]</span>
                                <h3 className="text-surface text-2xl sm:text-3xl md:text-4xl font-semibold">
                                    Nigeria's Leading Material Recovery and E-Waste Management Company
                                </h3>
                                <p className="text-lg sm:text-[20px] leading-[28px] text-surface">
                                    With our eco-friendly certifications and expert team, we ensure clients comply with
                                    varying federal and state e-waste-related laws and regulations across all
                                    industries.
                                </p>
                            </div>

                            <Button asChild variant="primary"
                                    className="uppercase h-14 flex items-center text-sm justify-center font-normal scale-100 hover:scale-[.95]">
                                <Link to="/contact-us">Get Started</Link>
                            </Button>
                        </div>

                        <Link to="/services"
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
                                <p className="uppercase text-foreground text-sm font-badges">Our Services</p>
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
                <div
                    className="text-center flex flex-col items-center justify-start pb-16 gap-16 w-full overflow-hidden">
                    <div className="font-badges">Certified E-Waste Recycler Serving Organizations Across Nigeria</div>
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
                                <div className="font-badges">[Optimize Operations with Real-time Data.]</div>
                                <div className="text-[51px] leading-[58.65px] -tracking-[0.51]">
                                    ITAD & E-WASTE MANAGEMENT
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
                                {/* <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/68353460930016f8c1865842_marquee-logo-03.svg"
                                    alt=""/>*/}
                                <span className="uppercase test-xs">W3-eco-friendly</span>
                                <div className="leading-[22.4px]">“W3Tech™ Portal
                                    Access real-time transparency into your e-waste management. Our online downstream
                                    recycling chain and IT asset disposition portal provides complete visibility and
                                    tracking of material through every stage of processing”
                                </div>
                                <div className="flex items-end justify-start gap-3">
                                    <Avatar className="rounded-full size-[71px]">
                                        <AvatarImage
                                            src={getAssetUrl("/img/logos/logo.png")}
                                            alt="w3-eco-friendly logo"
                                        />
                                        <AvatarFallback>W3</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-badges text-xs uppercase">Certified E-Waste Recycler</div>
                                        <div className="font-badges text-xs uppercase">Licensed by Lagos state</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="overflow-hidden relative flex py-9 h-auto items-center justify-center rounded-sm justify-self-stretch">
                            <div className="absolute w-full h-full overflow-hidden">
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={getAssetUrl('/img/data-center.jpg')}
                                    alt="data center"
                                    sizes="(max-width: 1440px) 100vw, 1440px"
                                />
                                <div className="absolute w-full h-full backdrop-blur-[18px] bg-surface/10"></div>
                            </div>
                            <div className="flex justify-start items-center flex-col relative gap-6 z-10">
                                <div className="flex gap-12">
                                    <div
                                        className="flex gap-3 relative rounded-sm overflow-hidden text-center flex-col max-w-[156px] px-[6px] pt-[6px] pb-3">
                                        <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                            <img
                                                src={getAssetUrl('/img/data-processed.jpg')}
                                                alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                                className="z-20 rounded-sm"/>
                                            <div className="text-xs uppercase font-badges text-white z-10">Data<br/>Processed
                                            </div>
                                        </div>
                                        <div
                                            className="absolute top-0 left-0 w-full h-full backdrop-blur-[18px] bg-surface/30"></div>
                                    </div>
                                    <div
                                        className="flex gap-3 relative rounded-sm overflow-hidden text-center flex-col max-w-[156px] px-[6px] pt-[6px] pb-3">
                                        <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                            <img
                                                src={getAssetUrl('/img/electronic-recycling.jpg')}
                                                alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                                className="z-20 rounded-sm"/>
                                            <div
                                                className="text-xs uppercase font-badges text-white z-10">Electronic<br/>Recycling
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
                                            src={getAssetUrl('/img/handling-waste.jpg')}
                                            alt="e-waste management handlling"/>
                                    </div>
                                    <div className="font-badges text-xs uppercase">handling waste</div>
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
                                <div className="font-badges text-xs uppercase">[DATA SECURITY & COMPLIANCE]</div>
                                <div className="text-[51px] leading-[58.65px] -tracking-[0.51]">
                                    Delivering Secure Data Destruction & Asset Recovery.
                                </div>
                            </div>
                            <div>
                                <div className="border-t border-slate-300">
                                    <div
                                        className="flex gap-6 border-b border-dotted border-slate-500 items-center justify-start py-6">
                                        <div
                                            className="size-[60px] shrink-0 flex justify-center items-center bg-foreground text-surface rounded-sm">
                                            <Lock/>
                                        </div>
                                        <div className="max-w-[425px]">
                                            99% Data Destruction
                                            Guaranteed destruction on virtually any data bearing device with full chain
                                            of custody documentation.
                                        </div>
                                    </div>
                                    <div
                                        className="flex gap-6 border-b border-dotted border-slate-500 items-center justify-start py-6">
                                        <div
                                            className="size-[60px] shrink-0 flex justify-center items-center bg-foreground text-surface rounded-sm">
                                            <ChartLine/>
                                        </div>
                                        <div className="max-w-[425px]">
                                            Maximum Asset Value
                                            Maximize recovery value from retired IT assets through expert remarketing
                                            and responsible recycling.
                                        </div>
                                    </div>
                                    <div
                                        className="flex gap-6 border-b border-dotted border-slate-500 items-center justify-start py-6">
                                        <div
                                            className="size-[60px] shrink-0 flex justify-center items-center bg-foreground text-surface rounded-sm">
                                            <Check/>
                                        </div>
                                        <div className="max-w-[425px]">
                                            Full Regulatory Compliance
                                            Meet all federal and state e-waste regulations while protecting your
                                            organization from fines and reputational risk.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-[623px] min-h-full overflow-hidden relative rounded-sm">
                            <img
                                className="rounded-sm h-full w-full object-cover"
                                src={getAssetUrl('/img/data-destruction.jpg')}
                                alt="data destruction"
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
                            <div
                                className="text-3xl md:text-[40px] leading-[48px] tracking-[-0.4px] text-foreground">
                                Partner
                                with
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
                                        <img src={card.icon} className="size-9" alt=""/>
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
                badge="[OUR MISSION]"
                title="At W3 Eco-Friendly Ltd, our mission is to revolutionize e-waste management in Nigeria by promoting sustainable practices, fostering a circular economy, and protecting the environment through innovative recycling and material recovery solutions."
                linkText="More about us"
                linkHref="/about"
                backgroundImage="img/sustainability.jpg"
            />

            <Section>
                <ResourcesSection/>
            </Section>
        </div>
    );
}

export default Home;