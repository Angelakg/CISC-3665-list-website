function addItem() {
    console.log("Adding");
    var list = document.getElementById("list");
    // Get task color
    var colorpick = document.getElementById("colorpick");
    var colorvalue = colorpick.value;
    var color = 'background-color:' + colorvalue;
    //Get task text
    var task = document.getElementById("newTask");
    var taskVal = task.value;
    //Get date
    var temp = new Date(document.getElementById("dateInput").value)
    var dateVal = new Date( temp.getTime() - temp.getTimezoneOffset() * -60000 );
    var day = dateVal.getDate();
    var month = dateVal.getMonth() + 1;
    var year = dateVal.getFullYear();
    var dateText = month + '/' + day + '/' + year;


    //Create list element
    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center rounded-0 mb-2 selected");
    li.setAttribute("style", color);

    var firstDiv = document.createElement("div");
    firstDiv.setAttribute("class", "d-flex align-items-center");
    li.appendChild(firstDiv);
    
        //Add checkbox 
        var checkboxes = document.createElement("input");
        checkboxes.type = "checkbox";
        checkboxes.setAttribute("class","form-check-input me-3");
        checkboxes.setAttribute("aria-label","...");
        checkboxes.setAttribute("onclick", "sound()");
        checkboxes.setAttribute("id", "check");
        firstDiv.appendChild(checkboxes);

        //Add task text
        var text = document.createElement("p");
        text.setAttribute("class","lead fw-normal text-center mx-3 mb-0");
        text.innerText = taskVal; 
        firstDiv.appendChild(text);

    var secondDiv = document.createElement("div");
    secondDiv.setAttribute("class", "d-flex align-items-center");
    li.appendChild(secondDiv);

        //Add date
        var date = document.createElement("p");
        date.setAttribute("class","lead fw-normal text-center mx-3 mb-0");
        date.innerText = dateText;
        secondDiv.appendChild(date);

        //Add remove button
        var removed = document.createElement("button");
        removed.setAttribute("onclick", "removeItem()");
        removed.setAttribute("type", "button");
        removed.setAttribute("class", "btn btn-danger");
        removed.setAttribute("id", "delete");
        removed.innerHTML = 'Delete';
        secondDiv.appendChild(removed);

    list.appendChild(li);

}

function removeItem() {
    //const child = document.getElementById('delete');
    //child.parentElement.parentElement.remove();
    var items = document.querySelectorAll("#list li"),
    tab = [], liIndex;
        
        // populate tab with li data
        for(var i = 0; i < items.length; i++){
            tab.push(items[i].innerHTML);
        }

        for(var i = 0; i < items.length; i++){
            
            items[i].onclick = function(){
                
                liIndex = tab.indexOf(this.innerHTML);
                items[liIndex].parentNode.removeChild(items[liIndex]);
            };
            
        }
}

function sound(){
    var audio = new Audio('achive.mp3');
    if (document.getElementById("check").checked){
        audio.play();
    } 
}




