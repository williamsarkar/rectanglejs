// first button
// step-1
document.getElementById('first-btn').addEventListener('click',function(){
    // step-2
    const firstInput = document.getElementById('input-base1');
    const firstInputValue = firstInput.value;
    const firstInputValueResult = parseFloat(firstInputValue);
    
    // step-3
    const secondInput =  document.getElementById('input-height2');
    const secondInputValue = secondInput.value;
    const secondInputValueResult = parseFloat(secondInputValue);
    // step-4
    const multiply = 0.5*(firstInputValueResult*secondInputValueResult);
    // step-5
    const firstArea = document.getElementById('first-area');
    // step-6
    firstArea.innerText = multiply;
    // step-7
    firstInput.value = '';
    secondInput.value = '';
})

function peralalogrum(){
    const base = getInputValue('third-input1');
    const height = getInputValue('third-input2');
    const multiply3 = base * height;
    const thirdArea = getElementById('second-area')
    setTextFiled('second-area',multiply3);
}

function getInputValue(filedId){
    const inputFiled  = document.getElementById(filedId);
    const inputValue = inputFiled.value;
    const value = parseFloat(inputValue);
    return value; 
}
function setTextFiled(elementId,multiply3){
    const element = document.getElementById(elementId);
    element.innerText =multiply3;

}