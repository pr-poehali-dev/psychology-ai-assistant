import React from "react";
import TechniqueCard from "./TechniqueCard";
import { techniques } from "@/data/techniques";

const TechniquesSection = () => {
  return (
    <section
      id="techniques"
      className="py-16 bg-[#F1F0FB] relative overflow-hidden"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1517582082532-16a092d47074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
          alt="Фоновый узор"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Техники психологической разгрузки
          </h2>
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            alt="Медитация"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md mt-4 md:mt-0"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((technique, index) => (
            <TechniqueCard
              key={index}
              title={technique.title}
              description={technique.description}
              icon={technique.icon}
              link={technique.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechniquesSection;
