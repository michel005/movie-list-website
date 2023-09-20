import React, { useState } from 'react'
import stylePage from '../Page.module.scss'
import { Table } from '../components/Table'
import { Number } from '../components/input/Number'
import { Select } from '../components/input/Select'

export const ListPage = () => {
	const [filter, setFilter] = useState<{
		year: number | null
		winner: boolean | null
	}>({
		year: null,
		winner: null,
	})
	return (
		<div className={stylePage.page}>
			<section>
				<h2>List movies</h2>
				<Table<{}>
					header={{
						id: {
							label: 'ID',
							width: '25%',
						},
						year: {
							label: 'Year',
							filter: (
								<Number
									value={filter.year}
									onChange={(value) =>
										setFilter((x) => {
											x.year = value
											return { ...x }
										})
									}
								/>
							),
							width: '25%',
						},
						title: {
							label: 'Title',
							width: '25%',
						},
						winner: {
							label: 'Winner',
							filter: (
								<Select
									value={filter.winner}
									options={['All', 'Yes', 'No']}
									labelModifier={(row) => row}
									valueModifier={(row) => row}
									idModifier={(row) => row}
									onChange={(value) => {
										console.log(value)
										setFilter((x) => {
											x.winner = value
											return { ...x }
										})
									}}
								/>
							),
							width: '25%',
						},
					}}
					value={new Array(10).fill(null).map((_, index) => ({
						id: index,
					}))}
					pagination={true}
				/>
			</section>
		</div>
	)
}
