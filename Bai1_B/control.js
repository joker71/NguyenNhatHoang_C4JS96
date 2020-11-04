let btn = document.getElementsByClassName("btn");
let input = document.getElementById("form");
let playContainer = document.getElementsByClassName("play-container");
let display = document.getElementsByClassName("container");
let index = 0;
let  scott=0;
// while (index < 3) {
//     btn[0].addEventListener('click', (e) => {
//         index++;
//         let i_value = parseInt(input.value);
//         let r_value = Math.floor(Math.random() * 10) + 1;
//         let a_value = [i_value, r_value];
//         if (i_value == a_value[Math.floor(Math.random() * 2)]) {
//             alert("Bạn đã trúng thưởng");
//         }
//         else {
//             alert("Chuc bạn may man lan sau");
//         }
//     });
// }


btn[0].addEventListener('click', (e) => {
    index++;
    if (index == 2) {
        alert(`Bạn hết lượt !: DDieetm ${scott}`);
    }
    else {
        console.log(e);
        let i_value = parseInt(input.value);
        console.log(i_value);
        let r_value = Math.floor(Math.random() * 10) + 1;
        console.log(r_value);
        let a_value = [i_value, r_value];

        if (i_value == a_value[Math.floor(Math.random() * 2)]) {
            alert("Bạn đã trúng thưởng");
            scott++;
        }
        else {
            alert("Chuc bạn may man lan sau");
        }
        console.log(index);
    }
});



function reset()
{
    display[0].innerHTML='';
    display[0].insertAdjacentHTML('beforeend',`<h1>Lucky Number</h1>
        <!-- <p>Dự đoán con số của bạn nằm trong khoảng từ 1 tới 10</p> -->
        <div class="play-container">
            <p>Dự đoán con số của bạn nằm trong khoảng từ 1 tới 10</p>
            <input type="number" id="form" name="form" placeholder="Nhập con số mà bạn dự đoán">
            <button class="btn">Quay số</button>
        </div>`);
    index=0;
}