// Placeholder for profile picture URL - replace with your actual image URL
const profilePicUrl = "./portfolio image.png"; // Using local portfolio image with proper path

interface Link {
  name: string;
  url: string;
  icon?: string; // Optional icon class (e.g., for Font Awesome)
}

interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
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

interface TeachingItem {
  course: string;
  role: string;
  institution: string;
  period: string;
  description?: string[];
}

interface NewsItem {
  date: string;
  text: string;
}

interface ResearchInterest {
  name: string;
}

interface SkillCategory {
  category: string;
  skills: string;
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
  <p>I am a dedicated engineer and researcher with a strong interdisciplinary background, holding a Master's in Electrical and Computer Engineering (specializing in Control, Robotics, and AI) and a Bachelor's in Mechanical Engineering from Instituto Superior Técnico, Lisbon.</p>
  <p>My Master's thesis, supervised by Professors Daniel Silvestre and Rita Cunha, tackled sensor fusion challenges using distributed and centralized observer designs for non-Gaussian noises. Professionally, I led AI development at Pairwire, a startup focused on optimizing consultants' work, where I designed cutting-edge NLP and GraphRAG solutions to automate consulting reports.</p>
  <p>My research interests include machine learning, computer vision, natural language processing, and multi-modal models with a focus on developing more efficient and interpretable AI systems.</p>
`;

const researchInterests: ResearchInterest[] = [
  { name: "Machine Learning" },
  { name: "Computer Vision" },
  { name: "Natural Language Processing" },
  { name: "Multi-Modal Models" },
  { name: "Explainable AI" },
  { name: "Efficient Deep Learning" },
  { name: "Distributed Systems" },
  { name: "Sensor Fusion" },
];

const newsItems: NewsItem[] = [
  {
    date: "Apr 2025",
    text: "Started PhD studies at Instituto Superior Técnico",
  },
  {
    date: "Mar 2025",
    text: "Paper accepted to ICML 2025",
  },
  {
    date: "Jan 2025",
    text: "Joined the AI-Radiologist research team at ISR",
  },
];

const experiences: ExperienceItem[] = [
  {
    role: "Research Fellow",
    organization: "Institute for Systems and Robotics (ISR)",
    location: "Lisbon",
    period: "Jan 2025 — Present",
    description: [
      "Working on the AI-Radiologist project under Prof. Carlos Santiago and Prof. Catarina Barata.",
      "Developing novel prototype-based approaches for training discriminative and generative models.",
      "Investigating methods for learning prototypes as distributions to enhance flexibility and explainability.",
      "Designing techniques to condition generative models on learned prototypical distributions.",
    ],
  },
  {
    role: "AI Development Lead",
    organization: "Pairwire",
    location: "Lisbon",
    period: "May 2024 — Feb 2025",
    description: [
      "Led the development of AI solutions for automating the generation of consulting reports in the mergers and acquisitions sector.",
      "Worked extensively with LLMs to automate report generation, designing and implementing advanced NLP pipelines (RAG).",
      "Improved data retrieval and contextual relevance.",
      "Developed and integrated GraphRAG systems for enhanced reasoning capabilities.",
    ],
  },
];

const education: EducationItem[] = [
  {
    degree: "PhD in Computer Science, Artificial Intelligence",
    institution: "Instituto Superior Técnico",
    location: "Lisbon, Portugal",
    period: "2025 — Present",
    details: [
      "Research focus: Prototype-based learning for enhanced interpretability in medical image analysis",
      "Advisor: Prof. Carlos Santiago and Prof. Catarina Barata",
    ],
  },
  {
    degree: "MSc in Electrical and Computer Engineering",
    institution: "Instituto Superior Técnico",
    location: "Lisbon, Portugal",
    period: "2022 — 2024",
    details: [
      "Specialization: Control, Robotics, and AI",
      "Thesis: 'Distributed and Centralized Observer Design for Non-Gaussian Noises'",
      "Supervisors: Prof. Daniel Silvestre and Prof. Rita Cunha",
      "GPA: 18.5/20",
    ],
  },
  {
    degree: "BSc in Mechanical Engineering",
    institution: "Instituto Superior Técnico",
    location: "Lisbon, Portugal",
    period: "2019 — 2022",
    details: [
      "Focus: Mechanics, Dynamics, and Control Systems",
      "GPA: 17.2/20",
    ],
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

const teachingExperience: TeachingItem[] = [
  {
    course: "Introduction to Machine Learning",
    role: "Teaching Assistant",
    institution: "Instituto Superior Técnico",
    period: "Spring 2025",
    description: [
      "Led weekly lab sessions for 30 undergraduate students",
      "Developed practical assignments on classification, regression, and neural networks",
      "Held office hours to provide additional guidance on course materials and projects",
    ],
  },
  {
    course: "Advanced Computer Vision",
    role: "Guest Lecturer",
    institution: "Instituto Superior Técnico",
    period: "Fall 2024",
    description: [
      "Delivered guest lectures on prototype-based learning approaches for medical image analysis",
      "Prepared hands-on tutorials for implementing interpretable deep learning models",
    ],
  },
];

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: "Python, MATLAB, C++, TypeScript, JavaScript",
  },
  {
    category: "AI/ML Frameworks",
    skills: "PyTorch, TensorFlow, scikit-learn, Hugging Face, LangChain",
  },
  {
    category: "Tools & Technologies",
    skills: "Git, Docker, Linux, AWS, CUDA",
  },
  {
    category: "Research Skills",
    skills:
      "Scientific Writing, Literature Review, Experimental Design, Statistical Analysis",
  },
];

function createHeader() {
  const header = document.createElement("header");

  const profilePicContainer = document.createElement("div");
  profilePicContainer.className = "profile-pic-container";

  const profilePic = document.createElement("img");
  profilePic.src = profilePicUrl;
  profilePic.alt = "Duarte Leão";
  profilePic.className = "profile-pic";
  profilePicContainer.appendChild(profilePic);

  const headerText = document.createElement("div");
  headerText.className = "header-text";

  const name = document.createElement("h1");
  name.textContent = "Duarte Leão";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = "PhD Student in AI | Research Fellow at ISR";

  const contactDiv = document.createElement("div");
  contactDiv.className = "contact-links";

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

  headerText.appendChild(name);
  headerText.appendChild(title);
  headerText.appendChild(contactDiv);

  header.appendChild(profilePicContainer);
  header.appendChild(headerText);

  return header;
}

function createNavbar() {
  const navbar = document.createElement("div");
  navbar.className = "navbar";

  const nav = document.createElement("nav");

  const sections = [
    { id: "about", name: "About" },
    { id: "publications", name: "Publications" },
    { id: "projects", name: "Projects" },
    { id: "experience", name: "Experience" },
    { id: "education", name: "Education" },
    { id: "teaching", name: "Teaching" },
    { id: "contact", name: "Contact" },
  ];

  sections.forEach((section) => {
    const a = document.createElement("a");
    a.href = `#${section.id}`;
    a.textContent = section.name;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .getElementById(section.id)
        ?.scrollIntoView({ behavior: "smooth" });
    });
    nav.appendChild(a);
  });

  navbar.appendChild(nav);
  return navbar;
}

