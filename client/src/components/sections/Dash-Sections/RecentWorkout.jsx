import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";



export function RecentWorkouts() {
  return (
    <div className="divide-y divide-[#1E1E1E]">
      {workouts.map((workout) => (
        <div key={workout.id} className="p-4 hover:bg-[#1E1E1E]/50">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E1E1E]">
                <CalendarIcon className="h-5 w-5 text-[#FFD100]" />
              </div>
              <div>
                <div className="font-medium text-[#F4F4F4]">{workout.type}</div>
                <div className="text-sm text-[#F4F4F4]/70">
                  {new Date(workout.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-[#F4F4F4]">
              Details
            </Button>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {workout.exercises.map((exercise, index) => (
              <div key={index} className="rounded-md bg-[#1E1E1E] p-2 shadow-sm border border-[#333533]">
                <div className="font-medium text-[#F4F4F4]">{exercise.name}</div>
                <div className="mt-1 flex items-center justify-between text-sm">
                  <span className="text-[#F4F4F4]/70">
                    {exercise.sets} × {exercise.reps}
                  </span>
                  <span className="font-semibold text-[#FFD100]">{exercise.weight}</span>
                </div>
              </div>
            ))}
          </div>

          {workout.notes && (
            <div className="mt-3 rounded-md bg-[#1E1E1E] p-3 text-sm">
              <div className="font-medium text-[#FFD100]">Notes:</div>
              <div className="text-[#F4F4F4]/80">{workout.notes}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


const workouts = [
    {
      id: 1,
      date: "2023-06-15",
      type: "Chest and Shoulders",
      exercises: [
        { name: "Bench Press", weight: "85kg", sets: 4, reps: 8 },
        { name: "Incline Dumbbell Press", weight: "30kg", sets: 3, reps: 10 },
        { name: "Cable Flyes", weight: "15kg", sets: 3, reps: 12 },
      ],
      notes: "Felt strong today, added weight to the bench press.",
    },
    {
      id: 2,
      date: "2023-06-12",
      type: "Legs",
      exercises: [
        { name: "Squat", weight: "120kg", sets: 5, reps: 5 },
        { name: "Romanian Deadlift", weight: "100kg", sets: 3, reps: 8 },
        { name: "Leg Press", weight: "200kg", sets: 3, reps: 10 },
      ],
      notes: "Challenging leg workout, focused on technique.",
    },
    {
      id: 3,
      date: "2023-06-10",
      type: "Back",
      exercises: [
        { name: "Deadlift", weight: "140kg", sets: 3, reps: 5 },
        { name: "Pull-ups", weight: "BW", sets: 4, reps: 8 },
        { name: "Barbell Rows", weight: "80kg", sets: 3, reps: 8 },
      ],
      notes: "New personal best in deadlift!",
    },
  ];
