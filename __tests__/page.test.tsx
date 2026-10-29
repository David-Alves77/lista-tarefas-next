
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Página inicial", () => {
  test("renderiza as tarefas carregadas", async () => {
    const pagina = await Home();

    render(pagina);

    expect(
      screen.getByRole("heading", {
        name: "Gerenciador de Tarefas",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Estudar Next.js")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Aprender testes unitários")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Praticar TypeScript")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Total de tarefas: 3")
    ).toBeInTheDocument();
  });
});
