console.log('Hello World!');
const chngclr = () => {
  const cval = document.querySelectorAll("input")[0];
  const para = document.querySelector("p");
  const txtarea = document.querySelector("textarea");
   txtarea.style.color = cval.value;
   para.style.color = cval.value;
}

const makeBold = () => {
  const txtarea = document.querySelector("textarea");
  const para = document.querySelector("p");
  txtarea.classList.toggle("bold");
    para.classList.toggle("bold");

}

const makeItalic = () => {
  const txtarea = document.querySelector("textarea");
  const para = document.querySelector("p");
    txtarea.classList.toggle("italic");
    para.classList.toggle("italic");

}
const makeUnderline = () => {
  const txtarea = document.querySelector("textarea");
  const para = document.querySelector("p");
    txtarea.classList.toggle("underline");
        para.classList.toggle("underline");

    //console.log(txtarea.className);

}
const makeMono = () => {
  const txtarea = document.querySelector("textarea");
  const para = document.querySelector("p");
    txtarea.classList.toggle("monospace");
    para.classList.toggle("monospace");

}
const defaultt = () => {
  const txtarea = document.querySelector("textarea");
  const para = document.querySelector("p");
  txtarea.classList.remove("italic", "bold" ,"underline", "monospace");
    para.classList.remove("italic", "bold" ,"underline", "monospace");

  txtarea.style.color = "black";
}


const save = () => {
  const txtarea = document.querySelector("textarea");
  const para = document.querySelector("p");
  para.innerHTML = txtarea.value;
  txtarea.value = " ";
  //console.log(para.value);
}
const dlt = () => {
  const txtarea = document.querySelector("textarea");
    txtarea.value = "";

}

const setImg = () => {
    const ival = document.querySelectorAll("input")[1];
 const pict = document.querySelector("img");
   pict.src = ival.value;
 console.log(pict.src);
 //pict.style.border = "1px solid black";
 ival.value = "";
}