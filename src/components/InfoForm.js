import React from "react";
import EditButton from "./EditButton";

class InfoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editingMode: false,  //belong in state? in InfoForm or Section?
            fields: this.props.fields
        }
    }

    toggleEditingMode = () => {
        this.setState((state) => {
            return {editingMode: !state.editingMode};
        });
    }

    updateFields = (e) => {
        var inputsContainer = e.target.previousElementSibling;
        //console.log(fieldsContainer); <- why does this return <p>s?
        var inputs = Array.from(inputsContainer.children);
        var inputValues = inputs.map((inputElem) => {
            return inputElem.value;
        });
        console.log(inputValues);

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
                    <div>
                        {this.state.fields.map((value, index) => {
                            return (
                                <input key={index} type="text" defaultValue={value} />
                            );
                        })}
                    </div>
                    <EditButton editing={this.state.editingMode} handleClick={this.updateFields} />
                </div>
            );
        } 
    
        return (
            <div>
                <div>
                    {this.state.fields.map((value, index) => {
                        return (
                            <p key={index}>{value}</p>
                        );
                    })}
                </div>
                <EditButton editing={this.state.editingMode} handleClick={this.toggleEditingMode} />
            </div>
        );
    }
}

export default InfoForm;