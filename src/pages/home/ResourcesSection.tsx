import {cn} from "../../lib/utils.ts";
import {ResourceCard} from "../../components/ResourceCard.tsx";
import {CARDS_DATA} from "../../constants/cards.ts";


export function ResourcesSection ({
badge = "[more information]",
title = "Resources & Information",
description = "Our services and technology platforms contribute to improving data security, environmental protection, and supply chain transparency throughout the e-waste recycling process.",
cards = CARDS_DATA,
columns = 3
}: ResourcesSectionProps) {
    const gridCols = columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";

    return (
        <div className="flex flex-col gap-24">
            {/* Horizontal Title */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                {/* Title */}
                <div className="flex flex-col gap-[18px]">
                    <div className="font-badges text-[13px] leading-[18.2px] uppercase font-medium">
                        {badge}
                    </div>
                    <h2 className="text-[51px] leading-[58.65px] -tracking-[0.51px] font-normal">
                        {title}
                    </h2>
                </div>

                {/* Horizontal Subheading */}
                <p className="text-xl leading-7 lg:max-w-lg">
                    {description}
                </p>
            </div>

            {/* Card Grid */}
            <div className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-6 auto-cols-fr",
                gridCols
            )}>
                {cards.map((card) => (
                    <ResourceCard key={card.id} {...card} />
                ))}
            </div>
        </div>
    );
}
