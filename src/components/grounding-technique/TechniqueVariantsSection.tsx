
import React from "react";
import { GroundingExercise } from "@/data/grounding-technique-data";
import ExerciseVariantCard from "./ExerciseVariantCard";

interface TechniqueVariantsSectionProps {
  exercises: GroundingExercise[];
  selectedExerciseId: string;
  onSelectExercise: (exerciseId: string) => void;
}

/**
 * Секция с вариантами техники заземления
 */
const TechniqueVariantsSection: React.FC<TechniqueVariantsSectionProps> = ({
  exercises,
  selectedExerciseId,
  onSelectExercise,
}) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Варианты техники</h2>
      <p className="text-lg text-gray-600 mb-8">
        Существуют разные варианты техники 5-4-3-2-1, которые можно применять в зависимости от 
        ситуации и ваших потребностей. Выберите вариант, который подходит вам в данный момент.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {exercises.map(exercise => (
          <ExerciseVariantCard 
            key={exercise.id}
            exercise={exercise}
            isActive={exercise.id === selectedExerciseId}
            onSelect={onSelectExercise}
          />
        ))}
      </div>
    </div>
  );
};

export default TechniqueVariantsSection;
