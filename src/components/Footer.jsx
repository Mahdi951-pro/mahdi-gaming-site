import { FaDiscord, FaTwitter, FaYoutube, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://mahdi-dev.vercel.app", icon: <FaTwitter /> },
  { href: "https://youtube.com/@theheaven-v2?si=ALoc-rKsESCMhmGU", icon: <FaYoutube /> },
  { href: "https://github.com/Mahdi951-pro", icon: <FaGithub /> },
  { href: "https://wa.me/8801784658320", icon: <FaWhatsapp /> },
  { href: "https://instagram.com/abid_neox/", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Mahdi's Gaming Site 2024. All rights reserved by Abid Al Mahdi
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
