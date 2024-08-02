let inputTitle = document.getElementById('note-title');
let addBtn = document.getElementById('addbtn');
let inputText = document.getElementById('note-text');
let output = document.getElementsByClassName('output')[0];

let child, delBtn, h2, p;

addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if ((inputTitle.value == "") || ((inputTitle.value == " "))) {
        alert('please fill the title')
    } else if ((inputText.value == "") || ((inputText.value == " "))) {
        alert('You no hear word make you fill am nhi')
    } else {
        child = document.createElement("div")
        delBtn = document.createElement("button")
        h2 = document.createElement("h2")
        p = document.createElement("p")

        h2.innerHTML = inputTitle.value;
        p.innerHTML = inputText.value;
        delBtn.innerHTML = "Delete";

        child.classList.add("list");
        delBtn.classList.add("delete");
        h2.classList.add("output-title");
        p.classList.add("text");

        // console.log({ output, child, delBtn, h2, p });
        output.appendChild(child)
        child.appendChild(delBtn)
        child.appendChild(h2)
        child.appendChild(p)

        inputTitle.value = "";
        inputText.value = "";


    }
    // console.log(e)

    delBtn.addEventListener('click',function(){
        output.removeChild(this.parentElement)
    })
})