var TotalInvest = 0
var RealValue = 0

    var Total_txt = document.getElementById('total_txt')
    const addNew = document.querySelector('.invest_ul')

function CreateInvest(){
    let Name = document.querySelector('.nameAtiv')

    let InitialValue = document.getElementById('Initial').value

    let AtualValue = document.getElementById('NowValue').value

    let Quant = document.getElementById('Quant').value  

    //Operação Lógica
        let investment = Quant*InitialValue
        let InvestmentXtoday = Quant*AtualValue
        RealValue = investment-InvestmentXtoday
    
    const invest_div = document.createElement('div')
    invest_div.classList.add('li_container')

    const invest_li = document.createElement('li')
    invest_li.classList.add('li_invest')

    const invest_p1 = document.createElement('p')
    invest_p1.classList.add('invest_name')

    const invest_p2 = document.createElement('p')
    invest_p2.classList.add('value_invest')


    invest_p1.innerText = Name
    alert(Name)
    
    invest_p2.innerText= RealValue

    invest_div.appendChild(invest_li)

    invest_li.appendChild(invest_p1)
    
    invest_li.appendChild(invest_p2)

    addNew.appendChild(invest_div)
    console.log(Name);


    TotalInvest += RealValue
    Total_txt.innerText = `R$ ${TotalInvest}`

    if(balance+TotalInvest > 0){
        Balance_txt.innerText = `R$ ${balance + TotalInvest}`
        Balance_txt.style.color = "blue"
    }else{
         Balance_txt.innerText = `R$ ${balance + TotalInvest}`
         Balance_txt.style.color = "red" 
    }
    
}

