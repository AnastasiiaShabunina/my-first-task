let tasks = [
    {
      id: generateFakeId(),
      name: "Cook the dinner",
    //done: false,
    },
    {
      id: generateFakeId(),
      name: "Go to the gym",
      //done: true
    },
    {
      id: generateFakeId(),
      name: "Meet Kevin",
    },
    {
      id: generateFakeId(),
      name: "Pay bills",
    },
  ];
  
  let tasksUl = document.querySelector("#myList");
  let p1 = document.getElementById('countOfTasks');
  let p = document.querySelector("p");
  
  window.addEventListener("load", function () {
    tasks.forEach((task) => {
      addLiToUl(task.name, task.id);
    });
    countOfTasks();
  });
  
  function addLiToUl(taskName, taskId) {
    if (taskName.length > 3) {
      let li = document.createElement("li");
      li.className = "todo-list__item";
  
      let span = document.createElement("span");
      span.innerHTML = taskName;
      li.appendChild(span);
  
      let dataId = document.createAttribute("data-id");
      dataId.value = taskId;
      span.setAttributeNode(dataId);
  
      createButton("todo-list__delete-btn", "X", li, deleteAction);
  
      tasksUl.appendChild(li);
      if(p.innerHTML != ''){
        p.innerHTML = '';
      }
  
    } else {
      p.innerHTML = "New task is required";
      //p.className = 'addedErrorMessage';
    }
    countOfTasks()
  
  }
  
  let addButton = document.querySelector("#addButton");
  addButton.addEventListener("click", function () {
    let newTask = document.querySelector("#newTask");
    addLiToUl(newTask.value);
  
    tasks.push({
      name: newTask.value,
    });
    countOfTasks();
    newTask.value = "";
  });
  
  function createButton(className, value, parentNode, action) {
    let input = document.createElement("input");
    input.type = "button";
    input.className = className;
    input.value = value;
    input.addEventListener("click", action);
    parentNode.appendChild(input);
  }
  
  function deleteAction(event) {
    let parentLi = event.target.closest("li");
    let value = parentLi.firstChild.innerHTML;
    let id = tasks.findIndex((task) => task.name === value);
    tasks = tasks.filter((task, i) => i != id);
    parentLi.remove();
    countOfTasks();
  }
  
  tasksUl.onclick = function (event) {
    let parentLi = event.target.closest("li");
    if (parentLi.className === 'todo-list__item'){
      let value = parentLi.firstChild.innerHTML;
      let id = tasks.findIndex((task) => task.name === value);
      tasks = tasks.filter((task, i) => i != id);
      parentLi.className = "todo-list__item todo-list__item--done";}
    else{
      parentLi.className = 'todo-list__item';}
      countOfTasks()  
    ;}
  
  
    function generateFakeId() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function
      (c) {
      let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
      });
      }
  
      let addRandomBtn = document.getElementById('addRandomBtn');
      addRandomBtn.addEventListener('click', getRandomTask);
  
      function getRandomTask(){
        let xhr = new XMLHttpRequest();
        let url = 'https://favqs.com/api/qotd';
        xhr.open("GET", url), xhr.send();
        xhr.onload = function () {
          if (xhr.status != 200) {
            alert("Error! Cannot load random task!"); //красиво изменить всплывающим сообщением
            return;
            }
            let taskObj = JSON.parse(xhr.response);
            let newRandomTask = taskObj.quote.body;
            let newId = generateFakeId();
            addLiToUl(newRandomTask, newId);
  
            tasks.push({id: newId, name: newRandomTask})
      }}
  
      function countOfTasks(){
       // let countOfDoneTasks = document.querySelectorAll('.todo-list__item todo-list__item--done');
        let doneTasks = document.querySelectorAll('.todo-list__item--done').length;
        let activeTasks = document.querySelectorAll('.todo-list__item').length;
        // countOfTaks.innerHTML = tasks.length;
        if(doneTasks){
          p1.innerHTML = `${activeTasks}` + ' tasks, ' + `${doneTasks}`+ ' done';
        } else {
          p1.innerHTML = `${activeTasks}` + ' tasks';
        }
       
        // countOfDoneTasks.innerHTML = countOfDoneTasks.length;
        // if(countOfDoneTasks.length === 0){
        //   
        // } else {
        //   p1.innerHTML = `${countOfTaks}` + 'tasks,' + `${countOfDoneTasks}`;
        // }
       
      }