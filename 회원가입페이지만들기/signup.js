let isIdValid = false;
let isPwValid = false;
let isMailValid = false;
let isPhoneValid = false;

const idBtn = document.querySelector("#id_confirm");
const pwBtn = document.querySelector("#pw_confirm");

idBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const idVal = document.getElementById("id_txt").value;
    checkID(idVal);
});
pwBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const pwVal = document.getElementById("pw_txt").value;
    checkPW(pwVal);
});

let idCheck = document.querySelector(".id_input_check");
function checkID(val) {
    const regex = /^[a-z]+[a-z0-9]{8,20}$/g;
    if(regex.test(val)) {
        isIdValid = true;
        idCheck.textContent = "사용가능한 아이디 입니다.";
        idCheck.style.color = "blue";
    } else {
        isIdValid = false;
        idCheck.textContent = "아이디 입력 조건이 맞지 않습니다";
        idCheck.style.color = "red";
    }
}

let pwCheck = document.querySelector(".pw_input_check");
function checkPW(val) {
    console.log(val);
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
    if (regex.test(val)) {
        isPwValid = true;
        pwCheck.textContent = "사용가능한 비밀번호 입니다.";
        pwCheck.style.color = "blue";
    } else {
        pwCheck.textContent = "비밀번호 입력 조건이 맞지 않습니다.";
        pwCheck.style.color = "red";
        isPwValid = false;
    }
}

