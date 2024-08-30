export default {
	metadata: {
		description:
			"Feel free to explore the projects, services and links available, and don't hesitate to contact me for collaborations or other opportunities. I'm always interested in new challenges and learning opportunities.",
		titles: {
			home: "Home",
		},
	},
	navbar: {
		links: {
			hero: "Home",
			about: "About",
			skills: "Skills",
			services: "Services",
			portfolio: "Portfolio",
			contact: "Contact me",
		},
		title: "PedroHB",
	},
	locales: {
		en: "English",
		label: "Languages",
		pt: "Portuguese",
	},
	theme: {
		colors: {
			amber: "Amber",
			blue: "Blue",
			cyan: "Cyan",
			emerald: "Emerald",
			fuchsia: "Fuchsia",
			gray: "Gray",
			green: "Green",
			indigo: "Indigo",
			label: "Colors",
			lime: "Lime",
			neutral: "Neutral",
			orange: "Orange",
			pink: "Pink",
			purple: "Purple",
			red: "Red",
			rose: "Rose",
			sky: "Sky",
			slate: "Slate",
			stone: "Stone",
			teal: "Teal",
			violet: "Violet",
			yellow: "Yellow",
			zinc: "Zinc",
		},
		label: "Theme",
		themes: {
			dark: "Dark",
			label: "Themes",
			light: "Light",
			system: "System",
		},
	},
	footer: {
		copyright: "Copyright © {year}, All rights reserved to {site}",
		links: {
			qualification: "Qualification",
			"new-project": "New project",
			testimonial: "Testimonial",
		},
		subtitle: "Software engineer",
		title: "PedroHB",
	},
	home: {
		sections: {
			hero: {
				"contact-button": "Contact me",
				description:
					"Developer dedicated to creating intuitive and engaging solutions, with solid experience and a passion for innovation.",
				"scroll-down-button": "Scroll down",
				subtitle: "Software engineer",
				title: "Hi, I'am Pedro",
			},
			about: {
				description:
					"I'm a passionate software engineer dedicated to creating engaging and user-friendly systems. I have solid experience in development and am always looking for new opportunities to collaborate, learn, and expand my skills.",
				"download-cv-button": "Download CV",
				info: {
					"years-experience": "Years experience",
					"completed-project": "Completed project",
					"companies-worked": "Companies worked",
				},
				subtitle: "My introduction",
				title: "About me",
			},
			skills: {
				accordions: {
					backend: {
						subtitle: "More than {years} years",
						title: "Backend developer",
					},
					database: {
						subtitle: "More than {years} years",
						title: "Database",
					},
					frontend: {
						subtitle: "More than {years} years",
						title: "Frontend developer",
					},
					mobile: {
						subtitle: "More than {years} years",
						title: "Mobile developer",
					},
					packages: {
						subtitle: "More than {years} years",
						title: "Packages and libraries",
					},
				},
				subtitle: "My technical level",
				title: "Skills",
			},
			qualification: {
				subtitle: "My personal journey",
				tabs: {
					education: "Education",
					work: "Work",
				},
				title: "Qualification",
			},
			services: {
				title: "Services",
				subtitle: "What i offer",
			},
			portfolio: {
				title: "Portfolio",
				subtitle: "Most recent work",
			},
			"new-project": {
				title: "You have a new project",
				subtitle: "Contact me now and get a 30% discount on your new project.",
				"contact-button": "Contact me",
			},
			testimonial: {
				title: "Testimonial",
				subtitle: "My client saying",
			},
			contact: {
				title: "Contact me",
				subtitle: "Get in touch",
			},
		},
	},
} as const;
