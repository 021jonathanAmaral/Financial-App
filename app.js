var revenues = 0
var expenses = 0
var balance = 0
var balance_real = 0



const trans_ul = document.getElementById('add_trans')

const todoButton = document.getElementById('button')

var Balance_txt = document.getElementById('value_number')

function add_value(){
    let name = document.getElementById('name_value').value

    let number = document.getElementById('number_value').value

    let value = Number(number)

    if( name === '' || number === '' || typeof value !== 'number'){
        alert('erro. name: ' + name  + "number: " + typeof number)
    }else{
       
       const trans_div = document.createElement('div')
       trans_div.classList.add('div_trans_css')
       
       const trans_li = document.createElement('li')
       trans_li.classList.add('li_trans_css')

       const trans_li_2 = document.createElement('li')
       trans_li_2.classList.add('li_trans_css_2')

       trans_li.innerText =  name
      
        if(value < 0){
            trans_li_2.innerText = `R$ ${value}`
            trans_li_2.style.color = "red"
            const saídas = document.querySelector('.saidas_value')
            expenses -= value
            saídas.innerText = `R$ ${expenses}`
        
        }else{
            trans_li_2.innerText = `R$ ${value}`
            trans_li_2.style.color = "blue"
            const entradas = document.querySelector('.entradas_value')
            revenues += value
            entradas.innerText = `R$${revenues}`
        }

       trans_div.appendChild(trans_li)

       trans_div.appendChild(trans_li_2)

       trans_ul.appendChild(trans_div)

       name_value.value = ""
       number_value = ""

       balance = revenues - expenses

       

       
       if(balance > 0){
           Balance_txt.innerText = `R$ ${balance + TotalInvest}`
           Balance_txt.style.color = "blue"
       }else{
            Balance_txt.innerText = `R$ ${balance + TotalInvest}`
            Balance_txt.style.color = "red" 
       }
    }
}





