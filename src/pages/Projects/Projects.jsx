import './Projects.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';


function Projects(){
    return(
        <>
        <h1>Meus Projetos</h1>
        <Carousel>
      <Carousel.Item>
        <img src="imagem1.jpg" alt="Imagem 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="imagem2.jpg" alt="Imagem 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="imagem3.jpg" alt="Imagem 3" />
      </Carousel.Item>
    </Carousel>

        </>
    )
}

export default Projects