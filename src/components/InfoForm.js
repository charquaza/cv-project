import EditButton from "./EditButton";

function InfoForm(props) {
    if (props.editingMode) {
        return (
            <div>
                <div>
                    {props.infoTitles.map((title) => {
                        return (
                            <input key={title} type="text" defaultValue={title} />
                        );
                    })}
                </div>
                <EditButton />
            </div>
        );
    } 

    return (
        <div>
            <div>
                {props.infoTitles.map((title) => {
                    return (
                        <p key={title}>{title}</p>
                    );
                })}
            </div>
            <EditButton />
        </div>
    );
}

export default InfoForm;