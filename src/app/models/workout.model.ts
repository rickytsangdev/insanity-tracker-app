export enum WorkoutType {
    CardioChallenge = 'Cardio Challenge', 
    TabataPower = 'Tabata Power', 
    SweatIntervals = 'Sweat Intervals', 
    FridayFight1 = "Friday Fight Round 1 ", 
    Pulse = 'Pulse', 
}



export interface Workout {
    id?: string;
    date: string;
    dayOfWeek: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday'| 'Friday' | 'Saturday' ; 
    type?: WorkoutType;     
    maxOutAt: number; 
    notes: string; 
    completed : boolean; 
  }
  