// 셀 기본 작업 (CRUD)
// MongoDB에서 데이터를 다루기 위해서는 CRUD라고 부르는 네 가지 기본 작업을 사용합니다.
// CRUD는 다음 네 가지 단어의 첫 글자를 딴 것입니다.

// Create (생성)
// Read (읽기)
// Update (갱신)
// Delete (삭제)

// 이 네 가지 작업을 통해 컬렉션(collection)에 있는 도큐먼트(document)를 추가하거나, 조회하거나, 수정하거나, 삭제할 수 있습니다.

// 1. 생성 (Create)
// 새로운 데이터를 컬렉션에 추가할 때는 insertOne() 함수를 사용합니다.
// 예를 들어 영화 정보를 저장한다고 가정해 보겠습니다.

// 먼저 하나의 영화 정보를 담은 도큐먼트를 자바스크립트 객체로 만듭니다.
// movie = {
//     "title": "Star Wars: Episode IV - A New Hope",
//     "director": "George Lucas",
//     "year": 1977
// };

// 그 다음, 이 도큐먼트를 컬렉션에 추가합니다.
db.movies.insertOne(movie);
// 이렇게 하면 movies 컬렉션에 새로운 영화 도큐먼트가 저장됩니다.

// 2. 읽기 (Read)
// 저장된 데이터를 조회할 때는 find() 또는 findOne() 함수를 사용합니다.

// findOne() : 조건에 맞는 하나의 도큐먼트만 가져옵니다.
// find() : 조건에 맞는 여러 개의 도큐먼트를 가져옵니다.

// 조건을 지정하지 않으면 컬렉션의 모든 도큐먼트를 읽을 수 있습니다.
// 예를 들어, movies 컬렉션에서 한 개의 영화 정보를 조회하려면 다음과 같이 합니다.
db.movies.findOne();

// 조건을 지정하여 원하는 도큐먼트를 찾을 수도 있습니다.
// 예를 들어 감독이 “George Lucas”인 영화를 찾으려면 다음과 같이 작성합니다.
// db.movies.findOne({ "director": "George Lucas" });

// 3. 갱신 (Update)
// 저장된 데이터를 수정하려면 updateOne() 함수를 사용합니다.
// 이 함수는 컬렉션에 있는 도큐먼트 중 조건에 맞는 하나의 도큐먼트를 찾아서 수정합니다.

// 기본 구조
// updateOne() 함수는 두 개의 필수 매개변수를 받습니다.

// 1. 수정할 도큐먼트를 찾는 기준(조건)
// 2. 어떤 내용을 수정할지 나타내는 갱신 명령

// 형식은 다음과 같습니다.
// 첫 번째는 수정할 도큐먼트를 찾는 기준이고, 두 번째는 갱신 작업을 설명하는 도큐먼트입니다.
db.컬렉션이름.updateOne({ 찾을_조건 }, { 갱신_내용 });

// 갱신하려면 갱신 연산자(update operator)인 set을 이용합니다.

// 예시
// 예를 들어, movies 컬렉션에 저장된 영화 중에서
// "title"이 "Star Wars: Episode IV - A New Hope"인 도큐먼트의 year 값을 수정해 보겠습니다.
// db.movies.updateOne(
//     { "title": "Star Wars: Episode IV - A New Hope" },   // 수정할 도큐먼트의 조건
//     { $set: { "year": 1978 } }                           // 변경할 내용
// );

// 갱신 연산자 $set

// 갱신할 때는 반드시 갱신 연산자(update operator)를 사용해야 합니다.
// 그중 가장 많이 사용하는 연산자가 $set 입니다.

// $set : 지정한 필드의 값을 새 값으로 변경합니다.
// 만약 그 필드가 존재하지 않으면 새 필드를 추가합니다.

// { $set: { "director": "George Lucas Jr." } }

// 이 코드는 "director" 필드의 값을 "George Lucas Jr."로 바꾸거나,
// 해당 필드가 없으면 새로 추가합니다.

// 4. 삭제 (Delete)
// 데이터베이스에서 저장된 도큐먼트를 제거하려면 deleteOne() 또는 deleteMany() 함수를 사용합니다.
// 이 두 함수는 도큐먼트를 영구적으로 삭제하므로, 삭제 전에 꼭 필요한 데이터인지 확인해야 합니다.

// 기본 개념
// deleteOne() : 조건에 맞는 하나의 도큐먼트만 삭제합니다.
// deleteMany() : 조건에 맞는 여러 개의 도큐먼트를 모두 삭제합니다.

// 두 함수 모두 삭제 조건을 담은 필터 도큐먼트(filter document)를 매개변수로 받습니다.
// 이 조건에 맞는 도큐먼트가 실제로 삭제됩니다.

// 예시 1 — 단일 도큐먼트 삭제
// 예를 들어, "title"이 "Star Wars: Episode IV - A New Hope"인 영화를 하나만 삭제하고 싶다면 다음과 같이 작성합니다.

// db.movies.deleteOne({ "title": "Star Wars: Episode IV - A New Hope" });

// 이 명령은 조건에 맞는 도큐먼트를 찾은 뒤, 첫 번째 한 건만 삭제합니다.

// 예시 2 — 여러 도큐먼트 삭제
// 만약 감독이 "George Lucas"인 영화를 모두 삭제하고 싶다면,
// deleteMany()를 사용할 수 있습니다.

// db.movies.deleteMany({ "director": "George Lucas" });

// 이 명령은 조건에 맞는 모든 도큐먼트를 찾아 전부 삭제합니다.

// 주의할 점
// - 삭제 작업은 되돌릴 수 없습니다.
// - 조건을 지정하지 않고 실행하면 컬렉션의 모든 도큐먼트가 삭제될 수 있습니다.

// 예를 들어, 아래 명령은 모든 도큐먼트를 삭제하므로 주의해야 합니다.
db.movies.deleteMany({});
