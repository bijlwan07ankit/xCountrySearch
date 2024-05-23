import React from 'react';
import styles from "./AllFlag.module.css"

const Flag = ({ data }) => {
	return (
		<div className='border rounded-md p-2 m-2 countryCard'>
			<div className='w-full h-[80px] bg-red-400 rounded-md overflow-hidden border'>
				<img
					className={styles.img}
					src={data.flags.png}
					alt={data.name.common}
				/>
			</div>
			<h1 className={styles.text}>
				{data.name.common}
			</h1>
		</div>
	);
};

export default Flag;