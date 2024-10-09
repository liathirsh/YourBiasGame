import { CheckIcon } from '@heroicons/react/20/solid'
  
interface Step {
  name: string
  href: string
  status: 'complete' | 'current' | 'upcoming' | 'incorrect'
}  


function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

export default function ProgressCircles({ steps }: {steps: Step[] }) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-8' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-primary" />
                </div>
                <a
                  href="#"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary hover:bg-primary-hover"
                >
                  <CheckIcon aria-hidden="true" className="h-5 w-5 text-primary-foreground" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-neutral" />
                </div>
                <a
                  href="#"
                  aria-current="step"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-white"
                >
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border-2 border-primary" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : step.status === 'incorrect' ? (
                <>
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="h-0.5 w-full bg-neutral" />
                  </div>
                  <a
                    href="#"
                    className="relative flex h-8 w-8 items-center justify-center rounded-full bg-destructive hover:bg-destructive-hover"
                  >
                    <span aria-hidden="true" className="text-white text-xl font-bold">X</span>
                    <span className="sr-only">{step.name}</span>
                  </a>
                </>
              ) : (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-neutral" />
                </div>
                <a
                  href="#"
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral bg-white hover:border-neutral-hover"
                >
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-neutral"
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
