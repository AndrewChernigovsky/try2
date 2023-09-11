'use client'

import { FC } from 'react';

export const NavbarComponent: FC = () => {
	let arr = [];
	for (let i = 0; i <= 10; i++) {
		arr.push(i)
	}
	return (
		<>
			<h1>sdfsdfsdfsdf</h1>
			{
				arr.map((el) => {
					return <p key={el}>{el}</p>
				})
			}
		</>
	);
}

