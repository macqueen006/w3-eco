import {ArrowRight} from "lucide-react";

const About = () => {
    return (
        <>
            <section
                className="py-[72px] p-[6px] aspect-[2] rounded-sm bg-secondary text-white flex items-end justify-center relative overflow-clip">
                <div className="relative z-50 mx-auto max-w-[1366px] px-6 w-full">
                    <div className="text-center flex flex-col items-center justify-start gap-6 mx-auto max-w-[928px]">
                        <div className="font-badges text-xs uppercase text-white">[about us]</div>
                        <h2>We Build Cleaner Solutions for Resilient Economic Environments.</h2>

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
        </>
    );
};

export default About;