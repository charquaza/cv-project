function EditButton(props) {
    var btnText = props.editing ? "Resubmit" : "Edit";

    return (
        <button onClick={props.handleClick}>{btnText}</button>
    );
}

export default EditButton;