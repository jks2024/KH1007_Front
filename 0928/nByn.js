/* 2. 정수 n을 입력 받아 n * n 행렬 출력하기
 - 예) 3 입력
   1 2 3
   4 5 6
   7 8 9  */
   let n = prompt("정수 입력 : ");
   n = Number(n);
   for(let i = 1; i <= n * n; i++) {
        document.write("<span class=nbyn>" + i + " " + "</span>");
        if(i % n == 0) document.write("<br>");
   }
