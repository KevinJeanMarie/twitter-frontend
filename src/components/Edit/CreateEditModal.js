import Modal from 'react-modal'
import CreateEditForm from './CreateEditForm';
import { BsTwitter } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
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

const CreateEditModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={modalStyle}
    > 

    <Logos >
      <Logo><GrClose onClick={onClose} /></Logo>
      <LogoTwitter><BsTwitter size="35px"/></LogoTwitter>
    </Logos>
    
    <h2 className='mt-3'>Créer un compte</h2>
     
    <CreateEditForm
      onClose={onClose}
    />
    
    </Modal>
  )
}

export default CreateEditModal