
import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

describe("Hook useContadorDeTarefas", () => {
  test("retorna a quantidade correta de tarefas", () => {
    const tarefas = [
      { id: 1, titulo: "Estudar Next.js" },
      { id: 2, titulo: "Aprender Jest" },
      { id: 3, titulo: "Praticar TypeScript" },
    ];

    const { result } = renderHook(() =>
      useContadorDeTarefas(tarefas)
    );

    expect(result.current).toBe(3);
  });

  test("retorna zero quando a lista está vazia", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas([])
    );

    expect(result.current).toBe(0);
  });
});
