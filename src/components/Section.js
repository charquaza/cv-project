import InfoForm from "./InfoForm";
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
                <button>Add</button>
            </section>
        );
    }
}

export default Section;