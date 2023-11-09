import "./Icons.css";

function Icons() {
  return (
    <div className="container-icons-profile">
      <nav>
        <a href="https://github.com/BrunoCantarelli">
          <img className="icon" src="github-img.png" alt="Logo Git-Hub" />
        </a>
        <a href="https://www.linkedin.com/in/bruno-cantarelli-67a35022b/">
          <img className="icon" src="linkedin-img.png" alt="Logo Linked-in" />
        </a>
        <a href="https://www.instagram.com/brunoo_cantarelli/">
          <img className="icon" src="instagram-img.png" alt="Logo Instagram" />
        </a>
        <a href="">
          <img className="icon" src="wpp-img.png" alt="Logo WhatsApp" />
        </a>
      </nav>
    </div>
  );
}

export default Icons;
