
export interface StepInterface {
    name: string;
    href: string;
    status: 'complete' | 'current' | 'upcoming' | 'incorrect'
}