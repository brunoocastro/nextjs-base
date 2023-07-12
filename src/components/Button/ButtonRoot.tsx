import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function ButtonRoot({ children, ...rest }: ButtonRootProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'flex gap-2 rounded border-2 px-4 py-3',
        rest.className,
      )}
    >
      {children}
    </button>
  )
}
