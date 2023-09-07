function calcular(){
    let altura = document.getElementById('altura')
    let massa = document.getElementById('massa')
    let saida = document.getElementById('saida')
    console.log(altura)
    console.log(massa)
        if(altura.value.length == 0 || massa.value.length == 0){
        alert('Campos vazios!')
        alert('Preencha os campos e tente novamente!')
    } else{
        let a = Number(altura.value)
        let m = Number(massa.value)
        let r = m / (a**2)
        let img = document.createElement('img')
        img.setAttribute('src', 'id')
        console.log(r)
        if(r < 17){
            saida.innerHTML = `Seu IMC deu ${r.toFixed(2)}, seu peso está muito abaixo do peso ideal.</break>`
            img.setAttribute('src', 'imagens/magra-demais.png')
            
        } else if(r >= 17 && r < 18.5 ){
            saida.innerHTML = `Seu IMC deu ${r.toFixed(2)}, seu peso está abaixo do peso ideal.</break>`
            img.setAttribute('src' , 'imagens/magra.png')
            
        } else if(r >= 18.5 && r < 25){
            saida.innerHTML = `Seu IMC deu ${r.toFixed(2)}, seu peso está no peso ideal, parabéns!</break>`
            img.setAttribute('src', 'imagens/peso-médio.png')
            
        } else if(r >= 25 && r < 30){
            saida.innerHTML = `Seu IMC deu ${r.toFixed(2)}, seu peso está sobrepeso do peso ideal.</break> `
            img.setAttribute('src', 'imagens/sobrepeso.png')
            
        } else if(r >= 30 && r < 35){
            saida.innerHTML = `Seu IMC deu ${r.toFixed(2)}, seu peso está na obesidade sobre o peso ideal.</break>`
            img.setAttribute('src', 'imagens/gorda.png')
            
        } else if(r >= 35 && r < 40){
            saida.innerHTML = `Seu IMC deu ${r.toFixed(2)}, seu peso está na obesidade severa sobre o peso ideal.</break>`
            img.setAttribute('src', 'imagens/obesidade-severa.png')
            
        } else{
            saida.innerHTML = `Seu IMC deu ${r.toFixed(2)}, seu peso está na obesidade mórbida sobre o peso ideal.</break>`
            img.setAttribute('src', 'imagens/obesidade-morbida.png')
            
        }
        saida.appendChild(img)
    }
}