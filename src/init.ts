// Placeholder for profile picture URL - replace with your actual image URL
const profilePicUrl = "./files/portfolio image.png"; // Using local portfolio image with proper path

interface Link {
  name: string;
  url: string;
  icon?: string; // Optional icon class (e.g., for Font Awesome)
}

interface ResearchInterest {
  name: string;
}

interface StatItem {
  number: string;
  label: string;
}

interface ProjectItem {
  name: string;
  description: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  year: string;
  links: { [key: string]: string }; // e.g., {"pdf": "url", "code": "url", "doi": "url"}
}

const contactLinks: Link[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/duarte-le%C3%A3o-96b329211/",
    icon: "fab fa-linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/Duarte-leao",
    icon: "fab fa-github",
  },
  {
    name: "Email",
    url: "mailto:duarte.leao@tecnico.ulisboa.pt",
    icon: "fas fa-envelope",
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?view_op=new_profile&hl=en&authuser=2",
    icon: "fas fa-graduation-cap",
  },
];

const aboutContent = `
  <p>A PhD student and research Fellow at ISR, holding a Master's in Electrical and Computer Engineering and a Bachelor's in Mechanical Engineering from Instituto Superior Técnico, Lisbon.</p>
  <p>Professors <a href="https://www.researchgate.net/profile/Daniel-Silvestre-2" target="_blank">Daniel Silvestre</a>, for centralized observer designs for non-Gaussian noises, including cutting-edge NLP and GraphRAG solutions to address interpretable AI systems.</p>
`;

const researchInterests: ResearchInterest[] = [
  { name: "Machine Learning" },
  { name: "Deep Learning" },
  { name: "Computer Vision" },
  { name: "Representation" },
  { name: "Generative Models" },
  { name: "Explainable AI" },
];

const stats: StatItem[] = [
  {
    number: "3",
    label: "Publications",
  },
  {
    number: "2",
    label: "Top AI Venues",
  },
];

const publications: PublicationItem[] = [
  {
    title:
      "Prototype-based Learning for Enhanced Interpretability in Medical Image Analysis",
    authors: "Leão, D., Santiago, C., Barata, C.",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2025",
    links: {
      pdf: "#",
      code: "https://github.com/duarteleao/prototype-learning",
      doi: "https://doi.org/10.xxxx/xxxxx",
    },
  },
  {
    title: "Distributed Observer Design for Systems with Non-Gaussian Noise",
    authors: "Leão, D., Silvestre, D., Cunha, R.",
    venue: "IEEE Transactions on Signal Processing",
    year: "2024",
    links: {
      pdf: "#",
      code: "https://github.com/duarteleao/distributed-observer",
      doi: "https://doi.org/10.xxxx/xxxxx",
    },
  },
  {
    title:
      "GraphRAG: Enhancing Reasoning Capabilities in Retrieval-Augmented Generation Systems",
    authors: "Leão, D., Santos, A., Silva, M.",
    venue:
      "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
    year: "2024",
    links: {
      pdf: "#",
      code: "https://github.com/duarteleao/graphrag",
      demo: "#",
    },
  },
];

const projects: ProjectItem[] = [
  {
    name: "AI-Radiologist",
    description:
      "Research project developing explainable AI models for medical image analysis. Created prototype-based learning approaches that improve model interpretability while maintaining high accuracy.",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "Medical Image Analysis",
      "Explainable AI",
    ],
    githubUrl: "https://github.com/duarteleao/ai-radiologist",
  },
  {
    name: "GraphRAG Framework",
    description:
      "An advanced retrieval-augmented generation framework that uses graph structures to enhance reasoning capabilities of large language models.",
    technologies: ["Python", "LangChain", "NetworkX", "Large Language Models"],
    githubUrl: "https://github.com/duarteleao/graphrag",
    demoUrl: "#",
  },
  {
    name: "Distributed Observer Toolkit",
    description:
      "Open-source toolkit implementing distributed and centralized observer designs for systems with non-Gaussian noise distributions.",
    technologies: ["MATLAB", "Python", "Statistical Signal Processing"],
    githubUrl: "https://github.com/duarteleao/distributed-observer",
  },
];

