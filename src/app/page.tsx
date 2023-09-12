import Image from 'next/image';
import styles from './page.module.css';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';

export default function Home() {

	return (
		<>
			<Header />
			<main className={styles.main}>
				
			</main>
			<Footer/>
		</>
	);
}
