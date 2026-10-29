
export interface Tarefa {
  id: number;
  titulo: string;
}

const tarefas: Tarefa[] = [
  { id: 1, titulo: "Estudar Next.js" },
  { id: 2, titulo: "Aprender testes unitários" },
  { id: 3, titulo: "Praticar TypeScript" },
];

export async function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve([...tarefas]);
}

