
export const Button = ({text, color}) => {
    const onClick = () => {
        console.log('jdhjdj')
    }
    return (
        <button onClick={onClick} style={{backgroundColor: color}} >{text}</button>
    )
}

export default Button