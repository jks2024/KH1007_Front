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

function checkID(val) {
    const regex = /^[a-z]+[a-z0-9]{8,20}$/g;
    if(regex.test(val)) {
        isIdValid = true;
        document.querySelector(".id_input_check").textContent = "사용가능한 아이디 입니다.";
        document.querySelector(".id_input_check").style.color = "blue";
    } else {
        isIdValid = false;
        document.querySelector(".id_input_check").textContent = "아이디 입력 조건이 맞지 않습니다";
        document.querySelector(".id_input_check").style.color = "red";
    }
}

function checkPW(val) {
    console.log(val);
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
    if (regex.test(val)) {
        isPwValid = true;
        document.querySelector(".pw_input_check").textContent = "사용가능한 비밀번호 입니다.";
        document.querySelector(".pw_input_check").style.color = "blue";
    } else {
        // document.querySelector(".pw_input_check").textContent = "비밀번호 입력 조건이 맞지 않습니다.";
        // document.querySelector(".pw_input_check").style.color = "red";
        document.querySelector(".pw_input_check").textContent = "사용가능한 비밀번호 입니다.";
        document.querySelector(".pw_input_check").style.color = "blue";
        isPwValid = false;
    }
}