function createHeader() {
  const header = document.createElement("header");

  // Profile picture
  const profilePicContainer = document.createElement("div");
  profilePicContainer.className = "profile-pic-container";
  const profilePic = document.createElement("img");
  profilePic.src = profilePicUrl;
  profilePic.alt = "Duarte Leão";
  profilePic.className = "profile-pic";
  profilePicContainer.appendChild(profilePic);
  header.appendChild(profilePicContainer);

  // Name
  const name = document.createElement("h1");
  name.textContent = "Duarte Leão";
  header.appendChild(name);

  // Tagline
  const tagline = document.createElement("div");
  tagline.className = "tagline";
  tagline.textContent = "Bridging AI and Human Understanding through Interpretable Models";
  header.appendChild(tagline);

  return header;
}

function createNavbar() {
  const navbar = document.createElement("div");
  navbar.className = "navbar"; // Will be styled to be sticky
  const nav = document.createElement("nav");

  const sections = [
    { id: "about", name: "About" },
    { id: "research", name: "Research" },
    { id: "publications", name: "Publications" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  sections.forEach((section) => {
    const a = document.createElement("a");
    a.href = `#${section.id}`;
    a.textContent = section.name;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const targetElement = document.getElementById(section.id);
      if (targetElement) {
        const navbarHeight = navbar.offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
    nav.appendChild(a);
  });

  navbar.appendChild(nav);
  return navbar;
}

function createStatsBox() {
  const statsContainer = document.createElement("div");
  statsContainer.className = "stats-container";

  stats.forEach((stat) => {
    const statBox = document.createElement("div");
    statBox.className = "stat-box";

    const statNumber = document.createElement("span");
    statNumber.className = "stat-number";
    statNumber.textContent = stat.number;

    const statLabel = document.createElement("span");
    statLabel.className = "stat-label";
    statLabel.textContent = stat.label;

    statBox.appendChild(statNumber);
    statBox.appendChild(statLabel);
    statsContainer.appendChild(statBox);
  });
  return statsContainer;
}

function createCvButton() {
  const cvButton = document.createElement("a");
  cvButton.href = "./files/CV.pdf";
  cvButton.target = "_blank";
  cvButton.rel = "noopener noreferrer";
  cvButton.className = "cv-button";
  cvButton.textContent = "Download CV";
  return cvButton;
}

function createAboutSection() {
  const section = document.createElement("section");
  section.id = "about";
  section.style.position = "relative";

  const title = document.createElement("h2");
  title.textContent = "About";
  section.appendChild(title);

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "about-content-wrapper";

  const content = document.createElement("div");
  content.className = "section-content about-text";
  content.innerHTML = aboutContent;
  contentWrapper.appendChild(content);

  const statsBox = createStatsBox();
  contentWrapper.appendChild(statsBox);

  section.appendChild(contentWrapper);
  return section;
}

function createResearchInterestsSection() {
  const section = document.createElement("section");
  section.id = "research";
  section.style.position = "relative";

  const cvButton = createCvButton();
  section.appendChild(cvButton);

  const title = document.createElement("h2");
  title.textContent = "Research Interests";
  section.appendChild(title);

  const interestsList = document.createElement("div");
  interestsList.className = "interests-list";

  researchInterests.forEach((interest) => {
    const interestTag = document.createElement("span");
    interestTag.className = "interest-tag";
    interestTag.textContent = interest.name;
    interestsList.appendChild(interestTag);
  });

  section.appendChild(interestsList);

  return section;
}

function createPublicationsSection() {
  const section = document.createElement("section");
  section.id = "publications";

  const title = document.createElement("h2");
  title.textContent = "Publications";
  section.appendChild(title);

  publications.forEach((pub) => {
    const publicationItem = document.createElement("div");
    publicationItem.className = "publication-item";

    const pubTitle = document.createElement("div");
    pubTitle.className = "publication-title";
    pubTitle.innerHTML = pub.title;

    const pubAuthors = document.createElement("div");
    pubAuthors.className = "publication-authors";
    pubAuthors.textContent = pub.authors;

    const pubVenue = document.createElement("div");
    pubVenue.className = "publication-venue";
    pubVenue.textContent = `${pub.venue}, ${pub.year}`;

    const pubLinks = document.createElement("div");
    pubLinks.className = "publication-links";

    for (const [key, url] of Object.entries(pub.links)) {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      let icon, text;
      switch (key) {
        case "pdf":
          icon = "fas fa-file-pdf";
          text = "PDF";
          break;
        case "code":
          icon = "fab fa-github";
          text = "Code";
          break;
        case "doi":
          icon = "fas fa-link";
          text = "DOI";
          break;
        default:
          icon = "fas fa-link";
          text = key.charAt(0).toUpperCase() + key.slice(1);
      }

      const i = document.createElement("i");
      i.className = icon;
      link.appendChild(i);
      link.appendChild(document.createTextNode(` ${text}`));

      pubLinks.appendChild(link);
    }

    publicationItem.appendChild(pubTitle);
    publicationItem.appendChild(pubAuthors);
    publicationItem.appendChild(pubVenue);
    publicationItem.appendChild(pubLinks);

    section.appendChild(publicationItem);
  });

  return section;
}

function createProjectsSection() {
  const section = document.createElement("section");
  section.id = "projects";

  const title = document.createElement("h2");
  title.textContent = "Projects";
  section.appendChild(title);

  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.className = "project-item";

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.name;

    const projectDesc = document.createElement("p");
    projectDesc.textContent = project.description;

    projectItem.appendChild(projectTitle);
    projectItem.appendChild(projectDesc);

    if (project.technologies && project.technologies.length > 0) {
      const techContainer = document.createElement("div");
      techContainer.style.marginTop = "10px";

      project.technologies.forEach((tech) => {
        const techBadge = document.createElement("span");
        techBadge.className = "interest-tag";
        techBadge.style.marginRight = "8px";
        techBadge.style.marginBottom = "8px";
        techBadge.textContent = tech;
        techContainer.appendChild(techBadge);
      });

      projectItem.appendChild(techContainer);
    }

    const projectLinks = document.createElement("div");
    projectLinks.className = "project-links";
    projectLinks.style.marginTop = "10px";

    if (project.githubUrl) {
      const link = document.createElement("a");
      link.href = project.githubUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      const icon = document.createElement("i");
      icon.className = "fab fa-github";
      link.appendChild(icon);
      link.appendChild(document.createTextNode(" Code"));
      projectLinks.appendChild(link);
    }

    if (projectLinks.hasChildNodes()) {
      projectItem.appendChild(projectLinks);
    }

    section.appendChild(projectItem);
  });

  return section;
}

function createContactSection() {
  const section = document.createElement("section");
  section.id = "contact";

  const title = document.createElement("h2");
  title.textContent = "Contact";
  section.appendChild(title);

  const content = document.createElement("div");
  content.className = "section-content";
  content.innerHTML =
    "<p>To reach interestes an research inquires, for acageniceor professional opportunities.</p>";
  section.appendChild(content);

  const contactDiv = document.createElement("div");
  contactDiv.className = "contact-links-icons";

  contactLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = link.name;

    const i = document.createElement("i");
    i.className = link.icon || "";
    a.appendChild(i);

    contactDiv.appendChild(a);
  });
  section.appendChild(contactDiv);

  return section;
}

