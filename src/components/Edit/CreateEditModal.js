import Modal from 'react-modal';
import CreateEditForm from './CreateEditForm';
import { BsTwitter } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';

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

button {
  background-color: black;
  color: white;
  height: 30px;
  width: 60px;
  margin-left: 250px;
}

h2 {
  font-size: 20px;
  margin-left: 50px;
}
`
const Logo = styled.div`
{
    cursor: pointer
}
`
const Picturemodal = styled.div`
.row img {
  height: 180px;
}

.pictureprofil img {
  border-radius: 50px;
width:  100px;
height: 100px;
border: 3px solid rgb(212, 210, 210);
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
        <h2 className='mt-3'>Edit profile</h2>
        <button className="btn col-4 rounded-pill btn-sm">save</button>
        </Logos>
    <Picturemodal>
        <div className="picturebanniere">
          <div className="row">
            <img src="https://cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/KROIGO2GVMT5RI7S7PW5JEWMZU.jpg"/>
        </div>

        <div className="pictureprofil">
           <img src="https://ciyaaro.com/wp-content/uploads/2021/05/Chelsea-vs-Real-Madrid.jpg"/>
            </div>
        </div>
        </Picturemodal>
     
      <CreateEditForm
        onClose={onClose}
      />
    </Modal>
    
  )
}

export default CreateEditModal