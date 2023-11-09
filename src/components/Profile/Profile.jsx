import "./Profile.css"
import Icons from "../Icons-Profile/Icons"

function Profile(){
    return(
        <div className="container-profile">
            <div className="container-img-profile">
                <img className="img-profile" src="profile-img.png" alt="Imagem de perfil" />
            </div>
            <h2 className="name-profile">Bruno Catarelli</h2>
            <h3 className="dev-frontend-title">Desenvolvedor Front End</h3>
            <Icons/>
        </div>
    )
}

export default Profile