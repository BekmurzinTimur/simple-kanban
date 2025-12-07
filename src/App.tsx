import "./App.css";
import { KanbanBoard } from "./components/KanbanBoard/KanbanBoard";
import { kanbanData } from "./data";

function App() {
  return (
    <KanbanBoard
      title="Design weekly"
      description="A board to keep track of design progress."
      columns={kanbanData}
    />
  );
}

export default App;
