import InfoForm from "./InfoForm";
import React from "react";
import uniqid from "uniqid";

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formIDs: [uniqid()]
        };
    }

    addForm = () => {
        this.setState({
            formIDs: this.state.formIDs.concat(uniqid())
        });
    }

    removeForm = (e) => {
        var idToRemove = e.target.parentElement.id;
        this.setState({
            formIDs: this.state.formIDs.filter((id) => {
                return id !== idToRemove;
            })
        });
    }

    render() {
        return (
            <section>
                <h2>{this.props.template.sectionTitle}</h2>

                <ul>
                    {this.state.formIDs.map((id) => {
                        return <InfoForm fields={this.props.template.fields} deleteHandler={this.removeForm} key={id} id={id} />;
                    })}
                </ul>

                <button onClick={this.addForm}>Add</button>
            </section>
        );
    }
}

export default Section;