const INFO = {
	main: {
		title: "Reactfolio by Tanvir",
		name: "Tanvir Hossain",
		email: "tanvirhossaine4499@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/tanvir499",
		linkedin: "https://www.linkedin.com/in/tanvirhossainayan/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Mern-stack developer.",
		description:
			"I am a mern stack developer with expertise in Javascript React.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "I’m Tanvir Hossain I live in Bangladesh, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	skills: {
		title: "Technical Skills & Expertise",
		description: "A comprehensive overview of my technical skills and proficiency levels across different domains of modern web development.",
		categories: [
			{
				name: "Frontend Development",
				color: "#61DAFB",
				skills: [
					{ name: "React.js", level: 90, icon: "⚛️" },
					{ name: "JavaScript", level: 95, icon: "🟨" },
					{ name: "HTML5", level: 95, icon: "🌐" },
					{ name: "CSS3", level: 90, icon: "🎨" },
					{ name: "TypeScript", level: 80, icon: "📘" },
					{ name: "Tailwind CSS", level: 85, icon: "💨" },
					{ name: "Bootstrap", level: 85, icon: "🅱️" },
					{ name: "SASS/SCSS", level: 80, icon: "💎" },
					{ name: "Next.js", level: 85, icon: "▲" },
					{ name: "Vue.js", level: 75, icon: "💚" }
				]
			},
			{
				name: "Backend Development",
				color: "#68A063",
				skills: [
					{ name: "Node.js", level: 85, icon: "🟢" },
					{ name: "Express.js", level: 85, icon: "⚡" },
					{ name: "MongoDB", level: 80, icon: "🍃" },
					{ name: "MySQL", level: 75, icon: "🐬" },
					{ name: "PostgreSQL", level: 70, icon: "🐘" },
					{ name: "RESTful APIs", level: 90, icon: "🔗" },
					{ name: "GraphQL", level: 70, icon: "📊" },
					{ name: "JWT Authentication", level: 85, icon: "🔐" },
					{ name: "Socket.io", level: 75, icon: "🔌" },
					{ name: "Redis", level: 65, icon: "🔴" }
				]
			},
			{
				name: "Tools & Technologies",
				color: "#FF6B6B",
				skills: [
					{ name: "Git & GitHub", level: 90, icon: "🐙" },
					{ name: "VS Code", level: 95, icon: "💙" },
					{ name: "Webpack", level: 75, icon: "📦" },
					{ name: "Vite", level: 80, icon: "⚡" },
					{ name: "Docker", level: 70, icon: "🐳" },
					{ name: "AWS", level: 65, icon: "☁️" },
					{ name: "Postman", level: 85, icon: "📮" },
					{ name: "Figma", level: 80, icon: "🎨" },
					{ name: "NPM/Yarn", level: 90, icon: "📦" },
					{ name: "Jest", level: 75, icon: "🃏" }
				]
			}
		]
	},

	projects: [
		{
			title: "Blood Donation Platform",
			description:
				"A comprehensive blood donation management system connecting donors with recipients. Features donor registration, blood request management, real-time availability tracking, and emergency notifications for life-saving donations.",
			image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
			linkText: "View Live Project",
			link: "https://blood-donation-clienr-side.netlify.app/",
			technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
			githubLink: "https://github.com/tanvir499",
			liveLink: "https://blood-donation-clienr-side.netlify.app/",
			isExternal: true
		},

		{
			title: "Paw Mart - Pet Store",
			description:
				"A modern e-commerce platform for pet supplies and accessories. Features product catalog, shopping cart, user authentication, order management, and secure payment processing for pet lovers.",
			image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
			linkText: "View Live Project",
			link: "https://paw-mart-client-side.netlify.app/",
			technologies: ["React", "TypeScript", "Firebase", "Stripe", "Tailwind"],
			githubLink: "https://github.com/tanvir499",
			liveLink: "https://paw-mart-client-side.netlify.app/",
			isExternal: true
		},

		{
			title: "App Hero - Mobile Showcase",
			description:
				"A sleek mobile app showcase platform featuring modern design, interactive demos, and comprehensive app information. Built with responsive design and smooth animations for optimal user experience.",
			image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
			linkText: "View Live Project",
			link: "https://assignment-08-app-hero.netlify.app/",
			technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS"],
			githubLink: "https://github.com/tanvir499",
			liveLink: "https://assignment-08-app-hero.netlify.app/",
			isExternal: true
		},

		{
			title: "Task Management Pro",
			description:
				"A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and advanced project tracking capabilities.",
			image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
			linkText: "Coming Soon",
			link: "#",
			technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
			githubLink: "https://github.com/tanvir499",
			liveLink: "#",
			isExternal: false,
			status: "In Development"
		},

		{
			title: "Weather Analytics Dashboard",
			description:
				"An advanced weather analytics platform with interactive charts, forecasting models, historical data analysis, and location-based weather insights for data-driven decisions.",
			image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
			linkText: "Coming Soon",
			link: "#",
			technologies: ["React", "Python", "Chart.js", "OpenWeather API", "D3.js"],
			githubLink: "https://github.com/tanvir499",
			liveLink: "#",
			isExternal: false,
			status: "Planning"
		},
	],
};

export default INFO;
