
import ListaTarefas from "../components/ListaTarefas";
import { buscarTarefas } from "../lib/tarefas";

export default async function Home() {
  const tarefas = await buscarTarefas();

  return (
    <main>
      <h1>Gerenciador de Tarefas</h1>
      <ListaTarefas tarefasIniciais={tarefas} />
    </main>
  );
}