function createAboutSection() {
  const section = document.createElement("section");
  section.id = "about";

  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h2");
  title.textContent = "About";

  const content = document.createElement("div");
  content.className = "section-content";
  content.innerHTML = aboutContent;

  // Research interests
  const researchInterestsSection = document.createElement("div");
  researchInterestsSection.className = "research-interests";

  const interestsTitle = document.createElement("h3");
  interestsTitle.textContent = "Research Interests";
  researchInterestsSection.appendChild(interestsTitle);

  const interestsList = document.createElement("div");
  interestsList.className = "interests-list";

  researchInterests.forEach((interest) => {
    const interestTag = document.createElement("span");
    interestTag.className = "interest-tag";
    interestTag.textContent = interest.name;
    interestsList.appendChild(interestTag);
  });

  researchInterestsSection.appendChild(interestsList);

  // News section
  const newsSection = document.createElement("div");
  newsSection.className = "section-content";

  const newsTitle = document.createElement("h3");
  newsTitle.textContent = "News";
  newsSection.appendChild(newsTitle);

  newsItems.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.className = "news-item";

    const newsDate = document.createElement("div");
    newsDate.className = "news-date";
    newsDate.textContent = item.date;

    const newsText = document.createElement("div");
    newsText.className = "news-text";
    newsText.textContent = item.text;

    newsItem.appendChild(newsDate);
    newsItem.appendChild(newsText);
    newsSection.appendChild(newsItem);
  });

  // CV download button
  const cvButton = document.createElement("a");
  cvButton.href = "CV.pdf"; // Link to your CV
  cvButton.className = "cv-button";
  cvButton.target = "_blank";

  const cvIcon = document.createElement("i");
  cvIcon.className = "fas fa-file-download";
  cvButton.appendChild(cvIcon);
  cvButton.appendChild(document.createTextNode(" Open CV"));

  container.appendChild(title);
  container.appendChild(content);
  container.appendChild(researchInterestsSection);
  container.appendChild(newsSection);
  container.appendChild(cvButton);
  section.appendChild(container);

  return section;
}

