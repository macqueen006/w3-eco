import {Section} from "../components/Section.tsx";
import Marquee from "react-fast-marquee";
import {InfoCardGrid} from "../components/InfoCard.tsx";

const Services = () => {
    return (
        <>
            <Section>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[72px] auto-cols-fr place-items-center">
                    {/* Main content section */}
                    <div
                        className="sm:col-start-2 sm:col-end-3 sm:row-start-1 row-end-2 justify-self-stretch opacity-100">
                        <div className="flex flex-col gap-16 justify-between h-full pt-1.5 pb-1.5">
                            <div className="title">
                                <div className="badge-text">[Lifecycle solutions]</div>
                                <h1 className="text-4xl lg:5xl">Connect to Data.<br/>Prevent Disruption.</h1>
                            </div>

                            <div className="flex flex-col gap-9 justify-start items-start">
                                <h2 className="text-2xl lg: 3xl">Replace reactive planning with data-led optimization to
                                    move resources where they're needed—fast.</h2>

                                <div
                                    className="flex flex-col sm:flex-row gap-12 border-t border-dotted border-background justify-start items-start sm:items-center self-stretch max-w-full pt-6 overflow-hidden">
                                    <div className="badge-text logo-addendum-title shrink-0">Trusted by<br/>100+ global
                                        companies
                                    </div>

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
                            </div>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div
                        className="w-full aspect-square rounded-sm flex justify-center items-center relative overflow-hidden">
                        {/* Background Video */}
                        <div
                            className="absolute w-[110%] h-[120%] top-[-10%] left-[-5%]">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                poster="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F6836587d55725b2a9f834bc7_5200378-hd_1920_1080_30fps-poster-00001.jpg"
                            >
                                <source
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F6836587d55725b2a9f834bc7_5200378-hd_1920_1080_30fps-transcode.mp4"
                                    type="video/mp4"
                                />
                                <source
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F6836587d55725b2a9f834bc7_5200378-hd_1920_1080_30fps-transcode.webm"
                                    type="video/webm"
                                />
                            </video>
                        </div>

                        {/* Play Button Overlay */}
                        <a
                            href="https://www.youtube.com/watch?v=u7zm19YgQBA&t=141s"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-6 flex items-center justify-center gap-3 bg-surface/10 backdrop-blur-[20px] text-foreground rounded-full px-6 py-3 transition-transform hover:scale-105"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc158e5fa46ffcccc497d_icon-interface-play-video.svg"
                                loading="lazy"
                                alt="play"
                                className="w-6 h-6"
                            />
                            <span className="font-badges text-xs uppercase text-white">play Video 3:14</span>
                        </a>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="flex flex-col gap-[72px]">
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
                        <div className="title">
                            <div className="badge-text">[our process]</div>
                            <div className="text-4xl sm:text-5xl">Transforming Fulfillment.</div>
                        </div>
                        <div className="text-xl">Whether it’s decarbonizing freight, modernizing
                            infrastructure, or transforming supply chains, we bring the strategy and foresight needed to
                            scale-up across entire sectors.
                        </div>
                    </div>
                    <div
                        className="rounded-large bg-surface flex justify-center items-center p-[18px_48px] md:p-[72px_48px]">
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

                            <div
                                className="flex flex-col-reverse md:flex-row-reverse px-[48px] md:px-0 justify-start w-full items-center self-stretch">
                                <div
                                    className="border-l border-r md:border-r-[0px]  md:border-b md:my-[48px] w-full md:w-6 h-6 md:h-auto  border-t border-dotted border-foreground rounded-sm self-stretch"></div>
                                <div
                                    className="border-l md:border-l-[0px] md:border-t border-dotted border-foreground w-px h-6 md:h-px md:w-6"></div>
                            </div>

                            <div className="flex flex-none md:flex-col gap-12">
                                <div
                                    className="flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                    <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                        <img
                                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478584218f305141cad_landscape-08.webp"
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
                                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc4787083792398c6daf4_landscape-03.webp"
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
                                className="flex flex-none gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                <div
                                    className="flex gap-3 relative bg-primary rounded-sm overflow-hidden text-center flex-col max-w-[108px] sm:max-w-[156px] px-[6px] pt-[6px] pb-3">
                                    <div className="relative rounded-sm overflow-hidden flex flex-col gap-3">
                                        <img
                                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478438e97278eb7b5f2_landscape-07.webp"
                                            alt="" sizes="(max-width: 1440px) 100vw, 1440px"
                                            className="rounded-sm h-24 w-24 md:w-36 md:h-36"
                                        />
                                        <div className="badge-text">optimized<br/>energy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="flex flex-col gap-24">
                    <div className="max-w-[928px] mx-auto text-center gap-6 justify-start">
                        <h3>
                            Partner with Lifecycle to solve your most complex operational challenges.
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-cols-fr">
                        {/* Card 1 */}
                        <div
                            className="flex flex-col gap-6 bg-ui-light-2 text-center justify-start items-center pt-9 pb-12 px-5 bg-surface rounded-sm opacity-100 transform-none">
                            <div
                                className="boxed-icon rounded bg-foreground flex-none flex justify-center items-center w-15 h-15">
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03e03f914d3841bff9b_icon-rfid-signal-light.svg"
                                    alt=""
                                    className="small-boxed-icon max-h-9"
                                />
                            </div>
                            <div className="icon-card-content flex flex-col gap-3">
                                <div className="font-semibold text-xl leading-[28px]">Optimized Freight</div>
                                <div className="text-base leading-[22.4px]">Deploying solar solutions to cut emissions,
                                    reduce grid dependence, and power freight.
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div
                            className="flex flex-col gap-6 bg-ui-light-2 text-center justify-start items-center pt-9 pb-12 px-5 bg-surface rounded-sm opacity-100 transform-none">
                            <div
                                className="boxed-icon rounded bg-foreground flex-none flex justify-center items-center w-15 h-15">
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03ed896731dd0bad49c_icon-wind-turbine-light.svg"
                                    alt=""
                                    className="small-boxed-icon max-h-9"
                                />
                            </div>
                            <div className="icon-card-content flex flex-col gap-3">
                                <div className="font-semibold text-xl leading-[28px]">Wind Energy</div>
                                <div className="text-base leading-[22.4px]">Advising on-site and off-site wind
                                    integration to help logistics operations transition to Zero Emissions.
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="flex flex-col gap-6 bg-ui-light-2 text-center justify-start items-center pt-9 pb-12 px-5 bg-surface rounded-sm opacity-100 transform-none">
                            <div
                                className="boxed-icon rounded bg-foreground flex-none flex justify-center items-center w-15 h-15">
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03e24b880d1c5c9df1c_icon-module-light.svg"
                                    alt=""
                                    className="small-boxed-icon max-h-9"
                                />
                            </div>
                            <div className="icon-card-content flex flex-col gap-3">
                                <div className="font-semibold text-xl leading-[28px]">Logistics Intelligence</div>
                                <div className="text-base leading-[22.4px]">Harnessing sensor data and analytics to
                                    optimize flow and predict disruptions across multi-modal networks.
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div
                            className="flex flex-col gap-6 bg-ui-light-2 text-center justify-start items-center pt-9 pb-12 px-5 bg-surface rounded-sm opacity-100 transform-none">
                            <div
                                className="boxed-icon rounded bg-foreground flex-none flex justify-center items-center w-15 h-15">
                                <img
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc03ef9ba6fa7dc974609_icon-gps-antenna-light.svg"
                                    alt=""
                                    className="small-boxed-icon max-h-9"
                                />
                            </div>
                            <div className="icon-card-content flex flex-col gap-3">
                                <div className="font-semibold text-xl leading-[28px]">Always On</div>
                                <div className="text-base leading-[22.4px]">Ensuring uptime with smart monitoring,
                                    remote diagnostics, and connectivity strategies.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex flex-col gap-24">
                    <div className="mt-9">
                        <div className="badge-text">[our purpose]</div>
                        <div className="text-5xl md:text-6xl">Optimize Pipelines.<br/>Eliminate Guesswork.</div>
                    </div>

                    <InfoCardGrid
                        cards={[
                            {
                                id: "custom-1",
                                image: "https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478bbb48d01ea8970c4_landscape-13.webp",
                                title: "Custom Solution 1",
                                description: "Your custom description here",
                                features: [
                                    "Feature 1",
                                    "Feature 2",
                                    "Feature 3"
                                ]
                            },
                            {
                                id: "custom-2",
                                image: "https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018/682fc478e5fa46ffccce4773_landscape-04.webp",
                                title: "Custom Solution 2",
                                description: "Another custom description",
                                features: [
                                    "Benefit 1",
                                    "Benefit 2",
                                    "Benefit 3"
                                ]
                            }
                        ]}
                    />
                </div>
            </Section>
        </>
    );
};

export default Services;