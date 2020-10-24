const ButtonLiteflix = ({btnIcon,btnText,handleClick}) =>{


    return(
        <button onClick={handleClick} className = "liteflix_btn">
           {btnIcon}  {btnText}
        </button>
    )

}

export default ButtonLiteflix;