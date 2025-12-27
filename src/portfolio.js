/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shivam's Portfolio",
  description:
    "Competitive Programmer and Data Science Enthusiast",
  og: {
    title: "Shivam Chaudhari Portfolio",
    type: "website",
    url: "http://shivamchaudhari.com/",
  },
};

//Home Page
const greeting = {
  title: "Shivam Chaudhari",
  logo_name: "ShivamChaudhari",
  nickname: "Code_Hunter",
  subTitle:
    "Competitive Programmer | Data Science Enthusiast | C++ Developer",
  resumeLink:
    "", // Add your Drive link here later when you have a PDF resume
  portfolio_repository: "https://github.com/CodeHunter2703/portfolio",
  githubProfile: "https://github.com/CodeHunter2703",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/CodeHunter2703",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shivam-chaudhari-285259341/",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5", 
  },
  {
    name: "X-Twitter",
    link: "https://x.com/shivamcode2703",
    fontAwesomeIcon: "fa-x-twitter", 
    backgroundColor: "#000000", 
  },
  {
    name: "Gmail",
    link: "mailto:your_email@gmail.com", // Add your email if you want
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
];

const skills = {
  data: [
    {
      title: "C++ & Competitive Programming",
      fileName: "FullStackImg", 
      skills: [
        "⚡ Solving algorithmic problems on LeetCode & Codeforces",
        "⚡ High-performance programming using C++ and STL",
        "⚡ Learning Game Development and Physics Simulations (SFML)",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Codeforces",
          fontAwesomeClassname: "simple-icons:codeforces",
          style: {
             color: "#1F8ACB",
          },
        },
        {
          skillName: "LeetCode",
          fontAwesomeClassname: "simple-icons:leetcode",
          style: {
            color: "#F79F1B",
          },
        },
      ],
    },
    {
      title: "Data Science & ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Data Cleaning, Preprocessing, and Exploratory Data Analysis (EDA)",
        "⚡ Building Predictive Models (Breast Cancer Prediction, Credit Risk)",
        "⚡ Visualizing data using Pandas, Matplotlib, and Seaborn",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
      ],
    },
    {
      title: "Databases",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Extracting and managing data using MySQL",
        "⚡ Integrating SQL databases with Python backends",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Code_Hunter2703/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/Protein_150g",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Pandit Deendayal Energy University (PDPU)",
      subtitle: "B.Tech. in Information and Communication Technology (ICT)",
      logo_path: "pdpu_logo.png", 
      alt_name: "PDPU",
      duration: "2024 - 2028",
      descriptions: [
        "⚡ Studying core CS fundamentals: Data Structures, Algorithms, and OOP.",
        "⚡ Active participant in Competitive Programming contests.",
        "⚡ Focusing on Data Science and C++ development.",
      ],
      website_link: "https://www.pdpu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // Leave empty for now to avoid showing template certificates
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internships",
  description:
    "I am currently focusing on my Bachelor's degree and improving my problem-solving skills through competitive programming.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        // Placeholder - you can remove this object if you want the section blank
        {
          title: "Competitive Programmer",
          company: "Self-Paced",
          company_url: "",
          logo_path: "codeforces_logo.png", 
          duration: "Present",
          location: "Remote",
          description:
            "Solving complex algorithmic problems on LeetCode and Codeforces. Working on improving rank and rating.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects focus on Data Science, Machine Learning, and efficient Backend Systems.",
  avatar_image_path: "projects_image.svg",
};

// Publications Page (Repurposed as "Selected Projects" to show only what YOU want)
const publicationsHeader = {
  title: "Selected Projects",
  description:
    "A curated list of my key technical projects.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "exes-man",
      name: "Exes Man (Expense Manager)",
      createdAt: "2025-10-04T00:00:00Z",
      description:
        "A complete Expense Management system (Repo: Odoo). Helps users track daily spending with a clean interface.",
      url: "https://github.com/CodeHunter2703/Odoo",
    },
    {
      id: "credit-risk",
      name: "Credit Risk Assessment",
      createdAt: "2025-10-23T00:00:00Z",
      description:
        "A Data Science project analyzing financial data to predict credit risk. Built using Python and Jupyter Notebooks.",
      url: "https://github.com/CodeHunter2703/Credit-Risk-assesment",
    },
    {
      id: "breast-cancer",
      name: "Breast Cancer Prediction",
      createdAt: "2025-12-10T00:00:00Z",
      description:
        "A Machine Learning model trained to predict breast cancer using medical datasets. Implemented in Python.",
      url: "https://github.com/CodeHunter2703/Breast-cancer-prediction-",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png", 
    description:
      "I am available on LinkedIn and X. Feel free to reach out for collaborations on CP or Data Science projects.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I document my learning journey in tech and coding.",
    link: "https://github.com/CodeHunter2703", 
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ahmedabad, Gujarat, India",
    locality: "Ahmedabad",
    country: "India",
    region: "Gujarat",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/YOUR_LINK",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
