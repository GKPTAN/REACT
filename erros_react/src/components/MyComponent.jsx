
const MyComponent = ({age, isAvaliable}) => {
  return (
    <div>
        MyComponent
        {age === 30 && (
            <p>sua idade é 30</p>
        )}
        {!isAvaliable && (
            <p>você não está disponível</p>
        )}
    </div>
  )
}

export default MyComponent