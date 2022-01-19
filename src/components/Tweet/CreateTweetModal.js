import Modal from 'react-modal'
import CreateTweetForm from './CreateTweetForm'
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

const CreateTweetModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={modalStyle}
    > 
    <Logos >
        <Logo><GrClose onClick={onClose} /></Logo>
    </Logos>
     
    <CreateTweetForm
        onClose={onClose}
    />
    </Modal>
  )
}

export default CreateTweetModal