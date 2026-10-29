
"use client";

import { useState, type FormEvent } from "react";

interface NovaTarefaProps {
  onAdicionar: (titulo: string) => void;
}

export default function NovaTarefa({
  onAdicionar,
}: NovaTarefaProps) {
  const [titulo, setTitulo] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const tituloLimpo = titulo.trim();

    if (!tituloLimpo) return;

    onAdicionar(tituloLimpo);
    setTitulo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        aria-label="Nova tarefa"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />

      <button type="submit" disabled={!titulo.trim()}>
        Adicionar
      </button>
    </form>
  );
}
