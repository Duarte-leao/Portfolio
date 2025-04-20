// Placeholder for profile picture URL - replace with your actual image URL
const profilePicUrl = "./files/portfolio image.png"; // Using local portfolio image with proper path
const contactLinks = [
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
  <p>My Master's thesis, supervised by Professors <a href="https://www.researchgate.net/profile/Daniel-Silvestre-2" target="_blank">Daniel Silvestre</a> and <a href="https://isr.tecnico.ulisboa.pt/author/ritamariamendesdealmeidacorreiada/" target="_blank">Rita Cunha</a>, tackled sensor fusion challenges using distributed and centralized observer designs for non-Gaussian noises. Professionally, I led AI development at <a href="https://pairwire.co/" target="_blank">Pairwire</a>, a startup focused on optimizing consultants' work, where I designed cutting-edge NLP and GraphRAG solutions to automate consulting reports.</p>
  <p>My research interests include machine learning, computer vision, natural language processing, and multi-modal models with a focus on developing more efficient and interpretable AI systems.</p>
`;
const researchInterests = [
    { name: "Machine Learning" },
    { name: "Deep Learning" },
    { name: "Computer Vision" },
    { name: "Representation Learning" },
    { name: "Generative Models" },
    { name: "Explainable AI" },
];
const newsItems = [
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
const experiences = [
    {
        role: "Research Fellow",
        organization: '<a href="https://isr.tecnico.ulisboa.pt/" target="_blank">Institute for Systems and Robotics (ISR)</a>',
        location: "Lisbon",
        period: "Jan 2025 — Present",
        description: [
            'Working on the <a href="https://isr.tecnico.ulisboa.pt/projects/integration-of-an-artificial-intelligence-agent-in-radiology-to-assist-in-breast-cancer-diagnosis/" target="_blank">AI-Radiologist</a> project under Prof. <a href="https://sites.google.com/tecnico.ulisboa.pt/carlossantiago" target="_blank">Carlos Santiago</a> and Prof. <a href="http://users.isr.ist.utl.pt/~cbarata/#/" target="_blank">Catarina Barata</a>.',
            "Developing novel prototype-based approaches for training discriminative and generative models.",
            "Investigating methods for learning prototypes as distributions to enhance flexibility and explainability.",
            "Designing techniques to condition generative models on learned prototypical distributions.",
        ],
    },
    {
        role: "AI Development Lead",
        organization: '<a href="https://pairwire.co/" target="_blank">Pairwire</a>',
        location: "Lisbon",
        period: "May 2024 — Feb 2025",
        description: [
            "Led the development of AI solutions for automating the generation of consulting reports in the mergers and acquisitions sector.",
            "Worked extensively with LLMs to automate report generation, designing and implementing advanced NLP pipelines (RAG).",
            "Improved data retrieval and contextual relevance.",
            "Developed and integrated GraphRAG systems for enhanced reasoning capabilities.",
        ],
    },
    {
        role: "Machine Learning Engineer",
        organization: '<a href="https://www.gls-portugal.pt/en/" target="_blank">General Logistics Systems (GLS)</a>',
        location: "Lisbon",
        period: "Dec 2023 — Jan 2025",
        description: [
            "Contributed to the development of GLS Portugal's and Germany's AI department.",
            "Worked on an NLP pipeline that incorporated a BERT model to extract the embedding of customer names and used additional deep learning methods to classify customers as either businesses or individuals. The model achieved 91% balanced accuracy.",
            "Developed an anomaly detection system to predict anomalies in parcel life cycles, using a two-stage model incorporating supervised regression to estimate expected event timings and logistic regression to classify potential claims, achieving 84% prediction accuracy.",
            "Worked on the development of a general CI/CD infrastructure pipeline for future data science projects",
        ],
    },
    {
        role: "Graduate Researcher",
        organization: '<a href="https://welcome.isr.tecnico.ulisboa.pt/" target="_blank">Institute for Systems and Robotics (ISR)</a>',
        location: "Lisbon",
        period: "Jan 2022 — Nov 2023",
        description: [
            'Worked on the <a href="https://isr.tecnico.ulisboa.pt/projects/forest-fire-prevention-through-uncertainty-minimization-in-surveillance/" target="_blank">FirePuma</a> project under Prof. <a href="https://www.researchgate.net/profile/Daniel-Silvestre-2" target="_blank">Daniel Silvestre</a> supervision.',
            "Developed a sensor fusion algorithm utilizing the Wasserstein Barycenter approach to integrate data from multiple sources, when the noise is not necessarily Gaussian.",
            "Implemented a Bayes filter with polynomial approximation of probability density functions to facilitate state estimation for non-Gaussian noises.",
            "Implemented and integrated Characteristic Function filters in Model Predictive Controls to address pursuer-evader problems, accounting for non-Gaussian random walks of the evader.",
        ],
    },
];
const education = [
    {
        degree: "PhD in Computer Science, Artificial Intelligence",
        institution: "Instituto Superior Técnico",
        location: "Lisbon, Portugal",
        period: "2025 — Present",
        details: [
            "Research focus: Prototype-based learning for enhanced interpretability in medical image analysis",
            'Advisor: <a href="https://sites.google.com/tecnico.ulisboa.pt/carlossantiago" target="_blank">Prof. Carlos Santiago</a> and <a href="http://users.isr.ist.utl.pt/~cbarata/#/" target="_blank">Prof. Catarina Barata</a>',
        ],
    },
    {
        degree: "MSc in Electrical and Computer Engineering",
        institution: '<a href="https://tecnico.ulisboa.pt/pt/" target="_blank">Instituto Superior Técnico</a>',
        location: "Lisbon, Portugal",
        period: "2022 — 2024",
        details: [
            "Specialization: Control, Robotics, and AI",
            "Thesis: 'Distributed and Centralized Observer Design for Non-Gaussian Noises'",
            'Supervisors: <a href="https://www.researchgate.net/profile/Daniel-Silvestre-2" target="_blank">Prof. Daniel Silvestre</a> and <a href="https://isr.tecnico.ulisboa.pt/author/ritamariamendesdealmeidacorreiada/" target="_blank">Prof. Rita Cunha</a>',
            "GPA: 18/20",
        ],
    },
    {
        degree: "BSc in Mechanical Engineering",
        institution: "Instituto Superior Técnico",
        location: "Lisbon, Portugal",
        period: "2018 — 2021",
        details: ["Focus: Mechanics, Dynamics, and Control Systems", "GPA: 15/20"],
    },
];
const publications = [
    {
        title: "Prototype-based Learning for Enhanced Interpretability in Medical Image Analysis",
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
        title: "GraphRAG: Enhancing Reasoning Capabilities in Retrieval-Augmented Generation Systems",
        authors: "Leão, D., Santos, A., Silva, M.",
        venue: "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
        year: "2024",
        links: {
            pdf: "#",
            code: "https://github.com/duarteleao/graphrag",
            demo: "#",
        },
    },
];
const projects = [
    {
        name: "AI-Radiologist",
        description: "Research project developing explainable AI models for medical image analysis. Created prototype-based learning approaches that improve model interpretability while maintaining high accuracy.",
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
        description: "An advanced retrieval-augmented generation framework that uses graph structures to enhance reasoning capabilities of large language models.",
        technologies: ["Python", "LangChain", "NetworkX", "Large Language Models"],
        githubUrl: "https://github.com/duarteleao/graphrag",
        demoUrl: "#",
    },
    {
        name: "Distributed Observer Toolkit",
        description: "Open-source toolkit implementing distributed and centralized observer designs for systems with non-Gaussian noise distributions.",
        technologies: ["MATLAB", "Python", "Statistical Signal Processing"],
        githubUrl: "https://github.com/duarteleao/distributed-observer",
    },
];
const teachingExperience = [
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
const skillCategories = [
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
        skills: "Scientific Writing, Literature Review, Experimental Design, Statistical Analysis",
    },
];
function createThemeToggle() {
    const themeToggle = document.createElement("button");
    themeToggle.className = "theme-toggle";
    themeToggle.setAttribute("aria-label", "Toggle dark/light mode");
    const icon = document.createElement("i");
    icon.className = "fas fa-moon"; // Default dark mode icon
    themeToggle.appendChild(icon);
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            icon.className = "fas fa-sun";
            localStorage.setItem("theme", "light");
        }
        else {
            icon.className = "fas fa-moon";
            localStorage.setItem("theme", "dark");
        }
    });
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        icon.className = "fas fa-sun";
    }
    return themeToggle;
}
function createHeroSection() {
    const heroSection = document.createElement("section");
    heroSection.className = "hero-section";
    const heroContent = document.createElement("div");
    heroContent.className = "hero-content";
    const heroTitle = document.createElement("h1");
    heroTitle.className = "hero-title";
    heroTitle.textContent = "Duarte Leão";
    const heroSubtitle = document.createElement("div");
    heroSubtitle.className = "hero-subtitle";
    heroSubtitle.textContent =
        "AI Researcher | PhD Student | Machine Learning Engineer";
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
    const scrollIndicator = document.createElement("div");
    scrollIndicator.className = "scroll-indicator";
    scrollIndicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
    scrollIndicator.addEventListener("click", () => {
        var _a;
        (_a = document.getElementById("about")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    });
    heroContent.appendChild(heroTitle);
    heroContent.appendChild(heroSubtitle);
    heroContent.appendChild(contactDiv);
    heroSection.appendChild(heroContent);
    heroSection.appendChild(scrollIndicator);
    return heroSection;
}
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
        { id: "cv", name: "CV", external: true, url: "./files/CV.pdf" }, // Add CV as part of the sections array
    ];
    sections.forEach((section) => {
        const a = document.createElement("a");
        if (section.external) {
            // For external links like CV
            a.href = section.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        }
        else {
            // For internal section links
            a.href = `#${section.id}`;
            a.addEventListener("click", (e) => {
                var _a;
                e.preventDefault();
                (_a = document
                    .getElementById(section.id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            });
        }
        a.textContent = section.name;
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
    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(researchInterestsSection);
    container.appendChild(newsSection);
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
    const gridLayout = document.createElement("div");
    gridLayout.className = "grid-layout";
    publications.forEach((pub) => {
        const card = document.createElement("div");
        card.className = "card";
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
        card.appendChild(publicationItem);
        gridLayout.appendChild(card);
    });
    container.appendChild(gridLayout);
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
    const gridLayout = document.createElement("div");
    gridLayout.className = "grid-layout";
    projects.forEach((project) => {
        const card = document.createElement("div");
        card.className = "card";
        const projectItem = document.createElement("div");
        projectItem.className = "project-item";
        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.name;
        const projectDesc = document.createElement("p");
        projectDesc.className = "project-desc";
        projectDesc.textContent = project.description;
        const projectTech = document.createElement("p");
        projectTech.className = "project-tech";
        if (project.technologies) {
            const techSpan = document.createElement("span");
            techSpan.style.color = "#b0b0b0";
            techSpan.textContent = "Technologies: ";
            projectTech.appendChild(techSpan);
            projectTech.appendChild(document.createTextNode(project.technologies.join(", ")));
        }
        const projectLinks = document.createElement("p");
        projectLinks.className = "project-links";
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
        card.appendChild(projectItem);
        gridLayout.appendChild(card);
    });
    container.appendChild(gridLayout);
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
    // Display current/recent experience normally
    const recentExperiences = experiences.slice(0, 2);
    recentExperiences.forEach((exp) => createExperienceItem(container, exp, false));
    // Make older experiences collapsible
    if (experiences.length > 2) {
        // Create a button that will act as the collapsible header
        const collapsibleButton = document.createElement("button");
        collapsibleButton.className = "collapsible-button";
        collapsibleButton.innerHTML = `Previous Experience <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>`;
        // Create the content container
        const content = document.createElement("div");
        content.className = "collapsible-content";
        // Create the inner content wrapper with proper padding
        const contentInner = document.createElement("div");
        contentInner.className = "collapsible-content-inner";
        // Add older experiences to the inner container
        experiences.slice(2).forEach((exp) => {
            createExperienceItem(contentInner, exp, true);
        });
        // Add the inner container to the content container
        content.appendChild(contentInner);
        // Add the event listener to the button
        collapsibleButton.addEventListener("click", function () {
            this.classList.toggle("active");
            // Toggle the icon rotation
            const icon = this.querySelector(".toggle-icon i");
            if (icon) {
                icon.style.transform = this.classList.contains("active")
                    ? "rotate(180deg)"
                    : "";
            }
            // Toggle the content visibility with proper height calculation
            if (content.style.maxHeight) {
                content.style.maxHeight = "";
            }
            else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
        // Add to container
        container.appendChild(collapsibleButton);
        container.appendChild(content);
    }
    section.appendChild(container);
    return section;
}
function createExperienceItem(container, exp, isCollapsible) {
    const experienceItem = document.createElement("div");
    experienceItem.className = "experience-item";
    const role = document.createElement("h3");
    role.textContent = exp.role;
    // Use a different approach for setting HTML content
    const orgInfo = document.createElement("div");
    orgInfo.className = "organization";
    // Create a temporary div to handle HTML content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = `${exp.organization}, ${exp.location} • ${exp.period}`;
    // Copy the innerHTML to the target element
    while (tempDiv.firstChild) {
        orgInfo.appendChild(tempDiv.firstChild);
    }
    experienceItem.appendChild(role);
    experienceItem.appendChild(orgInfo);
    if (exp.description && exp.description.length > 0) {
        const descriptionList = document.createElement("ul");
        exp.description.forEach((descItem) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = descItem;
            descriptionList.appendChild(listItem);
        });
        experienceItem.appendChild(descriptionList);
    }
    container.appendChild(experienceItem);
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
        // Use the same approach as in createExperienceSection
        const instInfo = document.createElement("div");
        instInfo.className = "institution";
        // Create a temporary div to handle HTML content
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = `${edu.institution}, ${edu.location} • ${edu.period}`;
        // Copy the innerHTML to the target element
        while (tempDiv.firstChild) {
            instInfo.appendChild(tempDiv.firstChild);
        }
        educationItem.appendChild(degree);
        educationItem.appendChild(instInfo);
        if (edu.details && edu.details.length > 0) {
            const detailsList = document.createElement("ul");
            edu.details.forEach((detail) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = detail;
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
        category.textContent = `${skillCat.category}`;
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
    const rootElement = document.getElementById("root");
    if (!rootElement)
        return;
    // Add theme toggle button
    document.body.appendChild(createThemeToggle());
    // Add hero section first
    rootElement.appendChild(createHeroSection());
    // Create a wrapper div for the rest of the content with proper spacing
    const contentWrapper = document.createElement("div");
    contentWrapper.style.marginTop = "100vh"; // Add margin equal to the hero height
    // Add the original header with profile image
    contentWrapper.appendChild(createHeader());
    contentWrapper.appendChild(createNavbar());
    contentWrapper.appendChild(createAboutSection());
    contentWrapper.appendChild(createPublicationsSection());
    contentWrapper.appendChild(createProjectsSection());
    contentWrapper.appendChild(createExperienceSection());
    contentWrapper.appendChild(createEducationSection());
    contentWrapper.appendChild(createTeachingSection());
    contentWrapper.appendChild(createSkillsSection());
    contentWrapper.appendChild(createContactSection());
    contentWrapper.appendChild(createFooter());
    // Add the content wrapper to the root
    rootElement.appendChild(contentWrapper);
    // Add active class to navbar links on scroll
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav a");
        let current = null;
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200 &&
                window.scrollY < sectionTop + sectionHeight - 200) {
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
    // Initialize collapsible sections
    document.querySelectorAll(".collapsible-header").forEach((header) => {
        header.addEventListener("click", () => {
            const parent = header.parentElement;
            if (parent) {
                parent.classList.toggle("active");
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", init);
export {};
