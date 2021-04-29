document.getElementById("enviar").addEventListener("Click",validaFormulario)

function validaFormulario(){
      if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
        alert("Pronto, você receberá um retorno por e-mail.")
      }else{
       alert("Por favor, preencha os campos nome e e-mail.")
      }
}