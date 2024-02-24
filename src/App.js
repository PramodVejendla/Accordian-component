import "./App.css";
import { useState } from "react";
import Arrow from "./images/icon-arrow-down.svg";
import Image1 from "./images/illustration-woman-online-mobile.svg";
import Bottom from "./images/bg-pattern-mobile.svg";
import Box from "./images/illustration-box-desktop.svg";
import Main from "./images/illustration-woman-online-desktop.svg";
function App() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    selected === i ? setSelected(null) : setSelected(i);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        <div className="image">
          <picture>
            <source
              className="desktop_main"
              srcSet={Main}
              media="(min-width:  600px)"
            />
            <source
              className="desktop_box"
              srcSet={Box}
              media="(min-width: 800px)"
            />
            <img className="image_main" src={Image1} alt="main" />
          </picture>
          <img className="image_bottom" src={Bottom} alt="bottom" />
        </div>
        <div>
          <div>
            <h1 className="head">FAQ</h1>
          </div>
          {data.map((item, i) => (
            <div className="item">
              <div className="question" onClick={() => toggle(i)}>
                <h3>{item.question}</h3>
                <span className="btn">{selected === i ? "^" : "+"}</span>
              </div>
              <div className={selected === i ? "answer.show" : "answer"}>
                <p className="ans">{item.answer}</p>
              </div>
              <hr className="hr" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: 2,
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 3,
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: 4,
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we will process your request no questions asked.",
  },
  {
    id: 5,
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

export default App;
