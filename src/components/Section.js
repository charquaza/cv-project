import InfoForm from "./InfoForm";
import AddButton from "./AddButton";
import React from "react";

class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h2>{this.props.template.sectionTitle}</h2>
                <InfoForm fields={this.props.template.fields} />
                <AddButton />
            </section>
        );
    }
}

export default Section;