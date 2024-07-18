function conversion (){
    let val = Number(document.getElementById('textbox').value);
    const tofarenheit = document.getElementById('farenheit');
    const tocelsius = document.getElementById('celsius');
    let result = document.getElementById('result');
    let temp=0;

    if(tofarenheit.checked){
    //°F = (°C × 9/5) + 32
    temp = (val * 9/5) + 32;
    result.textContent= temp.toFixed(1) +" F "; 
    }
    else if (tocelsius.checked){
    //°C = (°F − 32) x 5/9
    temp = (val - 32)*5/9;
    result.textContent= temp.toFixed(1)  +" C "; 
}
   else{
        result.textContent = "Please select your option ";
    }
}