function Xbox(node){
    var span = document.createElement("SPAN");
    var closeBtn = document.createTextNode("\u2718");
    span.className="close";
    span.appendChild(closeBtn);
    node.appendChild(span);
  }// create X button next to the text

function close(){
    var close=document.getElementsByClassName("close");
    var i=close.length-1; //index for the recently added elemenet
    close[i].onclick=function(){
    var div=this.parentElement; // target the li tag
    div.style.display="none";
    div.remove(); // absolutely remove the data for garbage collections and for the find function check whehter input already exists in the current ToDo lists
  }
}// remove the element in the todoLists  when the close button is clicked



function Donebox(node){
  var span = document.createElement("SPAN");
  var doneBtn = document.createTextNode("\u2713");
  span.className="done";
  span.appendChild(doneBtn);
  node.appendChild(span);
} //createDoneBox


function Done(){
  var done=document.getElementsByClassName("done");
  var i=done.length-1;
    done[i].onclick=function(){
      var div=this.parentElement;
      var tdlist=div.getElementsByClassName("todoListElement");
      var doneElement = (tdlist.item(0).innerHTML);//get the text of the element to move to donelists
      div.style.display="none";
      div.remove();

      var li = document.createElement("LI");
      var node = document.getElementById("doneLists");
      var doneListele = document.createTextNode(doneElement);
      li.className="doneListElement";
      li.appendChild(doneListele);
      node.appendChild(li); //create Textnode and push it to the li
      nametag("doneListElement","YouveDone", " -  You have done");//set the header title if the addition to the donelist is first time

  }
}

function find(input){
  var i;
  var alreadyList=document.getElementsByClassName("todoListElement");
  if(alreadyList){

    try{
          for(i=0; i<alreadyList.length;i++){
        var element=alreadyList[i].innerHTML;
        if(element.localeCompare(input)==0){//localeCompare compares string
          alert('You already wrote that!');
          return false;
        }
      }
    }
      catch(err){}// I don't know why but js does not let me to use innerHTML of vacant collections although it is filtered in if statement...
  }
  return true;
}

function nametag(checkList,targetList, name){
  var chck=document.getElementsByClassName(checkList);
  if(chck){
    if(chck.length==1){
      var node=document.getElementsByClassName(targetList);
      node[0].innerText=name;
    }
  }
}//If the list is created first time, set the title of the header explaining the list



function newElement(){
  var input=document.getElementById('input').value;
  if(input!==""){//if there is actual input
  if(find(input)){//if the input does not exist in the list already

  var node=document.createElement("LI");
  var span=document.createElement("SPAN");
  var textnode=document.createTextNode(input);
  span.appendChild(textnode);
  span.className="todoListElement";
  node.appendChild(span);


  node.addEventListener('click',function(ev){
      ev.target.classList.toggle('checked');
  }, false); // Change the state of element into checked state after click as toggle and make the close button visible

  document.getElementById("todoLists").appendChild(node);
  document.getElementById("input").value="";

  Xbox(node);
  Donebox(node);//create x box and done box for each elements
}
else{
  document.getElementById("input").value=""; // if there is no input or already existing input, remove the text in the input box

}

nametag("todoListElement","haveTo"," - You have to"); // check whether todolist is empty and create header title


}
else{
  alert("Write Something");
}
close();
Done();
}// Add the inputs to input id in the html
