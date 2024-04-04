"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ActionAreaCard from "./Card";


const EventsCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-37%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className=" w-[300px] overflow-hidden h-[500px]" >
        <ActionAreaCard key={card.id} title={card.title} image={card.url}  />
    </div>
  );
};

export default EventsCarousel;

const cards = [
  {
    url: "/hero/card1.webp",
    title: "Name will",
    id: 1,
  },
  {
    url: "/hero/card2.webp",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/hero/card3.webp",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/hero/card4.webp",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/hero/card6.webp",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/hero/card7.webp",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/hero/card1.webp",
    title: "Title 7",
    id: 7,
  },
];