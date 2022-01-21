import React from 'react';
import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { BsTwitter } from 'react-icons/bs';
import {BsApple} from 'react-icons/bs'
import {FaGoogle, FcGoogle} from 'react-icons/fa'
import CreateUserModal from '../components/User/CreateUserModal';
import CreateLoginModal from '../components/Login/CreateLoginModal';

const Img = styled.img`
{
    height: 110vh;
    border: none;
}
`
const Container = styled.div`
{    
}
`
const H1 = styled.h1`
{
    margin-top: 50px;
    font-weight:  bold;
    font-size: 80px;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 
    Helvetica, Arial, "Lucida Grande", sans-serif;
}
`
const H2 = styled.h2`
{
    margin-top:50px;
    font-weight:  bold;
    font-size: 36px;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 
    Helvetica, Arial, "Lucida Grande", sans-serif;
}
`
const Logo = styled.div`
{
    margin-top: 35px
}
`

const Button = styled.button`
{
    background-color: white;
    border: 2px solid gray;
    border-radius: 50px;
    color: gray;
    font-weight: bold;
    font-size: 0.7em;
    font-size: 14px;
    padding: 0.6em 4.2em;
    cursor: pointer;
    margin-top: 20px
}
`

const Button2 = styled.button`
{
    background-color: white;
    border: 2px solid gray;
    border-radius: 50px;
    color: black;
    font-weight: bold;
    font-size: 0.7em;
    font-size: 14px;
    padding: 0.6em 4.5em;
    cursor: pointer;
    margin-top: 10px
}
`

const Button3 = styled.button`
{
    background-color:  rgb(29, 155, 240);;
    border: 2px solid  rgb(29, 155, 240);;
    border-radius: 50px;
    color: white;
    font-weight: bold;
    font-size: 0.7em;
    font-size: 14px;
    padding: 0.6em 7.8em;
    cursor: pointer;
    margin-top: 10px
}
`

const Ligne = styled.div`


// .lignee{
//     display: flex; 
//     flex-direction: row; 
//     margin-top: 5px
// }
// .lignee:before, 

// .lignee:after { 
// content: ""; 
// flex: 1 1; 
// border-bottom: 1px solid #000; 
// margin: auto;
// }

`
const Conditions = styled.p`
{
    width: 320px;
}
`
const P = styled.p`
{
    font-size: 11px;
    margin-top: 5px
}
`
const A = styled.a`
{
    text-decoration: none;
    color: gray;
}
`
const H3 = styled.h3`
{
    margin-top:50px;
    font-weight:  bold;
    font-size: 20px;
}
`

const Button4 = styled.button`
{
    background-color: white;
    border: 2px solid  rgb(29, 155, 240);
    border-radius: 50px;
    color: rgb(29, 155, 240);
    font-weight: bold;
    font-size: 0.7em;
    font-size: 14px;
    padding: 0.6em 7.4em;
    cursor: pointer;
    margin-top: 10px
}
`
const Footer = styled.div`
{
    display : flex
}
`
const Footer2 = styled.div`
{
    display : flex;
    justify-content: center
}
`
const FooterP = styled.p`
{
    font-size: 12px;
    margin-left: 25px;
}
`
const CreateUser = () => {
    const [createUserModalVisible, setCreateUserModalVisible] = useState(false)
    const [createLoginModalVisible, setCreateLoginModalVisible] = useState(false)

    return (
        <Container>
        <div className='row'>
            <div className='col-6'>
                <Img className="img-fluid" src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" alt="" />
            </div>

            <div className='col-6'>
                <Logo><BsTwitter size="45px" color="rgb(29, 155, 240)"/></Logo>
                <H1>Ça se passe maintenant</H1>
                <H2>Rejoignez Twitter dès aujourd'hui.</H2>
              
                <div className='d-flex flex-column row'>
                    <div className='col-6 '><Button><FaGoogle size="20px" />&emsp; S'inscrire avec Google</Button></div>
                    <div className='col-6 '><Button2><BsApple size="20px" />&emsp; S'inscrire avec Apple</Button2></div>
                </div>

                <div className='ligne'><Ligne><div className='lignee'>ou</div></Ligne></div>
                

                <div className='col-6 mt-2'><Button3 onClick={() => setCreateUserModalVisible(true)}>Inscription</Button3></div>
                <Conditions>
                    <P>En vous inscrivant, vous acceptez les <A href="">Conditions d'Utilisation</A> et la  <A href="">Politique de Confidentialité</A>, 
                    incluant l' <A href="">Utilisation de Cookies</A>.
                    </P>
                </Conditions>

                <H3>Vous avez déjà un compte ?</H3>
                <div className='col-6 '><Button4 onClick={() => setCreateLoginModalVisible(true)}>Se connecter</Button4></div>
            </div>
        </div>
        <div className='row'>
            <Footer className=' mt-3 '>
                <FooterP><A href="">À propos</A> </FooterP>
                <FooterP><A href="">Centre d'assistance</A></FooterP>
                <FooterP><A href="">Conditions d’utilisation</A></FooterP>
                <FooterP><A href="">Politique de Confidentialité</A></FooterP>
                <FooterP><A href="">Politique relative aux cookies</A></FooterP>
                <FooterP><A href="">Accessibilité</A></FooterP>
                <FooterP><A href="">Informations sur les publicités</A></FooterP>
                <FooterP><A href="">Blog</A></FooterP>
                <FooterP><A href="">Statut</A></FooterP>
                <FooterP><A href="">Carrières</A></FooterP>
                <FooterP><A href="">Ressources de la marque</A></FooterP>
                <FooterP><A href="">Publicité</A></FooterP>
                <FooterP><A href="">Marketing</A></FooterP>
            </Footer>
            <Footer2 className='ms-5  '>
                <FooterP><A href="">Twitter pour les professionnels</A></FooterP>
                <FooterP><A href="">Développeurs</A></FooterP>
                <FooterP><A href="">Répertoire</A></FooterP>
                <FooterP><A href="">Paramètres</A></FooterP>
                <FooterP><A href="">© 2022 Twitter, Inc.</A></FooterP>
            </Footer2>
        </div>
        <CreateUserModal
        isOpen={createUserModalVisible}
        onClose={() => setCreateUserModalVisible(false)}
        />
        <CreateLoginModal
        isOpen={createLoginModalVisible}
        onClose={() => setCreateLoginModalVisible(false)}
        />
        </Container>
    );
};

export default CreateUser;