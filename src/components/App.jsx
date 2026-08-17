import lauraPortrait from "../assets/laura.png";
import Footer from "./Footer";
import AboutSection from "./AboutSection";
import Header from "./Header";
import Buttons from "./Buttons";

export default function App() {
  return (
    <div className="bg-[#23252C] min-h-screen flex py-4">
      <div className="w-80 m-auto rounded-lg">
        <img src={lauraPortrait} alt="laura portrait image" />

        <main className="bg-[#F5F5F5] dark:bg-[#1A1B21] px-9 pt-5 pb-12 text-[#2B283A] dark:text-[#DCDCDC]">
          <Header />
          <Buttons />
          <AboutSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
