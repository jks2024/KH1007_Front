// http://localhost:8090/pro06/JsonServlet

//application/json
//text/plain
//multipart/form-data 
function addHtml() {
    console.log("버튼이 눌려졌습니다.");
    const xhr = new XMLHttpRequest();
    //xhr.open("GET", "http://localhost:8090/pro06/JsonServlet");
    xhr.open("GET", "http://localhost:8090/jdbc_test/member");
    xhr.setRequestHeader("content-type", "application/json");
    const data = {
        id : 100,
        title :"XMLHttpRequest 전송하기",
        author : "곰돌이사육사"
    };
    xhr.send(JSON.stringify(data));
    xhr.onload =()=> {
        if(xhr.status == 200) {
            //val = xhr.response;
            document.getElementById("message").value = xhr.response;
            console.log(xhr.response);
        } else {
            console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력
        }

    } 
}