const taskInput=document.getElementById('taskInput');
const addTaskButton=document.getElementById('addTaskButton');
const taskContainer=document.getElementById('taskContainer');
const clearListButton=document.getElementById('clearListButton');

addTaskButton.addEventListener('click',function(){
    let newTask=taskInput.value;
    if(newTask){
        const newListItem=document.createElement('p');
        newListItem.classList.add('newTask');
        newListItem.innerHTML=newTask;
        newListItem.addEventListener('click',function(){
            this.classList.toggle('done');
        });
        taskContainer.appendChild(newListItem);
        taskInput.value='';
    };
});

clearListButton.addEventListener('click',function(){
    while(taskContainer.firstChild){
        taskContainer.removeChild(taskContainer.firstChild);
    };
});