import styles  from './Header.module.scss'

export const Header: React.FC = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={`${styles.header__wrapper} container`}>
					<nav className={styles.nav}>
						<ul className={styles.nav__list}>
							<li className={styles.nav__item}>
								<a href="">Главная</a>
							</li>
							<li className={styles.nav__item}>
								<a href="">О нас</a>
							</li>
							<li className={styles.nav__item}>
								<a href="">Отзывы</a>
							</li>
							<li className={styles.nav__item}>
								<a href="">Контакты</a>
							</li>
							<li className={styles.nav__item}>
								<a href="">Услуги</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}