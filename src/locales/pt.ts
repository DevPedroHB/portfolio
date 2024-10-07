export default {
	metadata: {
		description:
			"Sinta-se à vontade para explorar os projetos, serviços e links disponíveis, e não hesite em entrar em contato comigo para colaborações ou outras oportunidades. Estou sempre interessado em novos desafios e oportunidades de aprendizado.",
		titles: {
			home: "Início",
			profile: "Perfil de {name}",
		},
	},
	navbar: {
		title: "PedroHB",
		links: {
			hero: "Início",
			about: "Sobre",
			skills: "Habilidades",
			services: "Serviços",
			portfolio: "Portfólio",
			contact: "Contato",
		},
		"profile-menu": {
			labels: {
				title: "Minha conta",
				locales: "Idiomas",
				theme: "Tema",
				themes: "Temas",
				colors: "Cores",
				"sign-in": "Entrar",
				"sign-out": "Sair",
				profile: "Perfil",
			},
			locales: {
				en: "Inglês",
				pt: "Português",
			},
			theme: {
				themes: {
					dark: "Escuro",
					light: "Claro",
					system: "Sistema",
				},
				colors: {
					amber: "Âmbar",
					blue: "Azul",
					cyan: "Ciano",
					emerald: "Esmeralda",
					fuchsia: "Fuchsia",
					gray: "Cinza",
					green: "Verde",
					indigo: "Índigo",
					lime: "Limão",
					neutral: "Neutro",
					orange: "Laranja",
					pink: "Rosa",
					purple: "Roxo",
					red: "Vermelho",
					rose: "Rosa",
					sky: "Céu",
					slate: "Lousa",
					stone: "Pedra",
					teal: "Turquesa",
					violet: "Violeta",
					yellow: "Amarelo",
					zinc: "Zinco",
				},
			},
		},
	},
	footer: {
		copyright: "Copyright © {year}, Todos os direitos reservados à {site}",
		links: {
			qualification: "Qualificação",
			"new-project": "Novo projeto",
			testimonial: "Depoimentos",
		},
		subtitle: "Engenheiro de software",
		title: "PedroHB",
	},
	components: {
		"sign-in": {
			title: "Acesse sua conta",
			description:
				"Conecte-se para acessar todas as funcionalidades. Selecione uma das opções de login abaixo para continuar.",
		},
		"sign-out": {
			title: "Tem certeza que deseja sair?",
			description:
				"Sair da sua conta encerrará sua sessão. Você poderá fazer login novamente a qualquer momento.",
			"cancel-button": "Cancelar",
			"sign-out-button": "Sair",
		},
		"user-hover-card": {
			name: "Sem nome",
			info: "{role} desde {createdAt}",
		},
	},
	home: {
		sections: {
			hero: {
				"contact-button": "Contate-me",
				description:
					"Desenvolvedor dedicado a criar soluções intuitivas e envolventes, com sólida experiência e paixão pela inovação.",
				"scroll-down-button": "Role para baixo",
				subtitle: "Engenheiro de software",
				title: "Olá, eu sou Pedro",
			},
			about: {
				description:
					"Sou um engenheiro de software apaixonado e dedicado a criar sistemas envolventes e fáceis de usar. Tenho sólida experiência em desenvolvimento e estou sempre em busca de novas oportunidades para colaborar, aprender e expandir minhas habilidades.",
				"download-cv-button": "Baixar CV",
				info: {
					"years-experience": "Anos de experiência",
					"completed-project": "Projetos concluídos",
					"companies-worked": "Empresas trabalhadas",
				},
				subtitle: "Minha introdução",
				title: "Sobre mim",
			},
			skills: {
				accordions: {
					backend: {
						subtitle: "Mais de {years} anos",
						title: "Desenvolvedor backend",
					},
					database: {
						subtitle: "Mais de {years} anos",
						title: "Banco de dados",
					},
					frontend: {
						subtitle: "Mais de {years} anos",
						title: "Desenvolvedor frontend",
					},
					mobile: {
						subtitle: "Mais de {years} anos",
						title: "Desenvolvedor mobile",
					},
					packages: {
						subtitle: "Mais de {years} anos",
						title: "Pacotes e bibliotecas",
					},
				},
				subtitle: "Meu nível técnico",
				title: "Habilidades",
			},
			qualification: {
				subtitle: "Minha jornada pessoal",
				tabs: {
					education: "Educação",
					work: "Trabalho",
				},
				title: "Qualificação",
			},
			services: {
				title: "Serviços",
				subtitle: "O que eu ofereço",
			},
			portfolio: {
				title: "Portfólio",
				subtitle: "Trabalhos recentes",
			},
			"new-project": {
				title: "Você tem um novo projeto",
				subtitle:
					"Entre em contato agora e obtenha 30% de desconto no seu novo projeto.",
				"contact-button": "Entre em contato",
			},
			testimonial: {
				title: "Depoimentos",
				subtitle: "O que meus clientes dizem",
			},
			contact: {
				title: "Entre em contato",
				subtitle: "Fale comigo",
			},
		},
	},
	roles: {
		OWNER: "Dono",
		CLIENT: "Cliente",
		MEMBER: "Membro",
	},
	settings: {
		title: "Editar perfil",
		description:
			"Faça alterações no seu perfil aqui. Clique em salvar quando terminar.",
		tabs: {
			profile: {
				label: "Perfil",
				fields: {
					name: {
						label: "Nome",
						placeholder: "Digite seu nome",
					},
					birthdate: {
						label: "Data de nascimento",
						placeholder: "Informe sua data de nascimento",
					},
				},
			},
		},
		"save-button": "Salvar alterações",
	},
} as const;
