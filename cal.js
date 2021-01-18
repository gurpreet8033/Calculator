$(document).ready(()=>{
    var currentResult = $("#currentresult")
    var previousResult = $("#previousresult")
    var numberBtn=$("button")
    numberBtn.click(function(){
        var txtData=$(this).text()
        if (txtData==="+" || txtData=== "-" || txtData=== "/" || txtData=== "*" || txtData=== "%" )
            processOperation(txtData)
        else if(txtData==="C") 
            clearResult()
        else if(txtData==="+/-")
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
        previousResult.text(previousResult.text()+currentResult.text()+operand)
        currentResult.text("")
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