import Section from "./components/Section";

var generalInfo = {
  sectionTitle: "",
  infoTitles: ["Name", "Email", "Phone"]
};

var educationInfo = {
  sectionTitle: "Education",
  infoTitles: ["School Name", "Title of Study", "Date of Study"]
};

var workInfo = {
  sectionTitle: "Work",
  infoTitles: ["Company Name", "Position", "Dates", "Tasks"]
};

function App() {
  return (
    <div>
      <Section sectionInfo={generalInfo} />
      <Section sectionInfo={educationInfo} />
      <Section sectionInfo={workInfo} />
    </div>
  );
}

export default App;
