import React from "react";
import EditButton from "./EditButton";

class InfoForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            editingMode: false,
            fields: this.props.fields
        }
    }

    toggleEditingMode = () => {
        this.setState((state) => {
            return {editingMode: !state.editingMode};
        });
    }

    updateFields = (e) => {
        var inputsContainer = e.target.parentElement.previousElementSibling;
        var inputs = Array.from(inputsContainer.children);
        var inputValues = inputs.map((inputElem) => {
            return inputElem.value;
        });

        this.setState((state) => {
            return {
                editingMode: !state.editingMode,
                fields: inputValues
            };
        });
    }

    render() {
        if (this.state.editingMode) {
            return (
                <div>
                    <div className="fields-container">
                        {this.state.fields.map((value, index) => {
                            return (
                                <input key={index} type="text" defaultValue={value} />
                            );
                        })}
                    </div>
                    <div className="buttons-container">
                        <EditButton editing={this.state.editingMode} handleClick={this.updateFields} />
                        <button onClick={this.props.deleteHandler} id={this.props.id}>Delete</button>
                    </div>
                </div>
            );
        } 
    
        return (
            <div>
                <div className="fields-container">
                    {this.state.fields.map((value, index) => {
                        return (
                            <p key={index}>{value}</p>
                        );
                    })}
                </div>
                <div className="buttons-container">
                    <EditButton editing={this.state.editingMode} handleClick={this.toggleEditingMode} />
                    <button onClick={this.props.deleteHandler} id={this.props.id}>Delete</button>
                </div>
            </div>
        );
    }
}

export default InfoForm;