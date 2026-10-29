
import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "../components/NovaTarefa";

describe("Componente NovaTarefa", () => {
  test("renderiza o campo e o botão", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(
      screen.getByPlaceholderText("Digite uma tarefa")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Adicionar" })
    ).toBeInTheDocument();
  });

  test("não permite enviar uma tarefa vazia", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(
      screen.getByRole("button", { name: "Adicionar" })
    ).toBeDisabled();
  });

  test("adiciona uma tarefa válida", () => {
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    fireEvent.change(
      screen.getByPlaceholderText("Digite uma tarefa"),
      { target: { value: "Estudar Jest" } }
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Adicionar" })
    );

    expect(onAdicionar).toHaveBeenCalledWith("Estudar Jest");

    expect(
      screen.getByPlaceholderText("Digite uma tarefa")
    ).toHaveValue("");
  });
});
