import Section from "./components/Section";
import templates from "./templates";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Resume</h1>
      <Section template={templates.generalTemplate} />
      <Section template={templates.educationTemplate} />
      <Section template={templates.workTemplate} />
    </div>
  );
}

export default App;
