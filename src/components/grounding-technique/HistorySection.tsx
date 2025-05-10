
import React from "react";

interface HistorySectionProps {
  historyText: string;
}

/**
 * Секция с историей и происхождением техники
 */
const HistorySection: React.FC<HistorySectionProps> = ({ historyText }) => {
  return (
    <div className="bg-[#E5DEFF] rounded-xl p-8 mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Происхождение техники</h2>
      <p className="text-gray-700">{historyText}</p>
    </div>
  );
};

export default HistorySection;
