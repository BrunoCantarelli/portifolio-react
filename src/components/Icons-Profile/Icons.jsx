import "./Icons.css";

function Icons() {
  return (
    <div>
      <nav className="icons-profile">
        <li>
          <a href="">
            <img className="icon" src="github-img.png" alt="Logo Git-Hub" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="icon" src="linkedin-img.png" alt="Logo Linked-in" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="icon" src="instagram-img.png" alt="Logo Instagram" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="icon" src="wpp-img.png" alt="Logo WhatsApp" />
          </a>
        </li>
      </nav>
    </div>
  );
}

export default Icons;
