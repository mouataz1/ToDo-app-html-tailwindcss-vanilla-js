var input = document.querySelector('.taskinput');
var addBtn = document.querySelector('.addbtn');
var tasksContainer = document.querySelector('.todos');
addBtn.addEventListener("click", function() {
    var task = input.value;
    if (task == "") {
        alert("nothing to add !");
    } else {
        var taskdiv = document.createElement("div");
        taskdiv.classList.add("bg-gray-400");
        taskdiv.classList.add("m-1");
        taskdiv.classList.add("h-10");
        taskdiv.classList.add("rounded");
        taskdiv.classList.add("grid");
        taskdiv.classList.add("grid-cols-5");

        var taskContent = document.createElement("p");
        taskContent.classList.add("text-white");
        taskContent.classList.add("font-bold");
        taskContent.classList.add("text-3xl");
        taskContent.classList.add("col-span-3");
        taskContent.innerHTML = task;

        var delbtn = document.createElement("button");
        delbtn.classList.add("h-10");
        delbtn.classList.add("w-15");
        delbtn.classList.add("bg-red-500");
        delbtn.classList.add("rounded");
        delbtn.classList.add("hover:bg-red-900");
        delbtn.innerHTML = "Delet";

        var checkbtn = document.createElement("button");
        checkbtn.classList.add("h-10");
        checkbtn.classList.add("w-15");
        checkbtn.classList.add("bg-green-500");
        checkbtn.classList.add("rounded");
        checkbtn.classList.add("ml-1");
        checkbtn.classList.add("hover:bg-green-900");
        checkbtn.innerHTML = "Check";

        taskdiv.appendChild(taskContent);
        taskdiv.appendChild(delbtn);
        taskdiv.appendChild(checkbtn);

        tasksContainer.appendChild(taskdiv);
        input.value = "";

        checkbtn.addEventListener("click", function() {
            taskContent.classList.add("line-through");
            taskContent.classList.add("bg-green-500");
        })

        delbtn.addEventListener("click", function() {
            tasksContainer.removeChild(taskdiv);
        })


    }

})