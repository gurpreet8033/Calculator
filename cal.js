$(document).ready(()=>{
    var currentResult = $("#currentresult")
    var previousResult = $("#previousresult")
    var numberBtn=$("button")
    numberBtn.click(function(){
        var txtData=$(this).val()
        if (txtData==="+" || txtData=== "-" || txtData=== "/" || txtData=== "*" || txtData=== "%" )
            processOperation(txtData)
        else if(txtData==="clear") 
            clearResult()
        else if(txtData==="negation")
            negateOperation()
        else if(txtData===".")
            decimalOperation()   
        else if(txtData==="=")
            evaluateOperation()     
        else 
            appendOperation(txtData)

    })     

    function negateOperation(){
        var data = currentResult.text()
        if(data.charAt(0)==='-')
            data = data.slice(1,data.length)
        else
            data = '-'+data
        currentResult.text(data)
    }

    function decimalOperation(){
        if(currentResult.text().includes("."))
            return 
        else
            appendOperation(".")    
    }

    function evaluateOperation(){
        var firstOperand=previousResult.text()
        var secondOperand=currentResult.text()
        currentResult.text(eval(firstOperand+secondOperand))
        previousResult.text("")
    }

    function processOperation(operand){
        var prevResult=previousResult.text()
        var lengthprev=prevResult.length
        var lastChar=prevResult.charAt(lengthprev-1)
        if(lastChar!=='+' && lastChar!=='*' && lastChar!=='-' && lastChar!=='/' || currentResult.text()!=="")
        {
            if(currentResult.text().length===1 && currentResult.text()==='.')
                previousResult.text(previousResult.text()+"0"+operand)
            else
                previousResult.text(previousResult.text()+currentResult.text()+operand)
            currentResult.text("")
        }
        else
            return
            
    }
    function clearResult(){
        currentResult.text("")
        previousResult.text("")
    }
    function appendOperation(operand){
        var data=currentResult.text()+operand
        currentResult.text(data)
    }
})