import {ArrowRight} from "lucide-react";
import {Section} from "../../components/Section.tsx";
import Marquee from "react-fast-marquee";

const About = () => {
    return (
        <>
            <section className="py-[72px] p-[6px] aspect-[2] h-screen w-screen rounded-sm bg-secondary text-white flex items-end justify-center relative overflow-clip">
                <div className="relative z-50 mx-auto max-w-[1366px] px-6 w-full min-h-full">
                    <div className="text-center flex flex-col items-center justify-start gap-6 mx-auto max-w-[928px]">
                        <div className="font-badges text-xs uppercase text-white">[about us]</div>
                        <h2 className="text-[32px] md:text-[48px]">We Build Cleaner Solutions for Resilient Economic Environments.</h2>

                        <a href="#about-us" className="flex w-full gap-2 justify-center items-center cursor-pointer">
                            <div
                                className="inline-flex items-center text-foreground justify-center rounded-full bg-primary p-3 group-hover:bg-primary/90 transition-colors">
                                <ArrowRight className="h-6 w-6"/>
                            </div>
                            <div className="font-badges uppercase text-sm text-white">learn about us</div>
                        </a>
                    </div>
                </div>
                <div
                    className="background opacity-70 z-10 absolute inset-0 min-h-screen min-w-screen overflow-hidden pointer-events-none">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683e44afaaa0f6c63ab0d1df_856142-hd_1920_1080_30fps-poster-00001.jpg"
                        className="absolute inset-0 w-full min-h-full m-auto object-cover bg-center bg-cover z-10"
                        style={{
                            backgroundImage: `url("https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683e44afaaa0f6c63ab0d1df_856142-hd_1920_1080_30fps-poster-00001.jpg")`
                        }}
                    >
                        <source
                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683e44afaaa0f6c63ab0d1df_856142-hd_1920_1080_30fps-transcode.mp4"
                            type="video/mp4"/>
                        <source
                            src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683e44afaaa0f6c63ab0d1df_856142-hd_1920_1080_30fps-transcode.webm"
                            type="video/webm"/>
                    </video>
                </div>
                <div
                    className="absolute bottom-0 w-full h-[60%] z-20 backdrop-blur-[12px] [-webkit-mask-image:linear-gradient(to_top,#000_50%,transparent_100%)] [mask-image:linear-gradient(to_top,#000_50%,transparent_100%)]"/>
            </section>
            <section id="about-us" className="py-[72px] will-change-transform [transform-style:preserve-3d]">
                <div className="relative z-[3] max-w-[1366px] w-full mx-auto px-6">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] border-t border-dotted border-border/50 pt-9">
                        {/* Title */}
                        <div className="flex flex-col gap-[18px]">
                            <div className="font-badges text-[13px] leading-[18.2px] uppercase font-medium">
                                [our purpose]
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-[51px] leading-tight lg:leading-[58.65px] -tracking-[0.51px] font-normal">
                                How Lifecycle Helps.
                            </h2>
                        </div>

                        {/* Lead Text */}
                        <div className="text-xl leading-7">
                            We design the infrastructure, systems, and strategies that accelerate the transition to
                            clean energy—without disrupting operations. From grid-edge logistics hubs to on-site
                            generation and storage, our consulting work helps organizations integrate renewables
                            intelligently and at scale.
                            <br/><br/>
                            Whether you're deploying solar at distribution centers or incorporating wind into regional
                            supply chains, we bring the technical depth and sector insight to turn ambition into impact.
                        </div>
                    </div>
                </div>
            </section>
            <Section>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[72px] place-items-center">
                    <div className="w-full aspect-square rounded-sm flex justify-center items-center relative overflow-hidden">
                        {/* Background Video */}
                        <div
                            className="absolute w-[110%] h-[120%] top-[-10%] left-[-5%] will-change-transform [transform-style:preserve-3d]"
                            style={{
                                transform: "translate3d(0px, 9.309%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)"
                            }}
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                poster="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683f881261743bfd14abf635_6522668-hd_1920_1080_30fps-poster-00001.jpg"
                            >
                                <source
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683f881261743bfd14abf635_6522668-hd_1920_1080_30fps-transcode.mp4"
                                    type="video/mp4"
                                />
                                <source
                                    src="https://cdn.prod.website-files.com/682d1ea72a8dbd92c55d9018%2F683f881261743bfd14abf635_6522668-hd_1920_1080_30fps-transcode.webm"
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

                    <div className="flex flex-col gap-[24px] md:gap-[36px] items-start w-full">
                        <div className="title">
                            <div className="font-badges text-xs uppercase">[our purpose]</div>
                            <h2>Delivering Low-Emissions Infrastructure.</h2>
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
};

export default About;