import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
	return (
		<>
			<footer className={styles.footer}>
				<div className={`${styles.footer__wrapper} container`}>
					<div className={styles.social}>
						<ul className={styles.social__list}>
							<li className={styles.social__item}>
								<a href="">Vkontakte</a>
							</li>
							<li className={styles.social__item}>
								<a href="">Telegram</a>
							</li>
							<li className={styles.social__item}>
								<a href="">Facebook</a>
							</li>
							<li className={styles.social__item}>
								<a href="">Youtube</a>
							</li>
							<li className={styles.social__item}>
								<a href="">Whatsapp</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};
