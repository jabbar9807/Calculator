let displayValue = '' ;
function Display(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}
function clearDisplay(value){
displayValue =''
document.getElementById('display').value ='';
}
function calculate(){
    try{
        displayValue =eval(displayValue);
        document.getElementById('display').value = displayValue;
    }
    catch (error){
        document.getElementById('display').value = 'error';
    }
}