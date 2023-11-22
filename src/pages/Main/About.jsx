import "./About.css";

function Main() {
  return (
    <main className="container-main">
      <div className="container-title-about">
        <div className="title-about">
          <h1>Sobre mim</h1>
        </div>
        <p className="main-about">
          Bem Vindo(a) ao meu perfil! Me chamo Bruno Cantarelli, tenho 19 anos e
          sou estudante de Sistemas de Informação pela UFSM. No momento estou
          fazendo cursos por fora da faculdade com foco em Front-end
          (desenvolvimento web), e meu principal objetivo é buscar cada vez mais
          conhecimento na area de tecnologia!
        </p>
        <div className="knowledge">
          <p className="main-about">
            Já tive contato com várias tecnologias, dentre elas tem: Javascript, VueJS, ReactJs, C, C++,
            Python, Flutter, Dart, porém, a área que eu senti maior vontade de
            me desenvolver foi o desenvolvimento web, onde com consegui colocar
            farias ideias que tinha em forma de sites/projetos.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