function createPublicationsSection() {
  const section = document.createElement("section");
  section.id = "publications";

  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h2");
  title.textContent = "Publications";

  container.appendChild(title);

  publications.forEach((pub) => {
    const publicationItem = document.createElement("div");
    publicationItem.className = "publication-item";

    const pubTitle = document.createElement("div");
    pubTitle.className = "publication-title";
    pubTitle.textContent = pub.title;

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
        case "demo":
          icon = "fas fa-desktop";
          text = "Demo";
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

    container.appendChild(publicationItem);
  });

  section.appendChild(container);
  return section;
}

function createProjectsSection() {
  const section = document.createElement("section");
  section.id = "projects";

  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h2");
  title.textContent = "Projects";

  container.appendChild(title);

  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.className = "project-item";

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.name;

    const projectDesc = document.createElement("p");
    projectDesc.textContent = project.description;

    const projectTech = document.createElement("p");
    if (project.technologies) {
      const techSpan = document.createElement("span");
      techSpan.style.color = "#b0b0b0";
      techSpan.textContent = "Technologies: ";
      projectTech.appendChild(techSpan);
      projectTech.appendChild(
        document.createTextNode(project.technologies.join(", "))
      );
    }

    const projectLinks = document.createElement("p");

    if (project.githubUrl) {
      const githubLink = document.createElement("a");
      githubLink.href = project.githubUrl;
      githubLink.target = "_blank";
      githubLink.rel = "noopener noreferrer";

      const githubIcon = document.createElement("i");
      githubIcon.className = "fab fa-github";
      githubLink.appendChild(githubIcon);
      githubLink.appendChild(document.createTextNode(" Code"));

      projectLinks.appendChild(githubLink);
    }

    if (project.demoUrl) {
      const demoLink = document.createElement("a");
      demoLink.href = project.demoUrl;
      demoLink.target = "_blank";
      demoLink.rel = "noopener noreferrer";
      demoLink.style.marginLeft = "1rem";

      const demoIcon = document.createElement("i");
      demoIcon.className = "fas fa-external-link-alt";
      demoLink.appendChild(demoIcon);
      demoLink.appendChild(document.createTextNode(" Demo"));

      projectLinks.appendChild(demoLink);
    }

    projectItem.appendChild(projectTitle);
    projectItem.appendChild(projectDesc);
    projectItem.appendChild(projectTech);
    projectItem.appendChild(projectLinks);

    container.appendChild(projectItem);
  });

  section.appendChild(container);
  return section;
}

function createExperienceSection() {
  const section = document.createElement("section");
  section.id = "experience";

  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h2");
  title.textContent = "Experience";

  container.appendChild(title);

  experiences.forEach((exp) => {
    const experienceItem = document.createElement("div");
    experienceItem.className = "experience-item";

    const role = document.createElement("h3");
    role.textContent = exp.role;

    const orgInfo = document.createElement("div");
    orgInfo.className = "organization";
    orgInfo.textContent = `${exp.organization}, ${exp.location} • ${exp.period}`;

    experienceItem.appendChild(role);
    experienceItem.appendChild(orgInfo);

    if (exp.description && exp.description.length > 0) {
      const descriptionList = document.createElement("ul");

      exp.description.forEach((descItem) => {
        const listItem = document.createElement("li");
        listItem.textContent = descItem;
        descriptionList.appendChild(listItem);
      });

      experienceItem.appendChild(descriptionList);
    }

    container.appendChild(experienceItem);
  });

  section.appendChild(container);
  return section;
}

