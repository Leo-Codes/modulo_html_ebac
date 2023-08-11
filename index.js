function validar(a_id, b_id){
    console.log('valida');
    let a = document.getElementById(a_id).value;
    let b = document.getElementById(b_id).value;
    let result = document.getElementById('resultado');
    if(b>a){
        result.innerHTML = "VALIDO!";
        result.style.color = "green";
    }else{
        result.innerHTML = "INVALIDO!";
        result.style.color = "red";
    }

}
