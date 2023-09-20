import { ButtonHTMLAttributes } from 'react'
import { GoogleIcons } from '../../types/GoogleIcons'

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
	leftIcon?: GoogleIcons
	rightIcon?: GoogleIcons
	variation?: 'primary' | 'secondary' | 'ghost' | 'sidebar'
}
