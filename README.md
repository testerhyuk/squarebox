# squarebox

## 개발 환경
  - Springboot
  - React
  - MySQL
  - TypeScript

## 주요 기능
  - 회원가입, 로그인, 로그아웃(구현예정)
  <img src='https://github.com/testerhyuk/squarebox/blob/master/src/main/frontend/src/images/%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif?raw=true'>
  
    - 로그인 시 Jwt 토큰 발행 후 axios로 로그인 정보 post 전송
  
  <img src='https://github.com/testerhyuk/squarebox/blob/master/src/main/frontend/src/images/%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8%EB%B6%88%EC%9D%BC%EC%B9%98.gif?raw=true'>
  
    - 회원 가입 시 비밀번호가 다르면 alert창으로 띄우고 return
    
  <img src='https://github.com/testerhyuk/squarebox/blob/master/src/main/frontend/src/images/%EC%9D%B4%EB%A9%94%EC%9D%BC%EC%A4%91%EB%B3%B5.gif?raw=true'>
  
    - 회원 가입 시 데이터베이스에 이메일이 존재하면 alert창으로 띄우고 return
    
  
  - 영상 출력
  
  <img src='https://github.com/testerhyuk/squarebox/blob/master/src/main/frontend/src/images/%EB%B0%B0%EB%84%88%EC%98%81%EC%83%81.gif?raw=true'>
  
    - 배너에서 재생 클릭시 해당 영화에 맞는 예고편을 유튜브에서 찾아 출력
  
  <img src='https://github.com/testerhyuk/squarebox/blob/master/src/main/frontend/src/images/%EC%83%81%EC%84%B8%EC%A0%95%EB%B3%B4.gif?raw=true'>
   
    - 상세 정보 클릭 시 해당 영화에 대한 소개와 평점을 출력하고 재생 버튼 클릭 시 예고편을 유튜브에서 찾아 출력
  
  - 슬라이더
  
  <img src='https://github.com/testerhyuk/squarebox/blob/master/src/main/frontend/src/images/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94.gif?raw=true'>
    
    - carousel을 통하여 많은 갯수의 영화를 자연스레 노출 가능
  
  - 검색 기능
  
  <img src='https://github.com/testerhyuk/squarebox/blob/master/src/main/frontend/src/images/%EA%B2%80%EC%83%89%EA%B8%B0%EB%8A%A5.gif?raw=true'>
  
    - 검색을 통해 쿼리를 전달하여 검색어에 맞는 영화 정보 노출
    
  <img src='https://github.com/testerhyuk/squarebox/blob/master/src/main/frontend/src/images/%EA%B2%80%EC%83%89%EC%97%86%EC%9D%84%EB%95%8C.gif?raw=true'>
  
    - 검색어가 없다면 영화가 나오지 않고 검색란이 비어있다면 다시 메인페이지로 
