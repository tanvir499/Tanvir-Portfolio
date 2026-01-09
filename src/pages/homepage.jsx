import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';
import { faMailBulk, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
	SiReact,
	SiNodedotjs,
	SiJavascript,
	SiExpress,
	SiNextdotjs
} from 'react-icons/si';

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import TechnologiesSection from "../components/homepage/TechnologiesSection";
import ServicesSection from "../components/homepage/ServicesSection";
import ProjectsShowcase from "../components/homepage/ProjectsShowcase";
import EducationTimeline from "../components/homepage/EducationTimeline";
import TestimonialsSection from "../components/homepage/TestimonialsSection";
import ContactSection from "../components/homepage/ContactSection";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [showImage, setShowImage] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);

		const img = new Image();
		img.onload = () => {
			setTimeout(() => {
				setImageLoaded(true);
				setTimeout(() => setShowImage(true), 300);
			}, 1500);
		};
		img.src = "home-page-pic.jpg";
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);
			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							{/* Left Side Social Icons - Inside Banner */}
							<motion.div 
								className="homepage-socials-left-banner"
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
							>
								{[
									{ icon: faGithub, href: INFO.socials.github },
									{ icon: faTwitter, href: INFO.socials.twitter },
									{ icon: faStackOverflow, href: INFO.socials.stackoverflow },
									{ icon: faInstagram, href: INFO.socials.instagram },
									{ icon: faMailBulk, href: `mailto:${INFO.main.email}` }
								].map((social, index) => (
									<motion.a
										key={index}
										href={social.href}
										target="_blank"
										rel="noreferrer"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 1 + (index * 0.1), ease: "easeOut" }}
										whileHover={{ scale: 1.2, x: 5, transition: { duration: 0.2 } }}
										whileTap={{ scale: 0.95 }}
									>
										<FontAwesomeIcon icon={social.icon} className="homepage-social-icon-left-banner" />
									</motion.a>
								))}
							</motion.div>

							<motion.div
								className="homepage-first-area-left-side"
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
							>
								<motion.div 
									className="title homepage-main-title"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
								>
									<span className="greeting-text">Hi I am </span>
									{INFO.main.name}
									<motion.span 
										className="waving-hand"
										animate={{ 
											rotate: [0, 14, -8, 14, -4, 10, 0],
											scale: [1, 1.1, 1, 1.1, 1, 1.1, 1]
										}}
										transition={{
											duration: 2.5,
											repeat: Infinity,
											repeatDelay: 3,
											ease: "easeInOut"
										}}
									>
										👋
									</motion.span>
								</motion.div>

								<motion.div 
									className="subtitle homepage-typing-subtitle"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
								>
									<TypeAnimation
										sequence={[
											'Full-stack web developer.',
											2000,
											'MERN-stack web developer.',
											2000,
											'React.js developer.',
											2000,
											'Node.js developer.',
											2000,
											'JavaScript developer.',
											2000,
											'Frontend developer.',
											2000,
											'Backend developer.',
											2000,
										]}
										wrapper="span"
										speed={50}
										style={{ 
											fontSize: 'inherit',
											fontWeight: 'inherit',
											color: 'var(--link-color)',
											display: 'inline-block'
										}}
										repeat={Infinity}
									/>
								</motion.div>

								<motion.div
									className="subtitle homepage-subtitle"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
								>
									{INFO.homepage.description}
								</motion.div>

								<motion.div
									className="homepage-resume-button-container"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
								>
									<button
										className="homepage-resume-button"
										onClick={() => {
											alert("Resume download will be available soon!");
										}}
									>
										<FontAwesomeIcon icon={faDownload} className="resume-button-icon" />
										<span>Download Resume</span>
									</button>
								</motion.div>
							</motion.div>

							<motion.div
								className="homepage-first-area-right-side"
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
							>
								<div className="homepage-image-container">
									<motion.div
										className="visible-rainbow-glow"
										animate={{
											opacity: [0.1, 0.2, 0.1],
											scale: [1, 1.01, 1],
											rotate: [0, 360]
										}}
										transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
									/>

									<div className="visible-tech-container">
										<motion.div
											className="visible-tech-icon visible-react"
											animate={{
												rotate: [0, 360],
												y: [-10, 10, -10],
												scale: [1, 1.3, 1],
												opacity: [0.4, 0.6, 0.4]
											}}
											transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
										>
											<SiReact />
										</motion.div>

										<motion.div
											className="visible-tech-icon visible-js"
											animate={{
												y: [-8, 12, -8],
												x: [-4, 4, -4],
												rotate: [0, 180, 360],
												scale: [0.9, 1.2, 0.9],
												opacity: [0.3, 0.5, 0.3]
											}}
											transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
										>
											<SiJavascript />
										</motion.div>

										<motion.div
											className="visible-tech-icon visible-node"
											animate={{
												rotate: [0, -360],
												y: [-6, 14, -6],
												x: [-3, 5, -3],
												scale: [1, 1.4, 1],
												opacity: [0.4, 0.6, 0.4]
											}}
											transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
										>
											<SiNodedotjs />
										</motion.div>

										<motion.div
											className="visible-tech-icon visible-next"
											animate={{
												y: [-9, 11, -9],
												rotate: [0, 270, 0],
												scale: [0.95, 1.25, 0.95],
												x: [-2, 3, -2],
												opacity: [0.3, 0.5, 0.3]
											}}
											transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
										>
											<SiNextdotjs />
										</motion.div>

										<motion.div
											className="visible-tech-icon visible-express"
											animate={{
												rotate: [0, 180, 360],
												y: [-7, 9, -7],
												x: [-2, 4, -2],
												scale: [1, 0.8, 1.3],
												opacity: [0.3, 0.4, 0.3]
											}}
											transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
										>
											<SiExpress />
										</motion.div>
									</div>

									<div className="homepage-image-wrapper">
										<AnimatePresence>
											{!imageLoaded && (
												<motion.div
													className="image-loading-skeleton"
													initial={{ opacity: 1 }}
													exit={{ opacity: 0 }}
													transition={{ duration: 0.5 }}
												>
													<div className="skeleton-shimmer"></div>
													<div className="loading-dots">
														<motion.div
															className="loading-dot"
															animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
															transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
														/>
														<motion.div
															className="loading-dot"
															animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
															transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
														/>
														<motion.div
															className="loading-dot"
															animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
															transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
														/>
													</div>
													<motion.div
														className="loading-text"
														animate={{ opacity: [0.6, 1, 0.6] }}
														transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
													>
														Loading...
													</motion.div>
													<div className="loading-progress">
														<motion.div
															className="loading-progress-bar"
															initial={{ width: "0%" }}
															animate={{ width: "100%" }}
															transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
														/>
													</div>
												</motion.div>
											)}
										</AnimatePresence>

										<AnimatePresence>
											{showImage && (
												<img
													src="home-page-pic.jpg"
													alt="about"
													className="homepage-image-full"
													style={{
														width: "100%",
														height: "100%",
														objectFit: "contain",
														objectPosition: "center center",
														position: "relative",
														zIndex: 2,
														opacity: imageLoaded ? 1 : 0,
														transition: "opacity 0.8s ease-out"
													}}
												/>
											)}
										</AnimatePresence>
									</div>
								</div>
							</motion.div>
						</div>

						{/* New Sections */}
						<TechnologiesSection />
						<ServicesSection />
						<ProjectsShowcase />
						<EducationTimeline />
						<TestimonialsSection />
						<ContactSection />

						<motion.div
							className="homepage-after-title"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.6, ease: "easeOut" }}
						>
							<motion.div
								className="homepage-articles"
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
							>
								{myArticles.map((article, index) => (
									<motion.div
										className="homepage-article"
										key={(index + 1).toString()}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</motion.div>
								))}
							</motion.div>
						</motion.div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;