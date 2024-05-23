import React, { useEffect, useState } from 'react';
import Flag from './Flag';
import axios from 'axios';
import styles from "./AllFlag.module.css"

const AllFlags = () => {
	const [countries, setCountries] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const getCountries = async () => {
		try {
			const { data } = await axios.get(
				'https://restcountries.com/v3.1/all',
			);
			setCountries(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getCountries();
	}, []);

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const filteredCountries = countries.filter((country) =>
		country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<>
			<nav className={styles.navBar}>
				<input
					className={styles.searchbar}
					type='text'
					placeholder='Search for countries'
					value={searchQuery}
					onChange={handleSearchChange}
				/>
			</nav>
			<div className={styles.Container}>
				<div className={styles.countriesName}>
					{filteredCountries.map((country) => (
						<Flag key={country.cca3} data={country} />
					))}
				</div>
			</div>
		</>
	); 
};

export default AllFlags;
