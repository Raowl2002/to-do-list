const addTask = document.querySelector(".add input");
const addBtn = document.querySelector(".add button");

addBtn.addEventListener("click",() =>{
    document.querySelector(".task").style.display = "block";
    if(addTask.value ==""){
        const p = document.createElement("p");
        p.textContent = "Please enter a task!";
        try{p.classList.add("tasks");}
        catch(err){
            console.log(err);
        }
        document.getElementById("task").appendChild(p); 
    }else{
        // adding the elements
        const div = document.createElement("div");
        div.classList.add("tasks");
        const list = document.createElement("li");
        const btn = document.createElement("button");
        //Have to add the animation class so that the element disappears
        btn.addEventListener("click",() =>{
            div.remove();
            
        });
        // added content to the added div and list and btn
        list.textContent=addTask.value;
        btn.innerHTML =' <i class="fa-solid fa-minus">';
        div.appendChild(list);
        div.appendChild(btn);
        // adding the elements to the dom
        document.querySelector(".task").appendChild(div);
        addTask.value = "";
    }
    
});
