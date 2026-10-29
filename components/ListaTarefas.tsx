
"use client";

import { useState } from "react";
import NovaTarefa from "./NovaTarefa";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";
import type { Tarefa } from "../lib/tarefas";

interface ListaTarefasProps {
  tarefasIniciais: Tarefa[];
}

export default function ListaTarefas({
  tarefasIniciais,
}: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const quantidade = useContadorDeTarefas(tarefas);

  function adicionarTarefa(titulo: string) {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo,
    };

    setTarefas((anteriores) => [...anteriores, novaTarefa]);
  }

  return (
    <section>
      <h2>Minhas tarefas</h2>

      <NovaTarefa onAdicionar={adicionarTarefa} />

      <p>Total de tarefas: {quantidade}</p>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>
    </section>
  );
}
