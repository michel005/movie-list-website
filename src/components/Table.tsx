import React, { useState } from 'react'
import { TableType } from './Table.type'
import style from './Table.module.scss'
import { Pagination } from './Pagination'

export const Table = <T,>({ header, value, footer, pagination, onPageChange }: TableType<T>) => {
	const [currentPage, setCurrentPage] = useState<number>(0)
	const pageSize = 10

	return (
		<div className={style.table}>
			<table>
				<thead>
					<tr>
						{Object.keys(header).map((field, fieldKey) => {
							return (
								<th
									key={fieldKey}
									data-alignment={header[field as keyof typeof header]?.alignment || 'center'}
									style={
										header[field as keyof typeof header]?.width
											? {
													width: header[field as keyof typeof header]?.width,
											  }
											: {}
									}
								>
									{header[field as keyof typeof header]?.label}
									{header[field as keyof typeof header]?.filter && (
										<div className={style.filter}>
											{header[field as keyof typeof header]?.filter}
										</div>
									)}
								</th>
							)
						})}
					</tr>
				</thead>
				<tbody>
					{value &&
						value.map((row, rowKey) => {
							return (
								<tr key={rowKey}>
									{Object.keys(header).map((field, fieldKey) => {
										return (
											<td
												key={fieldKey}
												data-alignment={header[field as keyof typeof header]?.alignment || 'left'}
											>
												{!header[field as keyof typeof header]?.valueModifier
													? row[field as keyof typeof header]
													: header[field as keyof typeof header]?.valueModifier?.(row, rowKey)}
											</td>
										)
									})}
								</tr>
							)
						})}
					{(!value || value.length === 0) && (
						<tr data-not-found={true}>
							<td colSpan={Object.keys(header).length}>No data found</td>
						</tr>
					)}
				</tbody>
				{footer && <tfoot>{footer}</tfoot>}
			</table>
			{pagination && (
				<div className={style.pagination}>
					{(value?.length || 0) > 0 && (
						<Pagination
							currentPage={currentPage}
							onChange={(value) => {
								setCurrentPage(value)
								onPageChange?.(value, pageSize)
							}}
							numberOfRows={value?.length || 0}
							pageSize={pageSize}
						/>
					)}
				</div>
			)}
		</div>
	)
}
