interface Props {
  name: string;
  onClick?: () => void;
  backGroundColor: string;
}

export const Button = ({ name, onClick, backGroundColor }: Props) => {
  return (
    <button style={{ 
        backgroundColor: `${backGroundColor}` ,
        border:'none',
        padding:'5px 25px',
        borderRadius:'10px',
        color:'white',
        cursor:'pointer'
        }} onClick={onClick}>
      {name}
    </button>
  );
};
