botao = document.getElementById("botao_cadastrar")
botao.addEventListener("click", cadastrar)


var resnome = document.getElementById("resnome")

var residade = document.getElementById("residade")

var resskills = document.getElementById("resskills")


resUsernome = document.getElementById("resUsuarionome")

resUseridade = document.getElementById("resUsuarioidade")

resUserskills = document.getElementById("resUsuarioskills")
usuario_cadastrado = document.getElementById("usuario-cadastrado")
function cadastrar(){
nome = ""
idade = ""
skills = ""
      nome = document.getElementById('input-nome').value;
      idade = document.getElementById("input-idade").value
      skills = document.getElementById("input-skills").value
      usuario_cadastrado.innerHTML = "Usuario cadastrado"
      resnome.innerHTML = "Nome:"
      resUsernome.innerHTML = nome
      residade.innerHTML = "Idade:"
      resUseridade.innerHTML = idade
      resskills.innerHTML = "Skills:"
      resUserskills.innerHTML = skills
   
}
