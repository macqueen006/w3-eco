import {cn} from "../lib/utils";
import {INFO_CARDS} from "../constants/cards.ts";

export function InfoCard({image, title, description, features, className}: InfoCardProps) {
    return (
        <div className={cn("flex flex-col gap-9", className)}>
            {/* Parallax Image Wrap */}
            {image && <div className="aspect-[3/2] rounded-sm w-full h-auto relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="absolute w-full max-w-none h-[130%] top-[-15%] object-cover will-change-transform [transform-style:preserve-3d]"
                    sizes="(max-width: 1440px) 100vw, 1440px"
                />
            </div>
            }

            {/* Info Card Content */}
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-[18px]">
                    <h3 className="text-3xl md:text-4xl font-normal">
                        {title}
                    </h3>
                    <p className="text-xl leading-7">
                        {description}
                    </p>
                </div>
            </div>

            {/* Features List */}
            <div className="flex flex-col">
                {features?.map((feature, index) => (
                    <div
                        key={index}
                        className="flex gap-3 border-t border-dotted border-foreground justify-start items-center py-[18px]"
                    >
                        <div className="w-[6px] h-[6px] rounded-full bg-foreground shrink-0"/>
                        <div className="text-base">{feature}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Main Grid Section
interface InfoCardGridProps {
    cards?: InfoCardData[];
    className?: string;
}

export function InfoCardGrid({cards = INFO_CARDS, className}: InfoCardGridProps) {
    return (
        <div className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-6 auto-cols-fr",
            className
        )}>
            {cards.map((card) => (
                <InfoCard key={card.id} {...card} />
            ))}
        </div>
    );
}