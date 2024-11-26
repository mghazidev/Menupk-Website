"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const cards = [
  {
    url: "/images/LP-6.png",
    title: "Efficient Menu Management",
    description:
      "Boost your customer satisfaction with our seamless online ordering solution. Customize menus with visually appealing graphics, enticing deals, and cohesive dining experience.",
    id: 1,
  },
  {
    url: "/images/LP-7.png",
    title: "Smart Locator and Contact Management",
    description:
      "Navigate effortlessly with our Smart Locator and Contact Management feature. Streamline connections and stay informed with automatic updates.",
    id: 2,
  },
  {
    url: "/images/LP-8.png",
    title: "Real-time Order Status and Tracking",
    description:
      "Build real-time connections with your customers by sharing live updates and order tracking from the restaurant's kitchen to the customer's doorstep.",
    id: 3,
  },
  {
    url: "/images/iPad-Pro-12.9-inch-Space-Gray-Mockup-1.png",
    title: "Food Inventory Management",
    description:
      "Features real-time data visualization for orders, inventory, customer interactions, and a control panel for management.",
    id: 4,
  },
  {
    url: "/images/_Mockups--6.png",
    title: "Convenient Delivery & Payment",
    description:
      "Hassle-free delivery to the chosen location with easy COD payment options for a seamless transaction.",
    id: 5,
  },
];

const ScrollSection = () => {
  return (
    <div>
      <div className="center-text">
        <div className="fade-in-move-on-scroll">
          <h1 className="heading-4">
            Navigate Our Seamless Online System with Ease
          </h1>
        </div>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center mx-auto overflow-hidden w-[100vw] lg:w-[95vw]">
        <motion.div style={{ x }} className="flex gap-16">
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
      className="item fade-in-move-on-scroll group relative h-screen w-[100vw]  overflow-hidden "
    >
      <div class="div-block-11">
        <h1 class="item1-heading h-[100px] md:h-[auto]">{card.title}</h1>
        <p class="paragraph-8  h-[120px] md:h-[auto]">{card.description}</p>
      </div>
      <img
        src={card.url}
        loading="lazy"
        alt="MenuPk digital menu"
        className="item-1-image"
      />
    </div>
    // <div
    //   key={card.id}
    //   className="group relative h-screen w-[100vw]  overflow-hidden bg-neutral-200"
    // >
    //   <div
    //     style={{
    //       backgroundImage: `url(${card.url})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //     className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
    //   ></div>
    //   <div className="absolute inset-0 z-10 grid place-content-center">
    //     <div className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg w-[100vw] max-w-[100%] mx-auto">
    //       <p className="text-center">{card.title}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ScrollSection;
