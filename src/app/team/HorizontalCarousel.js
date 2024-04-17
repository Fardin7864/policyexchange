"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

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
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
      ></div>
      <div className="absolute inset-0 z-10 grid place-items-end w-full">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
          <span className=" text-2xl">{card.name}</span> <br/>
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "/Team/ceo.jpg",
    name: "Dr. M. Masrur Reaz",
    title: "CEO",
    id: 1,
  },
  {
    url: "/Team/hassib.jpg",
    name: "Md. Hassib Hassan",
    title: "Analyst & Programme Coordinator",
    id: 2,
  },
  {
    url: "/Team/Pinaky.JPG",
    name:"Pinaky Shanakar (Rahul)",
    title: "Senior Analyst",
    id: 3,
  },
  {
    url: "/Team/Rahmina.jpeg",
    name: "Rahmina Ahmed",
    title: "Programme Analyst",
    id: 4,
  },
  {
    url: "/Team/Rodoshee.jpeg",
    name: "Rodoshee Tahsin",
    title: "Senior Associate and Project Coordinator",
    id: 5,
  },
  {
    url: "/Team/Sadia.jpeg",
    name: "Sadia Sultana",
    title: "Analyst & Programme Coordinator",
    id: 6,
  },
  {
    url: "/Team/Ziaur.jpg",
    name: "Ziaur Rahman",
    title: "Senior Policy Analyst",
    id: 7,
  },
];