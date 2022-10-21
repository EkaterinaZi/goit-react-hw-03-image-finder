import {ButtonMore} from "components/Button/Button.styled"

const Button = ({onClick}) => {
    return(
    <ButtonMore type="button" onClick={onClick}>Load more</ButtonMore>)
}

export default Button;