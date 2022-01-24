import Modal from 'react-modal'
import CreateLoginForm from './CreateLoginForm'
import { BsTwitter } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import {BsApple} from 'react-icons/bs'
import {FaGoogle} from 'react-icons/fa'
import styled from 'styled-components'

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '600px',
    borderRadius: '20px'
    }
}

const Logos = styled.div`
{
  display : flex
}
`
const Logo = styled.div`
{
  cursor: pointer
}
`
const LogoTwitter = styled.div`
{
  margin : auto;
}
`
const H2 = styled.h2`
{
  text-align : center;
  font-size: 25px
}
`
const CenterButton = styled.div`
{
  margin : auto;
}
`

const Button = styled.button`
{
  background-color: black;
  border: 2px solid black;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  font-size: 0.7em;
  font-size: 11px;
  padding: 0.9em 5.3em;
  cursor: pointer;
  margin-top: 20px;
}
`

const Button2 = styled.button`
{
  background-color: black;
  border: 2px solid black;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  font-size: 0.7em;
  font-size: 11px;
  padding: 0.9em 5.6em;
  cursor: pointer;
  margin-top: 15px
}
`

const CreateLoginModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={modalStyle}
    > 
    <Logos >
      <Logo><GrClose onClick={onClose} /></Logo>
      <LogoTwitter><BsTwitter size="35px"/></LogoTwitter>
    </Logos>
    
    <H2 className='mt-3'>Connectez-vous à Twitter</H2>

    <div className='d-flex flex-column row'>
      <CenterButton className='col-6 '><Button><FaGoogle size="12px" />&emsp; S'inscrire avec Google</Button></CenterButton>
      <CenterButton className='col-6 '><Button2><BsApple size="12px" />&emsp; S'inscrire avec Apple</Button2></CenterButton>
    </div>
    
    <CreateLoginForm
      onClose={onClose}
    />

    </Modal>
  )
}

export default CreateLoginModal