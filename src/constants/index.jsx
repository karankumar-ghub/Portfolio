import { Monitor, PenTool, Cpu, Globe, Code, Terminal, Github, Layout } from 'lucide-react';

// --- PROJECTS ---
export const PROJECTS = [
  {
    id: "neon-ecommerce", // <--- Unique ID for the URL
    title: "Neon E-Commerce",
    category: "Web Application",
    desc: "A futuristic shopping dashboard featuring dark mode, real-time cart updates, and GSAP page transitions.",
    tech: ["React", "Redux", "Tailwind", "GSAP"],
    image: "https://imgs.search.brave.com/GNMXAT8h7hzMjc-BZTwnVxIGbynOF0bK5-2oScWN_f8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzA2LzQyLzgy/LzM2MF9GXzQwNjQy/ODI0OV93THZ4TFU5/ZlJXb25acmdaaThs/akJaMmVjamlpMW5B/by5qcGc",
    challenge: "The main challenge was managing complex global state for the shopping cart while maintaining 60fps animations. The dark mode toggle also needed to switch themes instantly without page reload.",
    solution: "I utilized Redux Toolkit for efficient state management and CSS variables for the theme engine. For animations, I used GSAP's timeline feature to sequence the entrance effects, ensuring no layout thrashing occurred."
  },
  {
    id: "cyber-social",
    title: "Cyber Social",
    category: "Social Platform",
    desc: "A minimal social media web app focusing on clean typography and smooth interaction animations.",
    tech: ["Next.js", "Framer Motion", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
    challenge: "Building a real-time feed that scales was difficult. I also wanted to implement a 'skeleton loading' state that felt premium, not generic.",
    solution: "I used Next.js server-side rendering (SSR) for initial load speed and SWR for real-time data fetching. The skeleton screens were custom-designed in Figma to match the exact layout of the final content."
  },
  {
    id: "portfolio-v1",
    title: "Portfolio V1",
    category: "Personal Website",
    desc: "My previous portfolio site. Built to demonstrate mastery of grid layouts and responsive design principles.",
    tech: ["HTML", "SCSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    challenge: "This was my first attempt at a fully responsive grid system without using any CSS frameworks like Bootstrap or Tailwind.",
    solution: "I relied heavily on CSS Grid and Flexbox. I created a custom SASS mixin library to handle breakpoints, ensuring the typography scaled fluidly from mobile to 4K screens."
  }
];

// --- SERVICES ---
export const SERVICES = [
  { icon: <Monitor size={32} />, title: "Web Development", desc: "Building blazing fast web apps with React & Next.js. I ensure your site loads instantly and ranks high on Google." },
  { icon: <PenTool size={32} />, title: "UI/UX Design", desc: "Crafting intuitive interfaces with modern aesthetics. I use Figma to prototype designs before writing a single line of code." },
  { icon: <Cpu size={32} />, title: "Performance Optimization", desc: "Optimizing for 100/100 Lighthouse scores. I clean up code, optimize images, and ensure accessibility compliance." },
  { icon: <Globe size={32} />, title: "SEO Services", desc: "Technical SEO to make sure your portfolio or business site gets seen by the right people." },
];

// --- PROCESS ---
export const PROCESS_STEPS = [
  { num: "01", title: "Discovery", desc: "Understanding the core problem and user needs." },
  { num: "02", title: "Wireframe", desc: "Sketching the layout and user flow structure." },
  { num: "03", title: "Development", desc: "Writing clean, scalable code with modern stacks." },
  { num: "04", title: "Polish", desc: "Adding animations, transitions and optimizing speed." },
];

// --- ABOUT SECTION DATA ---
export const TOOLKIT_ITEMS = [
  { name: "React", icon: <Code /> },
  { name: "Tailwind", icon: <Layout /> },
  { name: "Figma", icon: <PenTool /> },
  { name: "VS Code", icon: <Terminal /> },
  { name: "Git", icon: <Github /> },
  { name: "Next.js", icon: <Globe /> }
];

export const SKILLS_STATS = [
  { label: "HTML/CSS", val: "95%" },
  { label: "JavaScript", val: "90%" },
  { label: "React.js", val: "85%" },
  { label: "GSAP/Animation", val: "80%" },
];

export const EDUCATION_TIMELINE = [
  { title: "B.C.A.", year: "2022 - Present", place: "CCS University, Meerut", desc: "Specializing in Web Development & Data Structures." },
  { title: "Intermediate", year: "2022", place: "UP Board", desc: "Completed with focus on Mathematics and Computer Science." },
  { title: "High School", year: "2020", place: "UP Board", desc: "Foundation in Computer Applications." },
];

export const CERTIFICATIONS = [
  "Advance Computer Course", 
  "Complete MS Office Specialist", 
  "Responsive Web Design", 
  "React.js Developer"
];

export const SOCIAL_LINKS = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/your-id' },
    { name: 'GitHub', href: 'https://github.com/karankumar-ghub' },
    { name: 'Facebook', href: 'https://www.facebook.com/realkaranrajput' },
    { name: 'Instagram', href: 'https://www.instagram.com/karan.creats/' },
    { name: 'Telegram', href: 'https://t.me/KaranDRajput' }
  ];