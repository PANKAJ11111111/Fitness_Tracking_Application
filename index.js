import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Write code to update the progress and emit a 'goalReached' event when the goal is reached
    this.progress += exercise.caloriesBurned;

    // Check if the goal is reached
    if (this.progress >= this.goal) {
      // Emit the 'goalReached' event
      this.emit("goalReached");

      // Reset progress
      this.progress = 0;
    }
  }
  }


const Solution = () => {
  // define  listener that sends a congratulatory message to the user upon reaching their fitness goal
  const tracker = new FitnessTracker();

  // Define a listener that sends a congratulatory message to the user
  tracker.on("goalReached", () => {
    console.log("Congratulations! You have reached your fitness goal");
  });

  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
