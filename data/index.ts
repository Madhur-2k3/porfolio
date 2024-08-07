import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

 
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Streamlining Attendance with Student-Generated QR Codes!",
    des: " A student-driven QR code attendance system at MVSR Engineering College! using React.js .",
    img: "/qr-mvsr.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://mvsrec.edu.in/qr/",
  },
  {
    id: 2,
    title: "MadBD -  Movie database website",
    des: "Explore a world of cinema right at your fingertips with my custom-built movie database.",
    img: "/imdb-clone.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://imdb-clone-nextjs-madhur.vercel.app/",
  },
  {
    id: 3,
    title: "Google Search Clone",
    des: "A fully functional Google clone built using Next.js 14, React.js 18, and Tailwind CSS",
    img: "/google-clone.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://google-clone-nextjs-madhur.vercel.app/",
  },
  {
    id: 4,
    title: "GraphyEd - Student LMS Platform",
    des: "GraphyEd is a state-of-the-art Learning Management System (LMS) platform meticulously crafted with Next.js, Clerk, and Tailwind CSS. Designed to revolutionize the educational experience",
    img: "/studen-lms.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://student-lms.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Madhur was an absolute delight.  His professionalism, responsiveness, and unwavering commitment to achieving outstanding results shone through at every turn during our project.  What truly sets Madhur apart is his infectious enthusiasm for every aspect of the development process. He wasn't just going through the motions; his genuine excitement for the work was palpable. If you're looking to take your website and brand to the next level, Madhur is the ideal collaborator.",
    name: "T Sujanavan",
    title: "Assistant Professor, Dept. of CSE, MVSREC",
  },
  {
    quote:
      "Working with Madhur was an absolute delight.  His professionalism, responsiveness, and unwavering commitment to achieving outstanding results shone through at every turn during our project.  What truly sets Madhur apart is his infectious enthusiasm for every aspect of the development process. He wasn't just going through the motions; his genuine excitement for the work was palpable. If you're looking to take your website and brand to the next level, Madhur is the ideal collaborator.",
    name: "T Sujanavan",
    title: "Assistant Professor, Dept. of CSE, MVSREC",
  },
  {
    quote:
      "Working with Madhur was an absolute delight.  His professionalism, responsiveness, and unwavering commitment to achieving outstanding results shone through at every turn during our project.  What truly sets Madhur apart is his infectious enthusiasm for every aspect of the development process. He wasn't just going through the motions; his genuine excitement for the work was palpable. If you're looking to take your website and brand to the next level, Madhur is the ideal collaborator.",
    name: "T Sujanavan",
    title: "Assistant Professor, Dept. of CSE, MVSREC",
  },
  {
    quote:
      "Working with Madhur was an absolute delight.  His professionalism, responsiveness, and unwavering commitment to achieving outstanding results shone through at every turn during our project.  What truly sets Madhur apart is his infectious enthusiasm for every aspect of the development process. He wasn't just going through the motions; his genuine excitement for the work was palpable. If you're looking to take your website and brand to the next level, Madhur is the ideal collaborator.",
    name: "T Sujanavan",
    title: "Assistant Professor, Dept. of CSE, MVSREC",
  },
  {
    quote:
      "Working with Madhur was an absolute delight.  His professionalism, responsiveness, and unwavering commitment to achieving outstanding results shone through at every turn during our project.  What truly sets Madhur apart is his infectious enthusiasm for every aspect of the development process. He wasn't just going through the motions; his genuine excitement for the work was palpable. If you're looking to take your website and brand to the next level, Madhur is the ideal collaborator.",
    name: "T Sujanavan",
    title: "Assistant Professor, Dept. of CSE, MVSREC",
  },

];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer at GDSC MVSR",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a Web app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Madhur-2k3",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/madhur-kannamwar-8436a6238/",
  },
  {
    id: 4,
    img: "/instagram.svg",
    link: "https://www.instagram.com/madhur_kannamwar/",
  },
];
