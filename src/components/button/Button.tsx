import React, { CSSProperties } from 'react'
import style from './Button.module.scss'
import { ButtonType } from './Button.type'

export const Button = ({ leftIcon, rightIcon, variation = 'primary', ...props }: ButtonType) => {
	return (
		<button
			{...props}
			className={`${style.button} ${props.className}`}
			data-left-icon={leftIcon}
			data-right-icon={rightIcon}
			data-variation={variation}
		>
			<span>{props.children}</span>
		</button>
	)
}
