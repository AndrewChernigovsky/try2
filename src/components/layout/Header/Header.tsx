import { NavbarComponent } from '@/components/modules/navbar/Navbar';
import styles from './Header.module.scss'
import { FC } from 'react';

export const Header: FC = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__wrapper}>
					<NavbarComponent />
				</div>
			</header>
		</>
	);
}