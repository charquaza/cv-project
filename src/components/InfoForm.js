import React from "react";
import EditButton from "./EditButton";

class InfoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editingMode: false  //belong in state? in InfoForm or Section?
        }
    }

    toggleEditingMode = () => {
        this.setState((state) => {
            return {editingMode: !state.editingMode}
        });
    }

    render() {
        if (this.state.editingMode) {
            return (
                <div>
                    <div>
                        {this.props.fields.map((title) => {
                            return (
                                <input key={title} type="text" defaultValue={title} />
                            );
                        })}
                    </div>
                    <EditButton editing={this.state.editingMode} handleClick={this.toggleEditingMode} />
                </div>
            );
        } 
    
        return (
            <div>
                <div>
                    {this.props.fields.map((title) => {
                        return (
                            <p key={title}>{title}</p>
                        );
                    })}
                </div>
                <EditButton editing={this.state.editingMode} handleClick={this.toggleEditingMode} />
            </div>
        );
    }
}

export default InfoForm;