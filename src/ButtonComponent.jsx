
const ButtonComponent = (props) => {
return (
    <div>
        <button className="Button" style={{backgroundColor: props.bgcolor,  fontSize : props.fontsize, borderRadius: props.border, cursor: props.cursor, padding: props.padding, marginTop: props.margin}}>{props.text}</button>
    </div>
)
}

export default ButtonComponent;