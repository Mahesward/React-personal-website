import Button from '@mui/material/Button';

function button() {
  return (
    <>
      <Button
        variant="contained"
        // sx={{
        //   backgroundColor: '#ffb742',
        //   caretColor:"#ffb742",
        //   borderRadius: '30px',
        //   color: '#111111',
        // }}
        color="success"
        theme
      >
        Success
      </Button>
    </>
  );
}

export default button;
