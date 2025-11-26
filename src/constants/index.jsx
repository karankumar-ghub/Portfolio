import { Monitor, PenTool, Cpu, Globe, Code, Terminal, Github, Layout } from 'lucide-react';
import checkoutImg from "../assets/checkout.png"

// --- PROJECTS ---
export const PROJECTS = [
  {
    id: "flipzone", // <--- Unique ID for the URL
    title: "FlipZone — Modern E-Commerce",
    category: "Web Application",
    desc: `<p>FlipZone is a fully functional, high-fidelity e-commerce web application designed to replicate the complexity of major platforms like Flipkart or Amazon. The goal was not just to build a UI, but to architect a scalable frontend application that handles complex state management, data filtering, and user persistence without a backend.<p/>
    <br>
    <p>The project features a distinct "Next-Gen" aesthetic, moving away from generic bootstrap templates to a custom-designed interface using Tailwind CSS variables. It allows users to browse products, filter by dynamic categories, manage a shopping cart, maintain a wishlist, and simulate a secure checkout process.</p>`,
    tech: ["React", "Redux", "Tailwind", "GSAP"],
    image: checkoutImg,

    challenge: `<p>Building a modern e-commerce application presents several architectural and UX hurdles that I needed to solve:</p>
    <br>
    <ul class="list-disc pl-8 space-y-2">
      <li>
        <p><strong>Complex State Management:</strong> An e-commerce app has "fractured" state. The Cart needs to be accessible from anywhere, the Wishlist needs to persist across sessions, and User Authentication affects the UI globally (e.g., hiding/showing the "Login" button). Passing props down the component tree would have led to unmanageable code.</p>
      </li>
    <br>
      <li>
        <p><strong>Dynamic Data Filtering:</strong> Users expect to filter products by category, sort by price, and search by keywords simultaneously. Managing these intersecting logic flows while keeping the UI responsive is difficult.</p>
      </li>
      <br>
      <li>
        <p><strong>Performance & Interaction:</strong> Standard page loads feel clunky. The challenge was to create a "Single Page Application" (SPA) feel where transitions are smooth, and interactive elements like the Cart Sidebar slide in without causing layout shifts.</p>
      </li>
      <br>
      <li>
        <p><strong>Responsive Complexity:</strong> Displaying data-heavy tables (like specifications) and complex grids (product listings) on mobile devices without breaking the layout.</p>
      </li>
    </ul>
    `,

    solution: `<p>I adopted a component-driven architecture using React and Vite for a high-performance development environment. Here is how I addressed the specific challenges:</p>
    <br>
    <p><strong>A. Centralized State with Redux Toolkit</strong></p>
    <ul class="list-disc pl-8 space-y-2">
    <li><p><strong>Redux Toolkit Instead of Context:</strong> Instead of using React Context for high-frequency updates (which can lead to unnecessary re-renders), I used Redux Toolkit for predictable and efficient state updates.</p></li>
    <br>
    <li><p><strong>Slice Architecture:</strong> I separated concerns into multiple slices such as:</p>
    <ul class="list-disc pl-8 space-y-2">
      <li><strong>cartSlice</strong> — handles add/remove/quantity logic</li>
      <li><strong>wishlistSlice</strong> — toggles favorites</li>
      <li><strong>authSlice</strong> — manages user session</li>
      <li><strong>orderSlice</strong> — stores order history</li>
    </ul>
    </li>
    <br>
    <li><p><strong>Persistence:</strong> Redux reducers sync state with <code>localStorage</code>, ensuring the cart and wishlist remain intact even after a page refresh.</p></li>
    </ul>
    <br>
    <h4><strong>B. Advanced Filtering & Search Engine</strong></h4>

    <ul class="list-disc pl-8 space-y-2">
    <li><p><strong>Filtering Engine:</strong> I built a robust filtering engine inside the Products page to handle multi-layered logic.</p></li>
    
    <li><p><strong>URL-Based State:</strong> I utilized <code>useSearchParams</code> from React Router. This means if a user filters by "Gaming" and searches for "Headset," the URL updates to <code>/products?category=gaming&search=headset.</code> This allows users to share direct links to specific search results.</p></li>
    
    <li><p><strong>Compound Logic:</strong> The filtering function processes category, search query, and price sorting together in one pass for accuracy and performance.</p></li>
    
    </ul>
    <br>

    
    <h4><strong>C. UX-First Design & Animations</strong></h4>
    <ul class="list-disc pl-8 space-y-2"  >
    <li><p><strong>GSAP Animations:</strong> For a premium feel, I integrated GSAP timelines for smooth page and element transitions.</p></li>
    
    <li><p><strong>Page Transitions:</strong> A route-wrapper component animates opacity and Y-axis on every route change for a seamless SPA experience.</p></li>
    
    <li><p><strong>Interactive Sidebar:</strong> The Cart is implemented as a slide-over panel controlled by global UI state, letting users modify the cart without leaving the current page.</p></li>
    
    <li><p><strong>Image Gallery:</strong> A state-driven image gallery on the Product Details page handles image switching and provides fallback handling for broken images.</p></li>
    </ul>
    
    <h4><strong>D. Component Reusability</strong></h4>
    <ul class="list-disc pl-8 space-y-2">
    <li><p><strong>DRY Principle:</strong> I ensured minimal repetition by creating reusable components.</p></li>
    
    
      <li><strong>ProductCard.jsx:</strong> Reused in Home (Deals of the Day), Shop Grid, Wishlist, and Related Products sections. Handles badges and dynamic UI states internally.</li>
      <li><strong>Navbar.jsx:</strong> A responsive navigation bar with mobile hamburger menu, integrated search input, and full routing support.</li>
    </ul>
    `
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
    image: "",
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
  { title: "B.C.A.", year: "2022 - 2025", place: "CCS University, Meerut", desc: "Specializing in Web Development & Data Structures." },
  { title: "Intermediate", year: "2022", place: "UP Board", desc: "Completed with focus on Mathematics and Computer Science." },
  { title: "High School", year: "2020", place: "UP Board", desc: "Foundation in Computer Applications." },
];

export const CERTIFICATIONS = [
  "Graphic Designing", 
  "JavaScript Mastery", 
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

  export const TESTIMONIALS = [
    {
      name: "Sarah Jenkins",
      role: "CEO at TechFlow",
      text: "Karan transformed our outdated site into a modern masterpiece. His attention to detail and animation skills are unmatched.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "Product Lead at StartUp",
      text: "Working with Karan was seamless. He understood our vision immediately and delivered code that was clean, fast, and scalable.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Jessica Lee",
      role: "Marketing Director",
      text: "The new portfolio he built for us increased our conversion rates by 40%. Highly professional and incredibly talented.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
  ];