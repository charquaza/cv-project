import InfoForm from "./InfoForm";
import AddButton from "./AddButton";

function Section(props) {
    var {sectionInfo} = props;
    var editingMode = true;

    return (
        <section>
            <h2>{sectionInfo.sectionTitle}</h2>
            <InfoForm infoTitles={sectionInfo.infoTitles} editingMode={editingMode} />
            <AddButton />
        </section>
    );
}

export default Section;