import Button from '@mui/material/Button';

export default function BasicButton(props){

    const handleclick = () => {
        props.buttonClicked()
    }
    return(
        <Button 
            variant="outlined"
            onClick={handleclick}
        >
            {props.title}
        </Button>
    )
}