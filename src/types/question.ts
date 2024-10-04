import { Choice } from "./choice";

export interface Question {
    question: string;
    choices: Choice [];
}