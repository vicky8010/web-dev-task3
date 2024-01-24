let form =document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let post = document.getElementById("post")
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("button clicked");
    formvalidation();
});
let formvalidation = ()=> {
    if( input.value === ""){
        msg.innerHTML ="Post cannot be Blank";
        console.log("failure")
        }
    else{
        console.log("success")
        msg.innerHTML ="";
        acceptdata();
    }
}

let data ={};
let acceptdata =() => {
    data["text"] = input.value;
    console.log(data); 
    createpost();
};

let createpost =() =>{
post.innerHTML += 
`
<div>
<p>${data.text}</p>
<span class="option">
    <i class="fa-regular fa-pen-to-square"></i>
    <i class="fa-solid fa-trash"></i>
</span>
</div>

`


;
}