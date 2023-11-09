import "./BarraSuperior.css";

function BarraSuperior() {
  return (
    <header className="container-barra-sup">
      <div className="languages">
        <select className="language-select">
          <option selected disabled>Idioma</option>
          <option className="eua" value="Inglês">Inglês</option>
          <option className="bra" value="Português">Português</option>
        </select>
      </div>
      <div className="buttons">
        <div>
          <button className="btnAbout">Sobre</button>
        </div>
        <div>
          <button className="btnProject">Projetos</button>
        </div>
      </div>
    </header>
  );
}

export default BarraSuperior;
