import Link from "next/link";
import styles from "./NavBar.module.css";

export const NavBar = () => {
	return (
		<>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/search">Search</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}