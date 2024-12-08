import Link from "next/link";

export const NavBar = () => {
	return (
		<>
			<div className="navbar">
				<ul>
					<li>
						<Link href="/index">Home</Link>
					</li>
					<li>
						<Link href="/search">Search</Link>
					</li>
				</ul>
			</div>
		</>
	)
}