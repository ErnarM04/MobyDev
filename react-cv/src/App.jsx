import { useState } from "react";
import image from "./assets/canvas.png";
import "./App.css";
import { Bird, FileUser, Globe, Mail, MessageCircleMore } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#f6fff1] flex items-center justify-center p-10">
      <div className="flex flex-row size-fit bg-white justify-center">
        <div className="flex flex-col justify-between px-16 pt-19.5 pb-9">
          <div className="w-100">
            <img className="size-80 object-cover mb-9" src={image} />
            <p className="text-3xl">
              <b>Ariadne Snyder (she/her)</b>
            </p>
            <p className="text-xl">Communications Specialist</p>
          </div>
          <div>
            <p className="text-base">CONNECT WITH ME</p>
            <div className="flex flex-row gap-6.5">
              <Mail size={30} />
              <Globe size={30} />
              <Bird size={30} />
              <MessageCircleMore size={30} />
              <FileUser size={30} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10.5 w-141 py-25 px-13">
          <div>
            <p className="text-base mb-2">ABOUT ME</p>
            <p className="text-3xl mb-3.5">
              <b>Brevity is key</b>
            </p>
            <p className="text-base">
              I am an energetic and passionate college student working towards a
              communications degree, seeking a summer internship at the next big
              digital company.
            </p>
          </div>
          <div>
            <p className="text-base mb-7">
              <b>Education</b>
            </p>
            <div className="flex flex-row gap-7">
              <p className="text-base">2025</p>
              <div className="flex flex-col gap-3">
                <p className="text-base">Bachelor of Arts in Communications</p>
                <p className="text-sm">
                  Murrayfield School of Marketing GPA of 3.60 / 4.00
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-base mb-7">
              <b>Experience</b>
            </p>
            <div className="flex flex-row gap-7">
              <p className="text-base">2023</p>
              <div className="flex flex-col gap-3">
                <p className="text-base">Communications Intern</p>
                <p className="text-sm">Strategea Branding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
