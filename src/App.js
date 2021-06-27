import Section from "./components/Section";
import templates from "./templates";

function App() {
  return (
    <div>
      <Section template={templates.generalTemplate} />
      <Section template={templates.educationTemplate} />
      <Section template={templates.workTemplate} />
    </div>
  );
}

export default App;
