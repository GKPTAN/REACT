const InputField = ({placeholder, ref}) => {
  return (
    <div>
        <input type="text" placeholder={placeholder} ref={ref} />
    </div>
  );
};

export default InputField