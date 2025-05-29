document.getElementById("log").addEventListener("submit",function(event) {
      event.preventDefault(); 

      const usuario = document.getElementById("usuario").value;
      const senha = document.getElementById("senha").value;

      if (usuario === "admin" && senha === "1234") {
        alert("Login efetuado com sucesso!");
        window.location.href="Menu.html";
      } else {
        alert("Usuário ou senha incorretos.");
      }
    });