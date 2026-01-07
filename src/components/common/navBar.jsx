import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/" onClick={() => console.log('Home clicked')}>Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link 
									to="/about" 
									onClick={(e) => {
										console.log('About clicked');
										// Test: Force navigation if React Router fails
										// setTimeout(() => window.location.href = '/about', 100);
									}}
								>
									About
								</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects" onClick={() => console.log('Projects clicked')}>Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles" onClick={() => console.log('Articles clicked')}>Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact" onClick={() => console.log('Contact clicked')}>Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
