var list= [];
var InputU;

$(".addNew").click(function() {
    InputU=$(".newToDo").val();
    list.push(InputU);
    $(".todo").append('<li>'+InputU+'</li>');
    $(".numTasks").text(list.length);

   
   
   
   
});