import React from 'react';
import styled from 'styled-components'
import { BsTwitter } from 'react-icons/bs';

const Img = styled.img`
{
    height: 100vh;
    border: none;
}
`

const Container = styled.div`
{
    margin : 0;
    padding: 0;

}
`
const H1 = styled.h1`
{
    margin-top: 50px;
    font-weight:  bold;
    font-size: 80px;
  
}
`
const H2 = styled.h2`
{
    margin-top:50px;
    font-weight:  bold;
    font-size: 36px;
  
}
`

const Logo = styled.div`
{
    margin-top: 30px
}
`

const CreateUser = () => {
    return (
        <Container>
        <div className='row'>
            <div className='col-6'>
            
            
                <Img className="img-fluid" src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" alt="" />
               
            </div>
            <div className='col-6'>
                <Logo><BsTwitter size="45px" /></Logo>
                <H1>Ça se passe maintenant</H1>
                <H2>Rejoignez Twitter dès aujourd'hui.</H2>
            </div>
            
        </div>
        </Container>
    );
};

export default CreateUser;