import AddTodo from "@/components/Todos/AddTodo";
import TodosList from "@/components/Todos/TodosList";
import TodosContextProvider, { TodosContext } from "@/context/TodosContext";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <TodosContextProvider>
        <AddTodo />
        <p className="text-center text-3xl my-4">Your TODOs</p>
        <TodosList />
      </TodosContextProvider>
    </div>
  );
}

export default App;
