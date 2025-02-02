const CustomButton = ({children, classname, style}) => {

    const defaultStyles = {backgroundColor: "green", color: "white"};
    
    const combinedStyles = {...defaultStyles, ...style};
    
  return (
    <button className={classname} style={combinedStyles}>{children}</button>
  );
};

export default CustomButton