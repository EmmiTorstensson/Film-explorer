import { NavBar } from "./NavBar";
import styles from './Header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<NavBar />
		</header>
	)
}