// Placeholder for profile picture URL - replace with your actual image URL
const profilePicUrl = "./files/portfolio image.png"; // Using local portfolio image with proper path
const contactLinks = [
    {
        name: "Email",
        url: "mailto:duarte.leao@tecnico.ulisboa.pt",
        icon: "fas fa-envelope",
    },
    {
        name: "GitHub",
        url: "https://github.com/Duarte-leao",
        icon: "fab fa-github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/duarte-le%C3%A3o-96b329211/",
        icon: "fab fa-linkedin",
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
const researchInterests = [
    { name: "Machine Learning" },
    { name: "Deep Learning" },
    { name: "Computer Vision" },
    { name: "Representation" },
    { name: "Generative Models" },
    { name: "Explainable AI" },
];
const stats = [
    {
        number: "3",
        label: "Publications"
    },
    {
        number: "2",
        label: "Venues"
    }
];
const publications = [
    {
        title: "Prototype-based Learning for Enhanced Interpretability in Medical Image Analysis",
        authors: "Leão, D., Santiago, C., Barata, C.",
        venue: "International Conference on Machine Learning (ICML)",
        year: "2025",
        links: {
            pdf: "#",
            code: "https://github.com/duarteleao/prototype-learning"
        },
    },
    {
        title: "Distributed Observer Design for Systems with Non-Gaussian Noise",
        authors: "Leão, D., Silvestre, D., Cunha, R.",
        venue: "IEEE Transactions on Signal Processing",
        year: "2024",
        links: {
            pdf: "#",
            code: "https://github.com/duarteleao/distributed-observer"
        },
    },
    {
        title: "GraphRAG: Enhancing Reasoning Capabilities in Retrieval-Augmented Generation",
        authors: "Leão, D., Santos, A., Silva, M.",
        venue: "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
        year: "2024",
        links: {
            pdf: "#",
            code: "https://github.com/duarteleao/graphrag"
        },
    },
];
const projects = [
    {
        name: "AI-Radiologist",
        description: "Developed prototype-based explainable AI models for medical image analysis through prototype-based learning approaches. Enhanced model interpretability.",
        technologies: ["PyTorch", "TensorFlow", "Explainable AI"],
        githubUrl: "https://github.com/duarteleao/ai-radiologist",
    },
    {
        name: "Prototype Learning",
        description: "Develop novel and explainable models for medical image analysis through prototype-based learning approach model interpretability.",
        technologies: ["PyTorch", "Medical Image Analysis", "Explainable AI"],
        githubUrl: "#",
    },
];
function createSidebar() {
    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    // Profile picture
    const profilePicContainer = document.createElement("div");
    profilePicContainer.className = "profile-pic-container";
    const profilePic = document.createElement("img");
    profilePic.src = profilePicUrl;
    profilePic.alt = "Duarte Leão";
    profilePic.className = "profile-pic";
    profilePicContainer.appendChild(profilePic);
    sidebar.appendChild(profilePicContainer);
    // Name
    const name = document.createElement("h1");
    name.textContent = "Duarte Leão";
    sidebar.appendChild(name);
    // Title
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "Bridging AI and Human Understanding through Interpretable Models";
    sidebar.appendChild(title);
    // Navigation links
    const nav = document.createElement("nav");
    const sections = [
        { id: "about", name: "About" },
        { id: "research", name: "Research" },
        { id: "publications", name: "Publications" },
        { id: "projects", name: "Projects" },
        { id: "contact", name: "Contact" },
        { id: "cv", name: "Download CV", external: true, url: "./files/CV.pdf" }
    ];
    sections.forEach((section) => {
        const a = document.createElement("a");
        if (section.external) {
            a.href = section.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        }
        else {
            a.href = `#${section.id}`;
            a.addEventListener("click", (e) => {
                var _a;
                e.preventDefault();
                (_a = document
                    .getElementById(section.id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                // Set active class
                document.querySelectorAll("nav a").forEach(link => {
                    link.classList.remove("active");
                });
                a.classList.add("active");
            });
        }
        a.textContent = section.name;
        nav.appendChild(a);
    });
    sidebar.appendChild(nav);
    // Contact links at the bottom of sidebar
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
    sidebar.appendChild(contactDiv);
    return sidebar;
}
function createMainContent() {
    const mainContent = document.createElement("div");
    mainContent.className = "main-content";
    // Stats box
    const statsContainer = document.createElement("div");
    statsContainer.className = "stats-container";
    stats.forEach(stat => {
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
    mainContent.appendChild(statsContainer);
    // About section
    const aboutSection = createAboutSection();
    mainContent.appendChild(aboutSection);
    // Research interests section
    const researchSection = createResearchInterestsSection();
    mainContent.appendChild(researchSection);
    // Publications section
    const publicationsSection = createPublicationsSection();
    mainContent.appendChild(publicationsSection);
    // Projects section
    const projectsSection = createProjectsSection();
    mainContent.appendChild(projectsSection);
    // Contact section
    const contactSection = createContactSection();
    mainContent.appendChild(contactSection);
    return mainContent;
}
function createAboutSection() {
    const section = document.createElement("section");
    section.id = "about";
    const title = document.createElement("h2");
    title.textContent = "About";
    section.appendChild(title);
    const content = document.createElement("div");
    content.className = "section-content";
    content.innerHTML = aboutContent;
    section.appendChild(content);
    return section;
}
function createResearchInterestsSection() {
    const section = document.createElement("section");
    section.id = "research";
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
            project.technologies.forEach(tech => {
                const techBadge = document.createElement("span");
                techBadge.className = "interest-tag";
                techBadge.style.marginRight = "8px";
                techBadge.style.marginBottom = "8px";
                techBadge.textContent = tech;
                techContainer.appendChild(techBadge);
            });
            projectItem.appendChild(techContainer);
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
    content.innerHTML = "<p>For research interests, research inquiries, or academic/professional opportunities.</p>";
    section.appendChild(content);
    return section;
}
// Initialize the page
function init() {
    const rootElement = document.getElementById("root");
    if (!rootElement)
        return;
    // Create page layout
    const pageLayout = document.createElement("div");
    pageLayout.className = "page-layout";
    // Create sidebar
    const sidebar = createSidebar();
    pageLayout.appendChild(sidebar);
    // Create main content
    const mainContent = createMainContent();
    pageLayout.appendChild(mainContent);
    rootElement.appendChild(pageLayout);
    // Set the initial active navigation item
    const firstNavLink = document.querySelector("nav a");
    if (firstNavLink) {
        firstNavLink.classList.add("active");
    }
    // Add active class to navbar links on scroll
    window.addEventListener("scroll", () => {
        // Only update active class if screen is large enough
        if (window.innerWidth <= 1024)
            return;
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav a");
        let current = null;
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100 &&
                window.scrollY < sectionTop + sectionHeight - 100 &&
                section.id !== "cv" // Ignore CV section
            ) {
                current = section.id;
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
