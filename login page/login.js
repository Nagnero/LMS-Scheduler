const port = "https://kseon-server.shop"
let id, password

document.querySelector("#btn").addEventListener("click", () => {
  const id = document.querySelector("#id").value
  const password = document.querySelector("#password").value

  userLogin(id, password);

  if(id == document.querySelector("#id").value) {
      if(password == document.querySelector("#password").value) {
          alert("환영합니다!");
          //document.write("환영합니다!");          index로 연결할 것
      }
      else {
          alert("비밀번호가 맞지 않습니다.");
          //document.write("비밀번호가 맞지 않습니다.");
      }
  }
  else {
      alert("아이디 혹은 비밀번호가 맞지 않습니다.");
      //document.wrtie("아이디 혹은 비밀번호가 맞지 않습니다.");
  }
});


const userSignin = async () => {
  const response = await fetch(`${port}/users`)
} // 유저에게 값을 받는건 O,        /////////받은 값을 DB로 보내는 방법??

const userLogin = async () => {
  const response = await fetch('https://kseon-server.shop/auth/login', {
    method: 'POST',
    body: {
      "email" : "davidyeon123@naver.com",
      "pwd" : "sunwoo"
    }
  })
  const data = await response.json()
  return data
}


// 아래는 로그인 이후에 쓰일 코드
// const date // 날짜 클릭으로 해당 날짜를 20220706식으로 가져오기
// const jwt // user login에서 가져오는 유저 인식 토큰 

// const todoCheck = async () => {
//   const response = await fetch(`${port}/todo/${date}.json`, {
//     method: 'GET',
//     headers: {
//       'X-ACCESS-TOKEN': `${jwt}`
//     }
//   })
// }

// const todoCreate = async () => {
//   const input = // 입력받은 값을 저장
//   const response = await fetch(`${port}/todo/${date}?todoName=${input}.json`, {
//     method: 'POST',
//     headers: {
//       'X-ACCESS-TOKEN': `${jwt}`
//     }
//   })
// }

// const todoModify = async () => {
//   const data = // 선택한 투두의 data
//   const response = await fetch(`${port}/todo/${date}?todoName=${data}.json`, {
//     method: 'PATCH',
//     headers: {
//       'X-ACCESS-TOKEN': `${jwt}`
//     }
//   })
// }