function createFooter() {
  const footer = document.createElement("footer");
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `&copy; ${currentYear} Duarte Leão.`;
  return footer;
}

// Initialize the page
function init() {
  const rootElement = document.getElementById("root") as HTMLElement;
  if (!rootElement) return;
  rootElement.innerHTML = "";

  const container = document.createElement("div");
  container.className = "container";

  container.appendChild(createHeader());

  const navbar = createNavbar();
  rootElement.appendChild(navbar);

  container.appendChild(createAboutSection());
  container.appendChild(createResearchInterestsSection());
  container.appendChild(createPublicationsSection());
  container.appendChild(createProjectsSection());
  container.appendChild(createContactSection());

  rootElement.appendChild(container);

  rootElement.appendChild(createFooter());

  const firstSectionLink = document.querySelector('nav a[href="#about"]');
  if (firstSectionLink) {
    firstSectionLink.classList.add("active");
  }

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    const nav = document.querySelector(".navbar nav");
    if (!nav) return;
    const navLinks = nav.querySelectorAll("a");
    const sections = document.querySelectorAll("section");
    const navbarHeight =
      (document.querySelector(".navbar") as HTMLElement)?.offsetHeight || 60;

    let current: string | null = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navbarHeight - 50;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href && href.substring(1) === current) {
        link.classList.add("active");
      }
    });

    if (!current && scrollY < sections[0].offsetTop) {
      const aboutLink = document.querySelector('nav a[href="#about"]');
      if (aboutLink) aboutLink.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", init);

export {};
