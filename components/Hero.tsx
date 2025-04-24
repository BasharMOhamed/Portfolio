import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({});

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-black"
        style={{ clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)" }}
      ></div>
      <div className={`relative z-10 p-10 text-black ${raleway.className}`}>
        <Image
          src="/BM_logo_bottom_right-removebg-preview.png"
          alt="logo"
          width={100}
          height={100}
        />
        <h2 className="text-[40px]">Hi, I am</h2>
        <h1 className="text-[80px]">Bashar Mohamed</h1>
        <h3 className="text-2xl text-muted-foreground">Full Stack Developer</h3>
        <Image
          src="/Bashawra.jpg"
          alt="My profile image"
          width={500}
          height={500}
          className="z-1000 -translate-y-70 translate-x-220 rounded-full aspect-square object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
