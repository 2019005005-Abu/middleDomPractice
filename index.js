function my(){
    alert("I have clicked");
   const btn= document.getElementById('myClick')
   btn.style.backgroundColor='yellow';
   btn.style.color='red';
   btn.style.padding='10px 15px'
   btn.style.borderRadius='10px'
   btn.style.backgroundColor='yellow'
}

document.getElementById('myClick').addEventListener('click',()=>{
    console.log('I have clicked')
})

let purpelbtn=document.getElementById('mybtn');
purpelbtn.onclick=function myName(){
    document.body.style.backgroundColor='blue'
}

let makePink=document.getElementById('make_pink');
console.log(makePink)
makePink.addEventListener('click',()=>{
    document.body.style.backgroundColor='pink'
    makePink.innerHTML='yes-pink'
})

let make_red=document.getElementById('make_red');
console.log(make_red);
make_red.addEventListener('click',()=>{
    document.body.style.backgroundColor='red';
    make_red.innerHTML='yes-red'
})


const Update_btn=document.getElementById('update-btn');
console.log(Update_btn);
Update_btn.addEventListener('click',()=>{
    let inputField=document.getElementById('input_id');
    let Paragraph=document.getElementById('Para_Id');
     console.log(inputField);
     console.log(Paragraph);
     Paragraph.innerHTML=inputField.value;
     inputField.value=''
     
})


const post_btn=document.getElementById('post-Id');
console.log(post_btn);
post_btn.addEventListener('click',()=>{
   const text_area=document.getElementById('new_comment');
   const textValue=text_area.value;
   const post=document.createElement('p');
   const post_text=document.createTextNode(textValue);
   const comment_post=post.appendChild(post_text);
   console.log(text_area);
   const post_des=document.getElementById('post_description');
   post_des.appendChild(comment_post);
   console.log(post_des);
   text_area.value=''
})


const more_events=document.getElementById('more_events');
more_events.addEventListener('click',(e)=>{
    console.log('mouse-over');
    console.log(e.target.value)
})

const event_focus=document.getElementById('input_focus').addEventListener('focus',()=>{
 console.log("Input is focusing")
})


const deleteInput=document.getElementById('deleteInput');
   console.log(deleteInput);
   deleteInput.addEventListener('keyup',(event)=>{
    const text=event.target.value;
    const delete_btn=document.getElementById('btn-delete');
    console.log(text);
    if(text==='delete'){
    delete_btn.removeAttribute('disabled')
    }else{
        delete_btn.setAttribute('disabled',true)
    }
   })


   const item_2=document.getElementById('item-2');
   console.log(item_2);
   item_2.addEventListener('click',(event)=>{
   event.stopPropagation();
   console.log("Item-2  has clicked")
   })

   const all_list=document.getElementById('list-ul');
   console.log(all_list);
   all_list.addEventListener('click',()=>{
    console.log('Ul has clicked')
   })

   const body=document.getElementById('body');
   body.addEventListener('click',()=>{
    console.log('clicked')
   })
   console.log(body);

    const listContainer=document.getElementById('list-container');
    console.log(listContainer)
    listContainer.addEventListener('click',(event)=>{
     console.log(event.target);
     event.target.parentNode.removeChild(event.target);
    })
   const additem=document.getElementById('button-add-item');
   console.log(additem)
   additem.addEventListener('click',function(event){
    console.log("Button has clicked");
    const list_container=document.getElementById('list-container');
    //create li
    console.log(list_container);
    const li=document.createElement("li");
    li.innerText="Shahriar Rifat";
    li.classList.add("item");
    list_container.appendChild(li)
   })

