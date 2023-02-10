import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodosList from "@/components/Todos/TodosList";
import { TodosContext } from "@/context/TodosContext";

describe("TodoItem tests", () => {
  it("should render text properties of a todo", () => {
    const todos = [
      {
        id: Date.now(),
        title: "Test",
        description: "Test description",
        isDone: false,
        createdAt: new Date(),
      },
    ];
    const { getByText } = render(
      <TodosContext.Provider value={todos}>
        <TodosList />
      </TodosContext.Provider>
    );
    expect(getByText('Test')).toBeInTheDocument();
    expect(getByText("Test description")).toBeInTheDocument();
  });
});
