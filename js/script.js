window.addEventListener("DOMContentLoaded", () => {
  const vocals = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  const input = document.getElementById("input");
  const cadena_E = document.getElementById("cadena_E");
  const con_vacio = document.getElementById("con_vacio");
  const encriptador_cont = document.getElementById("encriptador_cont");
  const con_copia = document.getElementById("con_copia");
  const B_encriptar = document.getElementById("B_encriptar");
  const B_desencriptar = document.getElementById("B_desencriptar");
  const btn_copiar = document.getElementById("btn_copiar");

  input.addEventListener("input", function () {
    this.value = this.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (this.value === "") {
      cadena_E.innerText = "";
      con_vacio.style.display = "flex";
      encriptador_cont.style.display = "none";
      con_copia.style.display = "none";
    }
  });

  function Encrypt() {
    let encrypt_string = input.value
      .split("")
      .map(char => vocals[char] || char)
      .join("");
    cadena_E.innerText = encrypt_string;
    if (encrypt_string) {
      toComplete();
    }
  }

  function Decrypt() {
    let content_string = input.value
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    cadena_E.innerText = content_string;
    if (content_string) {
      toComplete();
    }
  }

  function toComplete() {
    con_vacio.style.display = "none";
    encriptador_cont.style.display = "block";
    con_copia.style.display = "flex";
  }

  function copyText() {
    navigator.clipboard.writeText(cadena_E.textContent)
      .then(() => {
        alert("Texto copiado al portapapeles")
      })
      .catch(err => {
        alert("Error al copiar el texto", err.message, "error");
      });
  }

  B_encriptar.addEventListener("click", Encrypt);
  B_desencriptar.addEventListener("click", Decrypt);
  btn_copiar.addEventListener("click", copyText);
});
