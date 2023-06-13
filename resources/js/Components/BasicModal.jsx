import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '8px' ,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAction = () => {

    props.onModalAction()
    handleClose()
  }

  return (
    <div>
      <button className="text-md font-bold bg-[#DD4A1C] text-[#F9F9F9] py-[8px] px-[20px] rounded-[8px] transition ease-in-out duration-300 hover:bg-[#8B3A20] hover:drop-shadow-lg" onClick={handleOpen} ><span className='inline-flex align-middle gap-2'><DeleteOutlineOutlinedIcon/>{props.title}</span></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ my: 2 }}>
            {props.desc}
          </Typography>
          <div className='grid grid-cols-2 gap-4 m-auto'>
            <div className='m-auto'>
              <button
              // variant="contained"
              // color="error"
              className="font-bold bg-[#DD4A1C] text-[#F9F9F9] py-[10px] px-[24px] rounded-[8px] transition ease-in-out duration-300 hover:bg-[#8B3A20] hover:drop-shadow-lg"
              onClick={() => handleAction()}>
              {props.title}
              </button>
            </div>
            <div className='m-auto'>
              <button
              // variant="contained"
              // color="primary"
              className='font-bold bg-[#70B547] text-[#F9F9F9] py-[10px] px-[24px] rounded-[8px] transition ease-in-out duration-300 hover:bg-[#446A2D] hover:drop-shadow-lg'
              onClick={handleClose}>
              Batal
              </button></div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}