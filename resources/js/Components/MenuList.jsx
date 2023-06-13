export default function MenuList(props){
    return (
        <span className='inline-flex align-middle'>
            {props.icon}
            <span className='ml-4'>{props.nama}</span>
        </span>
    );
}