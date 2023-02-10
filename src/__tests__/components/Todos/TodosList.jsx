import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodosList from "@/components/Todos/TodosList";
import { TodosContext } from "@/context/TodosContext";

describe("TodosList tests", () => {
  it("should contain 'There is no Todos' when todos is empty", () => {
    const todos = [];
    const { getByText } = render(
      <TodosContext.Provider value={todos}>
        <TodosList />
      </TodosContext.Provider>
    );
    expect(getByText(/There is no Todos/i)).toBeInTheDocument();
  });

  it("should render todos when it's not empty", () => {
    const todos = [
      {
        id: Date.now(),
        title: "Test",
        description: "Test description",
        isDone: false,
        createdAt: new Date(),
      },
    ];
    const { queryByText } = render(
      <TodosContext.Provider value={todos}>
        <TodosList />
      </TodosContext.Provider>
    );
    expect(queryByText(/There is no Todos/i)).not.toBeInTheDocument();
  });
});