function createEducationSection() {
  const section = document.createElement("section");
  section.id = "education";

  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h2");
  title.textContent = "Education";

  container.appendChild(title);

  education.forEach((edu) => {
    const educationItem = document.createElement("div");
    educationItem.className = "education-item";

    const degree = document.createElement("h3");
    degree.textContent = edu.degree;

    const instInfo = document.createElement("div");
    instInfo.className = "institution";
    instInfo.textContent = `${edu.institution}, ${edu.location} • ${edu.period}`;

    educationItem.appendChild(degree);
    educationItem.appendChild(instInfo);

    if (edu.details && edu.details.length > 0) {
      const detailsList = document.createElement("ul");

      edu.details.forEach((detail) => {
        const listItem = document.createElement("li");
        listItem.textContent = detail;
        detailsList.appendChild(listItem);
      });

      educationItem.appendChild(detailsList);
    }

    container.appendChild(educationItem);
  });

  section.appendChild(container);
  return section;
}

function createTeachingSection() {
  const section = document.createElement("section");
  section.id = "teaching";

  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h2");
  title.textContent = "Teaching";

  container.appendChild(title);

  teachingExperience.forEach((teaching) => {
    const teachingItem = document.createElement("div");
    teachingItem.className = "experience-item";

    const course = document.createElement("h3");
    course.textContent = teaching.course;

    const roleInfo = document.createElement("div");
    roleInfo.className = "organization";
    roleInfo.textContent = `${teaching.role}, ${teaching.institution} • ${teaching.period}`;

    teachingItem.appendChild(course);
    teachingItem.appendChild(roleInfo);

    if (teaching.description && teaching.description.length > 0) {
      const descriptionList = document.createElement("ul");

      teaching.description.forEach((descItem) => {
        const listItem = document.createElement("li");
        listItem.textContent = descItem;
        descriptionList.appendChild(listItem);
      });

      teachingItem.appendChild(descriptionList);
    }

    container.appendChild(teachingItem);
  });

  section.appendChild(container);
  return section;
}

function createSkillsSection() {
  const section = document.createElement("section");
  section.id = "skills";

  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h2");
  title.textContent = "Skills";

  container.appendChild(title);

  const skillsList = document.createElement("ul");
  skillsList.className = "skills-list";

  skillCategories.forEach((skillCat) => {
    const skillItem = document.createElement("li");

    const category = document.createElement("strong");
    category.textContent = `${skillCat.category}: `;

    skillItem.appendChild(category);
    skillItem.appendChild(document.createTextNode(skillCat.skills));

    skillsList.appendChild(skillItem);
  });

  container.appendChild(skillsList);
  section.appendChild(container);
  return section;
}

function createContactSection() {
  const section = document.createElement("section");
  section.id = "contact";

  const container = document.createElement("div");
  container.className = "container";

  const title = document.createElement("h2");
  title.textContent = "Contact";

  const content = document.createElement("div");
  content.className = "section-content";
  content.innerHTML =
    "<p>Feel free to reach out to me for research collaborations, academic inquiries, or professional opportunities.</p>";

  const contactDiv = document.createElement("div");
  contactDiv.className = "contact-links";

  contactLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = link.name;
    a.style.fontSize = "1.5rem";
    a.style.margin = "0 1rem";

    const i = document.createElement("i");
    i.className = link.icon || "";
    a.appendChild(i);

    contactDiv.appendChild(a);
  });

  container.appendChild(title);
  container.appendChild(content);
  container.appendChild(contactDiv);
  section.appendChild(container);

  return section;
}

function createFooter() {
  const footer = document.createElement("footer");

  const currentYear = new Date().getFullYear();
  footer.innerHTML = `&copy; ${currentYear} Duarte Leão. All rights reserved.`;

  return footer;
}

// Initialize the page
function init() {
  const rootElement = document.getElementById("root") as HTMLElement;
  if (!rootElement) return;

  rootElement.appendChild(createHeader());
  rootElement.appendChild(createNavbar());
  rootElement.appendChild(createAboutSection());
  rootElement.appendChild(createPublicationsSection());
  rootElement.appendChild(createProjectsSection());
  rootElement.appendChild(createExperienceSection());
  rootElement.appendChild(createEducationSection());
  rootElement.appendChild(createTeachingSection());
  rootElement.appendChild(createSkillsSection());
  rootElement.appendChild(createContactSection());
  rootElement.appendChild(createFooter());

  // Add active class to navbar links on scroll
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let current: string | null = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop - 200 &&
        window.scrollY < sectionTop + sectionHeight - 200
      ) {
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
  });
}

document.addEventListener("DOMContentLoaded", init);

export {};
