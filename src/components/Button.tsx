import { ButtonHTMLAttributes } from 'react'
import { ButtonPage, ButtonSort } from '../styles/ButtonStyle'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  sort?: boolean;
  next?: boolean;
}

export function Button({ ...props }: ButtonProps) {
  return (
    props.sort ? <ButtonSort {...props} /> : <ButtonPage next {...props} />
  )
}