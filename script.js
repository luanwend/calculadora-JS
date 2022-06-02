function calculadora(){
    const operacao= Number(prompt('escolha uma operaçao:\n 1- soma \n 2- subtração\n 3 - multiplicação\n 4- divisão real\n 5- divisão inteira\n 6- potenciação'));
    
    if(!operacao || operacao>=7){
        alert('Erro - operação invalida');
        calculadora();
    }else{
        let a= Number(prompt('insira o primeiro valor: '));
        let b= Number(prompt('insira o segundo valor: '));
        let result;
        if(!a||!b){
            alert('Parametros invalidos');
            calculadora();
        }else{
    function soma(){
        result= a+b;
        alert(`${a} + ${b} = ${result}`)
    }
    function sub(){
        result= a-b;
        alert(`${a} - ${b} = ${result}`)
    }
    function multi(){
        result= a*b;
        alert(`${a} * ${b} = ${result}`)
    }
    function divireal(){
        result= a/b;
        alert(`${a} / ${b} = ${result}`)
    }
    function divint(){
        result= a%b;
        alert(`O resto da divisão entre ${a} e ${b} é igual a ${result}`)
    }function potencia(){
        result= a**b;
        alert(`${a} elevado a ${b} e igual a ${result}`)
    }
    function nova(){
        let opc=prompt('deseja fazer mais uma operaçao?\n 1- Sim\n 2- Não\n');
        if(opc==1){
            calculadora();
        }else if(opc==2){
            alert('Ate mais!');
        }else{
            alert('digite uma opcão valida');
            nova();
        
        }
    }
    switch(operacao){
        case 1:
            soma();
            break;
        case 2:
            sub();
            break;
        case 3:
            multi();
            break;
        case 4:
            divireal();
            break;
        case 5:
            divint();
            break;
        case 6:
            potencia();
            break;
    }
nova();}}

}
calculadora();
