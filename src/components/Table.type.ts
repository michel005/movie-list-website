type KeysOfType<T, U> = {
	[K in keyof T]: T[K] extends U ? K : any
}

export type TableType<T> = {
	header: {
		[key in KeysOfType<T, any>[keyof T]]?: {
			alignment?: 'left' | 'center' | 'right'
			filter?: any
			label: string
			valueModifier?: (row: any, rowIndex: number) => any
			width?: string
		}
	}
	footer?: any
	value: T[]
	pagination?: boolean
	onPageChange?: (currentPage: number, pageSize: number) => void
}
