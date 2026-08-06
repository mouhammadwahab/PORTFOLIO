import smartSolarImg from '../assets/img/smart-solar.png';
import foodDeliveryImg from '../assets/img/fast-foodies.jpg';
import shopItImg from '../assets/img/projects/shop-it.jpg';
import swiftDriveImg from '../assets/img/swift-drive.jpg';
import conxImg from '../assets/img/conx logo.png';
import aiSalesImg from '../assets/img/projects/ai-sales.jpg';
import posImg from '../assets/img/projects/pos-system.jpg';
import onlineStoreImg from '../assets/img/wor-eats.jpg';
import datingImg from '../assets/img/muslim-dating.png';
import lmsImg from '../assets/img/projects/lms-portal.jpg';
import passwordImg from '../assets/img/projects/password-manager.jpg';
import swiftJavaImg from '../assets/img/swift.png';
import eyeDocImg from '../assets/img/eye-doc-sm.jpg';

export const projects = [
  {
    id: 'smart-solar',
    title: 'Smart Solar App',
    category: 'Mobile',
    stack: ['Flutter', 'Firebase'],
    description:
      'Solar monitoring app enabling users to track panel performance and energy output in real time. Firebase powers live data sync so dashboards stay current as readings change.',
    image: smartSolarImg,
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery App',
    category: 'Mobile',
    stack: ['Flutter', 'WhatsApp'],
    description:
      'Restaurant ordering app that lets users browse menus and place orders which route directly through WhatsApp, cutting friction between browsing and checkout.',
    image: foodDeliveryImg,
  },
  {
    id: 'shop-it',
    title: 'Shop IT — E-Commerce App',
    category: 'Mobile',
    stack: ['Flutter'],
    description:
      'Full shopping flow covering product discovery and browsing, cart and purchase, and order tracking after checkout — a complete retail experience in one app.',
    image: shopItImg,
  },
  {
    id: 'swift-drive',
    title: 'SWIFT Drive — Car Rental',
    category: 'Mobile',
    stack: ['Flutter'],
    description:
      'End-to-end car rental experience covering vehicle browsing, booking, and reservation management from search through pickup.',
    image: swiftDriveImg,
  },
  {
    id: 'conx-orbit',
    title: 'ConX Orbit',
    category: 'Web',
    stack: ['React', 'CSS Modules', 'React Router', 'GSAP'],
    description:
      'Construction AI marketing website with brand-aligned UI (forest/olive/gold), GSAP scroll storytelling, and interactive product, case-study, and partner pages.',
    image: conxImg,
  },
  {
    id: 'ai-sales',
    title: 'AI-Powered Autonomous Sales Agency',
    category: 'AI',
    stack: ['Next.js', 'Node.js', 'Supabase', 'n8n', 'Ollama', 'Docker'],
    description:
      'Multi-agent AI sales platform simulating a full sales team — lead generation, cold calling, pricing, CRM, and payment collection — with admin dashboard and approval workflow.',
    image: aiSalesImg,
  },
  {
    id: 'pos',
    title: 'POS System',
    category: 'Web',
    stack: ['Dashboard', 'Retail Ops'],
    description:
      'Point-of-sale platform with a custom dashboard for sales agents to process transactions and manage daily store operations with clear task-oriented UI.',
    image: posImg,
  },
  {
    id: 'online-store',
    title: 'Online Store',
    category: 'Web',
    stack: ['E-commerce', 'Web'],
    description:
      'E-commerce platform for browsing a product catalog, adding items to cart, and completing purchases through a straightforward online storefront.',
    image: onlineStoreImg,
  },
  {
    id: 'dating',
    title: 'Dating App',
    category: 'Mobile',
    stack: ['Flutter'],
    description:
      'Application for connecting and matching users based on shared interests and preferences — profile creation, browsing, and matching.',
    image: datingImg,
  },
  {
    id: 'lms',
    title: 'LMS Portal',
    category: 'Web',
    stack: ['Learning', 'Portal'],
    description:
      'Learning management system supporting online course delivery and management for instructors and students in one centralized portal.',
    image: lmsImg,
  },
  {
    id: 'password',
    title: 'Password Manager',
    category: 'Mobile',
    stack: ['Security', 'Flutter'],
    description:
      'Application for securely storing, organizing, and retrieving credentials for multiple accounts in one centralized tool.',
    image: passwordImg,
  },
  {
    id: 'swift-java',
    title: 'SWIFT — Social Network',
    category: 'Web',
    stack: ['Java', 'OOP'],
    description:
      'Social networking application built in Java focused on core social features such as user profiles and connections, applying OOP from the ground up.',
    image: swiftJavaImg,
  },
  {
    id: 'eyedoc',
    title: 'EyeDoc',
    category: 'Mobile',
    stack: ['Flutter', 'Image Processing'],
    description:
      'Flutter app for eye condition analysis through image processing — helping users assess eye health with a streamlined mobile experience.',
    image: eyeDocImg,
  },
];

export const projectFilters = ['All', 'Mobile', 'Web', 'AI'];
