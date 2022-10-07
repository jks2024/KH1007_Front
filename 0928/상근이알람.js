let tmp, hour, min, calc;
tmp = prompt("시간 입력 : ", "");
hour = Number(tmp);
tmp = prompt("분 입력 : ", "");
min = Number(tmp);
calc = (hour * 60) + min;
if(calc < 45) {
    calc = (24 * 60) + min;
}
calc -= 45;
hour = parseInt(calc / 60);
min = calc % 60;
document.write("<h2>" + `${hour}시 ${min}분 ` + "</h2>");
