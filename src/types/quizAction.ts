import { Choice } from "./choice";

export type QuizAction = 
    | { type: "NEXT_STEP" }
    | { type: "SET_CHOICE"; choice: Choice }
    | { type: "RESET_CHOICE" }
    | { type: "COMPLETE_QUIZ" };