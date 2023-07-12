import { ElementType } from 'react'

interface ButtonProps {
  icon: ElementType
}

export function ButtonIcon({ icon: Icon }: ButtonProps) {
  return <Icon size={24}></Icon>
}
