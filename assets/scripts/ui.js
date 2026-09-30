// ui.js
import { Vaga, VagaFrontEnd } from "./motor.js";

export function renderizarVagas(candidato, vagasJson) {
  const container = document.getElementById("cardsVagas");
  container.innerHTML = ""; // limpa antes de renderizar

  // Transformar JSON em instâncias de Vaga
  const vagas = vagasJson.map(v => new VagaFrontEnd(
    v.id,
    v.empresa,
    v.cargo,
    v.requisitos,
    v.salario,
    v.modalidade,
    "JavaScript" // exemplo de stack extra
  ));

  // Calcular compatibilidade para cada vaga
  const resultados = vagas.map(vaga => {
    const resultado = vaga.calcularCompatibilidade(candidato);
    return { vaga, ...resultado };
  });

  // Encontrar melhor vaga com reduce
  const melhorVaga = resultados.reduce((melhor, atual) => {
    return atual.percentual > melhor.percentual ? atual : melhor;
  });

  // Destaque da melhor vaga + recomendação
  const destaque = document.createElement("div");  // cria um elemento div para o destaque
  destaque.classList.add("melhor-vaga");  // adiciona a classe "melhor-vaga" ao elemento div
  destaque.innerHTML = `
    <h2>Melhor vaga encontrada:</h2>
    <p>${melhorVaga.vaga.empresa} - ${melhorVaga.vaga.cargo}</p>
    <p>Compatibilidade: ${melhorVaga.percentual}%</p>
    <p>Recomendação de estudo: Foque em ${melhorVaga.faltantes.join(", ") || "nenhuma habilidade faltante"}.</p>
  `;
  container.appendChild(destaque);

  // Renderizar cada card
  resultados.forEach(r => {  //para cada resultado, cria um card
    const card = document.createElement("div");  // cria um elemento div para o card
    card.classList.add("card");  // adiciona a classe "card" ao elemento div

    card.innerHTML = `
      <h3>${r.vaga.empresa} - ${r.vaga.cargo}</h3>
      <p>Compatibilidade: ${r.percentual}% (${r.classificacao})</p>
      <p>Habilidades encontradas: ${r.encontradas.join(", ") || "Nenhuma"}</p>
      <p>Habilidades faltantes: ${r.faltantes.join(", ") || "Nenhuma"}</p>
      <p>Salário: ${r.vaga.salario}</p>
      <p>Modalidade: ${r.vaga.modalidade}</p>
    `;

    container.appendChild(card);
  });
}
