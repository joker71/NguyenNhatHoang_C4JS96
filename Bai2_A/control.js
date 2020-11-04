let n = prompt("Enter string 1");
let a = prompt("Enter string 2");
function merge2String(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    let resStr='';
    if (len1 >= len2) {
        for (let i = 0; i < len2; i++) {
            resStr = resStr + str1[i] + str2[i];
        }
        for (let i = len2; i < len1; i++) {
            resStr = resStr + str1[i];
        }

    }
    else {
        for (let i = 0; i < len1; i++) {
            resStr = resStr + str1[i] + str2[i];
        }
        for (let i = len1; i < len2; i++) {
            resStr = resStr + str2[i];
        }
    }
    return (resStr);
}
console.log(`${merge2String(n, a)}`);

