import React, { useState } from 'react'
import stylePage from '../Page.module.scss'
import style from './Dashboard.module.scss'
import { Table } from '../components/Table'
import { YearsByCountType } from '../types/YearsByCount.type'
import { ProducersIntervalBetweenWinsType } from '../types/ProducersIntervalBetweenWins.type'
import { StudiosByWinnersType } from '../types/StudiosByWinners.type'
import { Number } from '../components/input/Number'
import { Button } from '../components/button/Button'
import { WinnersByYearType } from '../types/WinnersByYear.type'

export const DashboardPage = () => {
	const [data, setData] = useState<{
		searchByYear: number | null
	}>({
		searchByYear: null,
	})

	return (
		<div className={stylePage.page}>
			<div className={style.dashboard}>
				<div className={style.column1}>
					<section>
						<h2>List years with multiple winners</h2>
						<Table<YearsByCountType>
							header={{
								year: {
									label: 'Year',
									width: '50%',
								},
								count: {
									label: 'Win Count',
									width: '50%',
								},
							}}
							value={[
								{
									year: 2023,
									count: 1,
								},
								{
									year: 2022,
									count: 3,
								},
							]}
						/>
					</section>
					<section className={style.intervalBetweenWins}>
						<h2>Producers with longest and shortest interval between wins</h2>
						<div>
							<h3>Maximum</h3>
							<Table<ProducersIntervalBetweenWinsType>
								header={{
									producer: {
										label: 'Producer',
									},
									interval: {
										label: 'Interval',
									},
									previousYear: {
										label: 'Previous Year',
									},
									followingYear: {
										label: 'Following Year',
									},
								}}
								value={[]}
							/>
						</div>
						<div>
							<h3>Minimum</h3>
							<Table<ProducersIntervalBetweenWinsType>
								header={{
									producer: {
										label: 'Producer',
									},
									interval: {
										label: 'Interval',
									},
									previousYear: {
										label: 'Previous Year',
									},
									followingYear: {
										label: 'Following Year',
									},
								}}
								value={[]}
							/>
						</div>
					</section>
				</div>
				<div className={style.column2}>
					<section>
						<h2>Top 3 studios with winners</h2>
						<Table<StudiosByWinnersType>
							header={{
								studio: {
									label: 'Studio',
									width: '50%',
								},
								count: {
									label: 'Win Count',
									width: '50%',
								},
							}}
							value={[
								{
									studio: 'Columbia Pictures',
									count: 1,
								},
								{
									studio: 'Pixar',
									count: 3,
								},
								{
									studio: 'Pixar',
									count: 3,
								},
							]}
						/>
					</section>
					<section>
						<h2>List movie winners by year</h2>
						<Number
							label="Search by year"
							value={data.searchByYear}
							onChange={(value) => {
								setData((x) => {
									x.searchByYear = value
									return { ...x }
								})
							}}
							placeholder="Search by year"
							rightSpace={<Button variation="ghost" leftIcon="search" />}
						/>
						<Table<WinnersByYearType>
							header={{
								id: {
									label: 'Id',
								},
								year: {
									label: 'Year',
								},
								title: {
									label: 'Title',
								},
							}}
							value={[]}
						/>
					</section>
				</div>
			</div>
		</div>
	)
}
