import "./Learning.css";
import { FaReact, FaBootstrap, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiTypescript } from "react-icons/si";

function Learning() {
  return (
    <div className="container-learning">
      <h3 className="learning-title">Estou estudando:</h3>
      <div className="container-icons-learning">
        <FaReact size={50}/>
        <FaJsSquare size={50} />
        <SiTypescript size={45} />
        <SiNodedotjs size={50} />
        <FaBootstrap size={50} />
        <SiTailwindcss size={50} />
      </div>
    </div>
  );
}

export default Learning;
