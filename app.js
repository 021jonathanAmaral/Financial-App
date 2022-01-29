const trans_ul = document.getElementById('add_trans')

const todoButton = document.getElementById('button')

var Balance_txt = document.getElementById('value_number')
todoButton.addEventListener('click', addTodo) 

function addTodo(event){
    event.preventDefault()
    console.log('funciona')
}





function add_value(event){

    

    const name = document.getElementById('name_value').value

    const number = document.getElementById('number_value').value

    
 
    if( name === ''){
        alert('erro')
    }else if(number === ''){
        alert('erro')
    }else{
        alert('deucerto01')
       
       const trans_div = document.createElement('div')
       trans_div.classList.add('div_trans_css')
       
       const trans_li = document.createElement('li')
       trans_li.classList.add('li_trans_css')

       const trans_li_2 = document.createElement('li')
       trans_li_2.classList.add('li_trans_css_2')

       trans_li.innerText =  name
      
      
      var value = Number(number)
      
      
        if(value < 0){
        trans_li_2.innerText = `R$ ${value}`
        trans_li_2.style.color = "red"
        const saídas = document.querySelector('.saidas_value')
        saídas.innerText= value
        
        }else{
            trans_li_2.innerText = `R$${value}`
            trans_li_2.style.color = "blue"
            const entradas = document.querySelector('.entradas_value')
            entradas.innerText= value
        }

       trans_div.appendChild(trans_li)

       trans_div.appendChild(trans_li_2)

       trans_ul.appendChild(trans_div)

       
       alert('deucerto')
      

       name_value.value=" "
       number_value = " "
    }
    
    

}

    



