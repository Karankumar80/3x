import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@techfamily8292",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/people/K%C3%A3r%C3%A3%C3%B1-K%C3%BCm%C3%A3r/pfbid0ZzTzTxmJJTUeRj1sh9HP3EhXZdMEuqq98jdBxzySaun1gpHRDDceY88nrEm7ZMf4l/",
    Icon: RiFacebookLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/karan-kumar-82633a242",
    Icon: RiLinkedinLine,
  },
  
  
  {
    name: "Github",
    link: "https://github.com/Karankumar80",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
