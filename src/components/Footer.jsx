import twitterImg from "../assets/twitter.svg";
import facebookImg from "../assets/facebook.svg";
import instagramImg from "../assets/instagram.svg";
import githubImg from "../assets/github.svg";

const imgs = [
  { id: "twitter", icon: twitterImg, alt: "twitter" },
  { id: "facebook", icon: facebookImg, alt: "facebook" },
  { id: "instagram", icon: instagramImg, alt: "instagram" },
  { id: "github", icon: githubImg, alt: "github" },
];

export default function Footer() {
  return (
    <footer className="bg-[#D5D4D8] dark:bg-[#161619] flex gap-6 py-5 justify-center rounded-b-lg">
      {imgs.map((item) => (
        <img key={item.id} src={item.icon} alt={item.alt} />
      ))}
    </footer>
  );
}
