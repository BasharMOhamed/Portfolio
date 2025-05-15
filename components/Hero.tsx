import Image from "next/image";
import { Raleway } from "next/font/google";
import AnimatedSection from "./AnimatedSection";
import { Github, Linkedin, Mail, Briefcase } from "lucide-react";
import { JSX } from "react";

const raleway = Raleway({
  subsets: ["latin"],
});

const socialMediaLinks = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/basharmohamed/",
    icon: <Linkedin size={18} />,
  },
  {
    title: "GitHub",
    link: "https://github.com/BasharMOhamed",
    icon: <Github size={18} />,
  },
  {
    title: "Email",
    link: "mailto:bashar.eg6645@gmail.com",
    icon: <Mail size={18} />,
  },
  {
    title: "Upwork",
    link: "https://www.upwork.com/freelancers/~011a4c87bc8157dc2a",
    icon: <Briefcase size={18} />,
  },
];

const HeroSection = () => {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      <div
        className="hidden md:block absolute inset-0 bg-black z-0"
        style={{ clipPath: "polygon(80% 0%, 100% 0%, 100% 100%, 40% 100%)" }}
      ></div>

      <div className={`relative z-10 p-10 text-black ${raleway.className}`}>
        <AnimatedSection>
          <Image
            src="/BM_logo_bottom_right-removebg-preview.png"
            alt="logo"
            width={100}
            height={100}
          />

          <h2 className="text-[20px] md:text-[40px]">Hi, I am</h2>
          <h1 className="text-[38px] md:text-[60px] font-bold">
            Bashar Mohamed
          </h1>
          <h3 className="md:text-2xl text-muted-foreground">
            Full Stack Developer
          </h3>

          <div className="mt-6 flex gap-4 flex-wrap">
            {socialMediaLinks.map((social) => (
              <SocialMediaCard
                key={social.title}
                link={social.link}
                icon={social.icon}
                title={social.title}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="relative z-10 mt-8 md:mt-0 md:absolute md:right-20 md:top-1/2 md:transform md:-translate-y-1/2">
        <Image
          src="/Bashawra.jpg"
          alt="My profile image"
          width={500}
          height={500}
          className="hidden xl:block rounded-full aspect-square object-cover border-4 border-white shadow-lg "
        />
      </div>
    </div>
  );
};

export default HeroSection;

const SocialMediaCard = ({
  icon,
  title,
  link,
}: {
  icon: JSX.Element;
  title: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-black shadow-sm cursor-pointer"
    >
      {icon} {title}
    </a>
  );
};
