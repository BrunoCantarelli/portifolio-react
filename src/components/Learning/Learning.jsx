import "./Learning.css";
import { FaReact, FaBootstrap, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiTypescript } from "react-icons/si";

function Learning() {
  return (
    <div className="container-learning">
      <h3 className="learning-title">Estou estudando:</h3>
      <div className="container-icons-learning">
        <div className="icon-learning">
          <FaReact size={50} />
        </div>
        <div className="icon-learning">
          <FaJsSquare size={50} />
        </div>
        <div className="icon-learning">
          <SiTypescript size={50} />
        </div>
        <div className="icon-learning">
          <SiNodedotjs size={50} />
        </div>
        <div className="icon-learning">
          <FaBootstrap size={50} />
        </div>
        <div className="icon-learning">
          <SiTailwindcss size={50} />
        </div>
      </div>
    </div>
  );
}

export default Learning;
