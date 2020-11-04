let btn= document.getElementsByClassName("btn");
let input= document.getElementsByName("form");
let playContainer= document.getElementsByClassName("play-container");
let index=0;
let r_value=[];
let res;
btn[0]. addEventListener('click', (e) => {
    index++;
    let randomNumber= 1 + Math.floor(Math.random() * 10);
    r_value.push(randomNumber);
    r_value.push(input.values);
    res=r_value[Math.floor(Math.random() * 2)];
    if(input.values == res)
    {
        alert("Bạn đã trúng thường");
       
    }
    else 
    {
        alert(`Xin mòi bạn nhập tiếp lần ${index}`);
        input.values=null;
    }

});
