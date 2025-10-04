import { ButtonRed, ButtonWhite } from "./styles";

function Button({ children, type, ...props }) {
    return (
        <>
            {type === 'red' ? (<ButtonRed {...props}>{children}</ButtonRed>) : ('')}
            {type === 'white' ? (<ButtonWhite {...props}>{children}</ButtonWhite>) : ('')}
        </>
    )
}

export default Button;