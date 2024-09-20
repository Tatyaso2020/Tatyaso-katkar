const btnEle=document.querySelectorAll
("button")
//console.log(btnEle);

const inputEle =document.getElementById
("result")

for(let i=0;i<btnEle.length;i++)
{
    btnEle[i].addEventListener("click",()=>{
        //console.log(btnEle[i].textContent);
        const btnValue = btnEle[i].textContent

        if(btnValue=="C")
        {
            clearResult()
        }
        else if(btnValue=="=")
        {
            calculateResult()
        }
        else
        {
            appendvalue(btnValue)
        }
    })
}

function clearResult()
{
    inputEle.value = " "
}

function calculateResult()
{
    inputEle.value = eval(inputEle.value)
}

function appendvalue(btnValue)
{
      inputEle.value += btnValue

}