
export interface StepInterface {
    name: string;
    href: string;
    status: 'complete' | 'current' | 'upcoming' | 'incorrect';
  }

export const Steps = [
    { name: 'Step 1', href: '#', status: 'current' },
    { name: 'Step 2', href: '#', status: 'upcoming' },
    { name: 'Step 3', href: '#', status: 'upcoming' },
    { name: 'Step 4', href: '#', status: 'upcoming' },
    { name: 'Step 5', href: '#', status: 'upcoming' },
    { name: 'Step 6', href: '#', status: 'upcoming' },
    { name: 'Step 7', href: '#', status: 'upcoming' },
    { name: 'Step 8', href: '#', status: 'upcoming' },
  ]



