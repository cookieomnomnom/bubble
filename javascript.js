var arrayElement = document.getElementsByClassName("inputArray");
var inputArray = [];
var arrayDiv = document.getElementById("divForArray");
var stepI = 0, stepJ = 0;

function inputToDiv(){
    if(inputArray.length=='')
        for (var i = 0; i < arrayElement.length; i++){
        if (arrayElement[i].value == ""){
            arrayElement[i].value = "0";
        }
        inputArray.push(parseInt(arrayElement[i].value));
        var div = document.createElement('div');
        div.innerHTML = arrayElement[i].value;
        div.className = "arraySort";
        arrayDiv.appendChild(div); 
    }
}

function resetArray(){
    inputArray.length = "0";
    arrayDiv.innerHTML = '';
    document.getElementById("hiddenButtons").style.display='none';
}

function stepOfSort(){          
    if (stepJ >= arrayDiv.childElementCount - stepI - 1){
        paint(arrayDiv.children[stepJ], "#a886b0");
        if (stepJ != 0)
            paint(arrayDiv.children[stepJ - 1], "#ecd9c0");
        if (stepI >= arrayDiv.childElementCount - 1){
            document.getElementById("step").value="Ураааааа";
            paint(arrayDiv.children[stepJ - 1], "#a886b0");
            document.getElementById("step").disabled=true;
            return;
        }
        stepI++;
        stepJ = 0;
    }
    
    var i = stepI;
    var j = stepJ;
    
    if(j > 0){
        paint(arrayDiv.children[j], "#ecd9c0");
        paint(arrayDiv.children[j - 1], "#ecd9c0");
    }
    
    if (parseInt(arrayDiv.children[j].innerHTML) >           parseInt(arrayDiv.children[j+1].innerHTML)){
        var temp = arrayDiv.children[j]; arrayDiv.removeChild(arrayDiv.children[j]);
        if(j != arrayDiv.childElementCount - 1)
            arrayDiv.insertBefore(temp, arrayDiv.children[j + 1]);
        else
            arrayDiv.appendChild(temp); 
    }   
    paint(arrayDiv.children[j], "#c9b4ce");
    paint(arrayDiv.children[j + 1], "#c9b4ce");
    
    stepJ++;
}

function paint(itemToPaint, color){
    itemToPaint.style.background = color;
}

function openButtons(id){
       document.getElementById(id).style.display='block';
}


