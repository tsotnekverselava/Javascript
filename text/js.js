const textelement=document.getElementById("text");
const speedelement=document.getElementById("speed");
const text="Hello,my name is tsotne";
let index=1;
let speed=300/speedelement.value;

const write=()=>{
textelement.innerHTML=text.slice(0,index);
index++;
if(index>text.length)

    index=1;
    setTimeout(write,speed);





};

write();

speedelement.addEventListener("input",(e)=>(speed=300/e.target.value));
