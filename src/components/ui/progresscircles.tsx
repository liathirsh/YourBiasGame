import { CheckIcon } from '@heroicons/react/20/solid'

interface Step {
    name: string
    href: string
    status: 'complete' | 'current' | 'upcoming' | 'incorrect'
  }  

const steps: Step[] = [
  { name: 'Step 1', href: '#', status: 'complete' },
  { name: 'Step 2', href: '#', status: 'incorrect' },
  { name: 'Step 3', href: '#', status: 'current' },
  { name: 'Step 4', href: '#', status: 'upcoming' },
  { name: 'Step 5', href: '#', status: 'upcoming' },
  { name: 'Step 6', href: '#', status: 'upcoming' },
  { name: 'Step 7', href: '#', status: 'upcoming' },
  { name: 'Step 8', href: '#', status: 'upcoming' },
]

function classNames(...classes: Array<string | false | null | undefined>):string {
  return classes.filter(Boolean).join(' ')
}

export default function ProgressCircles() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-8' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-indigo-600" />
                </div>
                <a
                  href="#"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
                >
                  <CheckIcon aria-hidden="true" className="h-5 w-5 text-white" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  aria-current="step"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                >
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : step.status === 'incorrect' ? (
                <>
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <a
                    href="#"
                    className="relative flex h-8 w-8 items-center justify-center rounded-full bg-red-600 hover:bg-red-800"
                  >
                    <span aria-hidden="true" className="text-white text-xl font-bold">X</span>
                    <span className="sr-only">{step.name}</span>
                  </a>
                </>
              ) : (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                >
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
