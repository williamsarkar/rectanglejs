// second button
document.getElementById('second-btn').addEventListener('click',function(){
    const secondInput1 = document.getElementById('second-input1');
    const secondInputValue1 = secondInput1.value;
    const secondInputValueResult1 = parseFloat(secondInputValue1);
    
    

    const secondInput2 = document.getElementById('second-input2');
    const secondInputValue2 = secondInput2.value;
    const secondInputValueResult2 = parseFloat(secondInputValue2);

    const multiply2 = secondInputValueResult1 * secondInputValueResult2;
    

    const secondArea = document.getElementById('second-area');
   
    secondArea.innerText = multiply2;

    secondInput1.value ='';
    secondInput2.value ='';

   
})