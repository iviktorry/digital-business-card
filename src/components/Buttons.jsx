import linkedinImg from "../assets/linkedin.svg";
import emailImg from "../assets/mail.svg";

export default function Buttons() {
  return (
    <div className="flex gap-4 mt-4  mb-6">
      <button className="flex items-center gap-2 flex-1 bg-white py-2 justify-center rounded-md h-8 border-2 border-gray-300">
        <img src={emailImg} className="flex" alt="" />
        Email
      </button>
      <button className="flex items-center gap-2 flex-1 bg-blue-500 py-2 justify-center rounded-md h-8 text-white">
        <img src={linkedinImg} className="flex" alt="" />
        LinkedIn
      </button>
    </div>
  );
}

