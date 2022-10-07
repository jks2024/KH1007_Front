/* 1. 성적을 입력 받아 학점 출력하기 
  - 0 ~ 100점 사이가 아니면 입력 오류 출력
  - 90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 나머지 F 처리 */
let score;
while(true) {
    score = prompt("성적 입력 : ", "");
    score = Number(score);
    if (score < 0 || score > 100) {
        alert("입력 오류 : 성적을 다시 입력 하세요.");
    } else break; 
}
if(score >= 90) document.write("<p class='score'>A</p>");
else if (score >= 80) document.write("<p class='score'>B</p>");
else if (score >= 70) document.write("<p class='score'>C</p>");
else if (score >= 60) document.write("<p class='score'>D</p>");
else document.write("<p class='score'>F</p>"); 




