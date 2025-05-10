import React from "react";
import ExpressHelpCard from "./ExpressHelpCard";
import { expressHelp } from "@/data/techniques";
import { Link } from "react-router-dom";

const ExpressHelpSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 z-0">
        <img
          src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          alt="Декоративный элемент"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Экспресс-помощь
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Быстрые техники, которые помогут вам справиться с тревогой,
              стрессом и напряжением прямо сейчас
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
            alt="Спокойствие"
            className="rounded-lg shadow-lg mt-6 md:mt-0 max-w-[200px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expressHelp.map((item, index) => (
            <Link key={index} to={item.link || "#"} className="block">
              <ExpressHelpCard
                title={item.title}
                description={item.description}
                content={item.content}
                icon={item.icon}
                action={item.action}
                actionIcon={item.actionIcon}
                bgColor={item.bgColor}
                iconColor={item.iconColor}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpressHelpSection;
