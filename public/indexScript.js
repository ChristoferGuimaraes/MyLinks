const input = document.querySelector("input");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

async function load() {
  const res = await fetch("http://localhost:3000/").then((data) => data.json());

  res.urls.map(({ name, url }) => addElement({ name, url }));
}

load();

function addElement({ name, url }) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const trash = document.createElement("span");

  a.href = url;
  a.innerHTML = name;
  a.target = "_blank";

  trash.innerHTML = "x";
  trash.onclick = () => removeElement(trash);

  li.append(a);
  li.append(trash);
  ul.append(li);
}

function removeElement(element) {
  if (confirm("Tem certeza que quer deletar?"));
  const EPN = element.parentNode;
  EPN.remove();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  function addToAPI({ name, url }) {
    fetch(`http://localhost:3000/?name=${name}&url=${url}`);
  }

  let { value } = input;

  if (!value) return alert("Preencha o campo");

  const [name, url] = value.split(",");

  if (!url) return alert("Formate o texto corretamente");

  if (!/^http/.test(url)) return alert("Digite a url corretamente");

  addElement({ name, url });
  addToAPI({ name, url });

  input.value = "";
});
