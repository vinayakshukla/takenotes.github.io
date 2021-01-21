console.log("hlo");
showNotes();
let addBtn=document.getElementById("addBtn");

addBtn.addEventListener("click",function(e){
   let addTxt=document.getElementById("addTxt");
   let addTxtTitle=document.getElementById("addTxtTitle");
   let notes=localStorage.getItem("notes");
   if(notes==null)
   {
     notesObj=[];

   }
   else{
       notesObj=JSON.parse(notes);

   }
   let TxtObj={ title:addTxtTitle.value, body: addTxt.value};
   notesObj.push(TxtObj);
   localStorage.setItem("notes", JSON.stringify(notesObj));
   addTxt.value="";
   addTxtTitle.value="";
   console.log(notesObj);
   showNotes();
       
   });

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
      notesObj=[];
 
     }
    else{
        notesObj=JSON.parse(notes);
 
    }
    let html="";
    notesObj.forEach(function(element, index){
       html+= ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">   
        <div class="card-body">      
             <h5 class="card-title"> ${element.title}</h5>    
                     <p class="card-text">${element.body}</p>    
                            <button id=${index} onClick=deleteNode(this.id) class="btn btn-primary">Delete Note</button>  
                                 </div>   
       </div>`
       
    });
    let notesElm=document.getElementById('notes');
    if(notes.length!=0)
    {
        notesElm.innerHTML=html;
    }
    else {

        notesElm.innerHTML="nothing to show";
    }
}

function deleteNode(index){
   console.log(index+" clicked");
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
      notesObj=[];
 
    }
    else{
        notesObj=JSON.parse(notes);
      
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


let search=document.getElementById("searchNotes");

search.addEventListener("input",function(e){
let search=document.getElementById("searchNotes");
let text=search.value;
console.log(text); 
let cards=document.getElementsByClassName('noteCard');
Array.from(cards).forEach(function(element){

    let cardTxt=element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(text)){
       element.style.display="block"
    }
    else
    element.style.display="none";
    
});
});