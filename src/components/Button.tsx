import { ButtonHTMLAttributes } from 'react'
import { ButtonPage } from '../styles/ButtonStyle'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  next?: boolean
}

export function Button({ ...props }: ButtonProps) {
  return (
    <ButtonPage next {...props} />
  )
}