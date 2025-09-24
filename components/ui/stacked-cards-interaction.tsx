import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import React from "react";

const Card = ({
  className,
  image,
  children,
}: {
  className?: string;
  image?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-[350px] cursor-pointer h-[400px] overflow-hidden rounded-2xl border bg-[#111111] text-neutral-200 border-neutral-800 shadow-2xl shadow-black/50",
        className
      )}
    >
      {image && (
        <div className="relative h-72 rounded-xl overflow-hidden w-[calc(100%-1rem)] mx-2 mt-2">
          <img
            src={image}
            alt="card"
            className="object-cover w-full h-full"
          />
        </div>
      )}
      {children && (
        <div className="px-4 py-2 flex flex-col gap-y-1">{children}</div>
      )}
    </div>
  );
};

interface CardData {
  id: number | string;
  image: string;
  title: string;
  description: string;
}

const StackedCardsInteraction = ({
  cards,
  spreadDistance = 40,
  rotationAngle = 5,
}: {
  cards: CardData[];
  spreadDistance?: number;
  rotationAngle?: number;
}) => {
  // Limit to maximum of 3 cards
  const limitedCards = cards.slice(0, 3);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[350px] h-[400px]">
        {limitedCards.map((card, index) => {
          const isFirst = index === 0;

          let xOffset = 0;
          let rotation = 0;

          if (limitedCards.length > 1) {
            // First card stays in place
            // Second card goes left
            // Third card goes right
            if (index === 1) {
              xOffset = -spreadDistance;
              rotation = -rotationAngle;
            } else if (index === 2) {
              xOffset = spreadDistance;
              rotation = rotationAngle;
            }
          }

          return (
            <motion.div
              key={card.id}
              className={cn("absolute", isFirst ? "z-10" : "z-0")}
              initial={{ x: 0, rotate: 0 }}
              animate={{
                x: xOffset,
                rotate: rotation,
                zIndex: isFirst ? 10 : 0,
              }}
              whileHover={{
                scale: 1.05,
                zIndex: 20,
                y: isFirst ? -15 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                type: "spring",
              }}
              layout
            >
              <Card image={card.image}>
                <h2 className="font-bold text-lg text-neutral-100">{card.title}</h2>
                <p className="text-sm text-neutral-400">{card.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export { StackedCardsInteraction, Card };