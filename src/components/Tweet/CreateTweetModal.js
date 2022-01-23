import Modal from 'react-modal'
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components'
import CreateTweetForm from './CreateTweetForm';


const PictureTweet = styled.div`
.picturetweetprofile img {
border-radius: 50px;
width: 50px;
height: 50px;
border: 1px solid rgb(212, 210, 210);
margin-top: 30px;
}
`

const modalStyle = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '280px',
    borderRadius: '20px'
    }
}


const CreateTweetModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={modalStyle}
    > 
        <GrClose onClick={onClose} />
    
    <PictureTweet>
        <div className="picturetweetprofile">
          <img src="https://ciyaaro.com/wp-content/uploads/2021/05/Chelsea-vs-Real-Madrid.jpg"/>
          </div>
          </PictureTweet>
     
      <CreateTweetForm
        onClose={onClose}
      />
    </Modal>
  )
}

export default CreateTweetModal;