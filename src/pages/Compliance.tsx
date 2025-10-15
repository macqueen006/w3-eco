import {Section} from "../components/Section.tsx";
import Marquee from "react-fast-marquee";

function Compliance() {
    return (
        <>
            <Section className="pt-60 pb-36">
                <div className="flex flex-col gap-6">
                    {/* Horizontal Title */}
                    <div className="flex flex-col md:flex-row justify-between items-start lg:items-end gap-6">
                        {/* Title */}
                        <div className="flex flex-col gap-[18px]">
                            <div className="font-badges text-[13px] leading-[18.2px] uppercase font-medium">
                                [Lifecycle solutions]
                            </div>
                            <h1 className="text-3xl md:text-6xl lg:text-[60px] leading-tight font-normal">
                                Solve Bottlenecks.<br/>Unlock Growth.
                            </h1>
                        </div>

                        {/* Content */}
                        <div className="max-w-[452px] w-full">
                            <div className="text-xl leading-7">
                                Identify the friction points holding you back—and implement scalable solutions that
                                drive throughput and business expansion.
                            </div>

                        </div>
                    </div>

                    {/* Hero Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-3 auto-cols-fr">
                        {/* Square Image */}
                        <img
                            className="aspect-square rounded-md object-cover min-h-full"
                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478b3f8c853c905c0c0_landscape-15.webp"
                            alt=""
                            sizes="(max-width: 1440px) 100vw, 1440px"
                        />

                        {/* Hero Metric Box */}
                        <div
                            className="flex flex-col gap-6 rounded-md bg-foreground text-white justify-center items-start p-6 relative overflow-hidden self-stretch will-change-transform [transform-style:preserve-3d]"
                            style={{
                                opacity: 1,
                                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)"
                            }}
                        >
                            {/* Noise Background */}
                            <div
                                className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-[length:150px_150px] bg-center"
                                style={{
                                    backgroundImage: "url('https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/683505e4f52812f5f0b34529_Noise.png')"
                                }}
                            />

                            {/* Lines - Bottom */}
                            <div className="absolute bottom-0 left-0 right-0">
                                <div className="h-px bg-white/20"></div>
                                <div className="h-px bg-white/10 mt-1"></div>
                            </div>

                            {/* Lines - Top */}
                            <div className="absolute top-0 left-0 right-0">
                                <div className="h-px bg-white/20"></div>
                                <div className="h-px bg-white/10 mt-1"></div>
                            </div>

                            <div
                                className="font-badges text-[13px] leading-[18.2px] uppercase font-medium relative z-10">
                                Trusted by<br/>100+ global companies
                            </div>
                            <div className="text-6xl md:text-7xl font-bold relative z-10">50%</div>
                            <div className="text-xl leading-7 relative z-10">
                                Increase in top-line revenue in the first 12 months.
                            </div>
                            <img
                                src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/6837aeb16162caf82d3f81e3_logo-intertial-small.svg"
                                alt=""
                                className="relative z-10"
                            />
                        </div>

                        {/* Portrait Image */}
                        <img
                            className="aspect-[3/4] rounded-md object-cover min-h-full"
                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc4782224e0a5c3efa7f7_portrait-09.webp"
                            alt=""
                            sizes="(max-width: 1350px) 100vw, 1350px"
                        />
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px] place-items-center auto-cols-fr">
                    <div className="flex flex-col justify-start items-start gap-6">
                        <div className="badge-text">[Applied efficiency]</div>
                        <div className="text-5xl">Transforming Fulfillment.</div>
                        <div className="lead-text-wrapper">
                            <div className="text-lg">Whether it’s decarbonizing freight, modernizing
                                infrastructure, or transforming supply chains, we bring the strategy and foresight
                                needed to scale-up across entire sectors.
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <div className="flex flex-none md:flex-col gap-12">
                            <div
                                className="flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                    <img
                                        src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc4783249441e9db3f46a_landscape-02.webp"
                                        alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                        className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                    />
                                    <div className="badge-text">optimized<br/>energy</div>
                                </div>
                            </div>
                            <div
                                className="flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                    <img
                                        src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc479f6d7cf36b03f9d13_landscape-01.webp"
                                        alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                        className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                    />
                                    <div className="badge-text">optimized<br/>energy</div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex flex-col md:flex-row px-[48px] md:px-0 justify-start w-full items-center self-stretch">
                            <div
                                className="border-l md:border-l-[0px] md:border-t md:my-[48px] w-full md:w-6 h-6 md:h-auto border-r border-b border-dotted border-foreground rounded-sm self-stretch"></div>
                            <div
                                className="border-l md:border-l-[0px] md:border-t border-dotted border-foreground w-px h-6 md:h-px md:w-6"></div>
                        </div>

                        <div
                            className="flex flex-none flex-col gap-3 rounded-sm bg-primary text-center max-w-[108px] sm:max-w-[156px] p-[6px_6px_12px]">
                            <div
                                className="inline-flex justify-center items-center h-24 w-24 sm:w-36 md:h-36 rounded-sm bg-[#3b3b3333]">
                                <img alt=""
                                     className=""
                                     src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03ed96832163a6db842_icon-radar.svg"/>
                            </div>
                            <div className="font-badges text-xs uppercase">accelerated fulfillment</div>
                        </div>

                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px] place-items-center auto-cols-fr">

                    <div className="flex flex-col justify-between h-full py-1.5 gap-[72px] justify-self-stretch">

                        <div className="flex flex-col justify-start items-start gap-6">
                            <div className="badge-text">[our purpose]</div>
                            <div className="text-5xl">Architecting Solutions that Power Renewables.</div>
                            <div className="max-w-[571px]">
                                <div className="text-2xl">We design infrastructure, systems, and strategies that
                                    accelerate the transition to clean energy—without disrupting operations. From
                                    logistics hubs to on-site generation, we help integrate renewables intelligently and
                                    at scale.
                                </div>
                            </div>
                        </div>

                    </div>

                    <div
                        className="aspect-square rounded-sm flex justify-center items-center w-full relative overflow-hidden col-start-1 row-start-1">
                        <img
                            className="aspect-square rounded-sm w-[110%] max-w-none min-h-[130%]"
                            data-speed="0.8"
                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc4785fb432f845493f1c_portrait-06.webp"
                            alt="" sizes="(max-width: 1350px) 100vw, 1350px"/>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="flex flex-col relative">

                    <div className="aspect-[2.39] rounded-md w-full h-auto relative overflow-hidden">
                        <img
                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc4787083792398c6daf4_landscape-03.webp"
                            alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                            className="w-full max-w-none h-[130%] absolute top-[-15%]"/>
                    </div>

                    <div className="z-10 flex justify-center items-center gap-1.5 -mt-12 mx-12 relative">
                        <div
                            className="hidden sm:flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                            <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                <img alt=""
                                     sizes="(max-width: 1440px) 100vw, 1440px"
                                     className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                     src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc4783249441e9db3f46a_landscape-02.webp"/>
                                <div className="badge-text">optimized<br/>energy</div>
                            </div>
                        </div>

                        <div
                            className="hidden sm:flex flex-col text-center flex-1 py-1.5 border-b border-dotted border-[var(--_colors---ui--dark)]">
                            <div className="badge-text">Lifecycle Consulting</div>
                        </div>

                        <div
                            className="hidden sm:flex flex-none flex-col gap-3 rounded-sm bg-primary text-center max-w-[108px] sm:max-w-[156px] p-[6px_6px_12px]">
                            <div
                                className="inline-flex justify-center items-center h-24 w-24 sm:w-36 md:h-36 rounded-sm bg-[#3b3b3333]">
                                <img alt="" className=""
                                     src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03eace8ea74c45a75f7_icon-my-location.svg"/>
                            </div>
                            <div className="font-badges text-xs uppercase">accelerated fulfillment</div>
                        </div>

                    </div>

                </div>
            </Section>

            <Section>
                <div
                    className="text-center flex flex-col items-center justify-start pb-16 gap-16 w-full overflow-hidden">
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
        </>
    );
}

export default Compliance;