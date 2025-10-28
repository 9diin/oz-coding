### MongoDB 설치 및 실행 스크립트 (Mac / Homebrew)

1. MongoDB 공식 저장소 추가 <br>
   `brew tap mongodb/brew`

2. MongoDB 커뮤니티 서버 설치 <br>
   `brew install mongodb-community`

3. MongoDB Shell 설치 <br>
   `brew install mongosh`

4. MongoDB Database Tools 설치 (선택) <br>
   `brew install mongodb-database-tools`

5. MongoDB 서버 실행 <br>
   `brew services start mongodb/brew/mongodb-community`

6. MongoDB Shell 접속 <br>
   `mongosh`

7. 설치 확인 <br>
   `brew services list` <br>
   echo "설치 완료. 터미널에서 'mongosh' 명령어로 MongoDB Shell에 접속하세요."

8. MongoDB Shell(mongosh) 종료 <br>
   `exit`

9. MongoDB 서버 종료 <br>
   `brew services stop mongodb/brew/mongodb-community`
