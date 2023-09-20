export type NumberType = {
	error?: string | undefined
	label?: string | undefined
	value: number | null
	onChange: (v: number | null) => void
	placeholder?: string | undefined
	disabled?: boolean | undefined
	loading?: boolean | undefined
	step?: number | undefined
	leftSpace?: any
	rightSpace?: any
}
