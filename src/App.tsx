import React from 'react'
import style from './App.module.scss'
import { NavLink, Route, Routes } from 'react-router-dom'
import { DashboardPage } from './pages/DashboardPage'
import { ListPage } from './pages/ListPage'

export const App = () => {
	return (
		<div className={style.app}>
			<header className={style.header}>
				<NavLink to="/">Frontend Angular Test</NavLink>
			</header>
			<div className={style.content}>
				<section className={style.sidebar}>
					<NavLink to="/" className={({ isActive }) => (isActive ? style.active : '')}>
						Dashboard
					</NavLink>
					<NavLink to="/list" className={({ isActive }) => (isActive ? style.active : '')}>
						List
					</NavLink>
				</section>
				<main className={style.main}>
					<Routes>
						<Route path="/" element={<DashboardPage />} />
						<Route path="/list" element={<ListPage />} />
					</Routes>
				</main>
			</div>
		</div>
	)
}
