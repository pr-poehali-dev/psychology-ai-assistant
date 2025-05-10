
import React from 'react';
import ExpressHelpCard from './ExpressHelpCard';
import { expressHelp } from '@/data/techniques';

const ExpressHelpSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Экспресс-помощь</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expressHelp.map((item, index) => (
            <ExpressHelpCard
              key={index}
              title={item.title}
              description={item.description}
              content={item.content}
              icon={item.icon}
              action={item.action}
              actionIcon={item.actionIcon}
              bgColor={item.bgColor}
              iconColor={item.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpressHelpSection;
