function imprime(obj) {
  if (Array.isArray(obj)) {
    return obj.map(imprimePostagem).join('\n');
  } else {
    return imprimePostagem(obj);
  }
}

function imprimePostagem(objeto) {
  return `
{
  "id": ${objeto.id},
  "userId": ${objeto.userId},
  "title": "${objeto.title}",
  "body": "${objeto.body}"
}\n`;
}

function limparResposta() {
  document.getElementById("respjson").innerText = "Aguardando resposta...";
}

async function buscarPorId() {
  limparResposta();
  const id = document.getElementById("id").value;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const json = await response.json();
  document.getElementById("respjson").innerText = imprime(json);
}

async function buscarTodos() {
  limparResposta();
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const json = await response.json();
  document.getElementById("respjson").innerText = imprime(json);
}

async function criarPostagem() {
  limparResposta();
  const userId = document.getElementById("userId").value;
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ userId, title, body })
  });

  const json = await response.json();
  document.getElementById("respjson").innerText = imprime(json);
}

async function atualizarPostagem() {
  limparResposta();
  const id = document.getElementById("id").value;
  const userId = document.getElementById("userId").value;
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ id, userId, title, body })
  });

  const json = await response.json();
  document.getElementById("respjson").innerText = imprime(json);
}

async function modificarPostagem() {
  limparResposta();
  const id = document.getElementById("id").value;
  const title = document.getElementById("title").value;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ title })
  });

  const json = await response.json();
  document.getElementById("respjson").innerText = imprime(json);
}

async function removerPostagem() {
  limparResposta();
  const id = document.getElementById("id").value;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE"
  });

  const json = await response.json();
  document.getElementById("respjson").innerText = `Postagem com ID ${id} removida (simulado).`;
}

async function filtrarPorUserId() {
  limparResposta();
  const userId = document.getElementById("userId").value;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const json = await response.json();
  document.getElementById("respjson").innerText = imprime(json);
}
