// 도큐먼트 생성, 갱신, 삭제

// 1. 도큐먼트 삽입
// 삽입은 몽고 DB에 데이터를 추가하는 기본 방법입니다.
// 도큐먼트를 삽입하려면 컬렉션의 insertOne 메서드를 사용합니다.

db.movies.insertOne({ "title": "Stand by Me" });

// 그러면 도큐먼트에 "_id" 키가 추가되고(제공하지 않는 경우) 도큐먼트가 몽고DB에 저장됩니다.
// _id 값은 몽고DB가 자동으로 만들어줌

// 1.1 insertMany
// 여러 도큐먼트를 컬렉션에 삽입하려면 insertMany로 도큐먼트 배열을 데이터베이스에 전달합니다.
// 코드가 삽입된 각 도큐먼트에 대해 데이터베이스로 왕복하지 않고 도큐먼트를 대량 삽입하므로 훨씬 효율적입니다.

// insertMany를 사용해 대량 삽입할 때 배열 중간에 있는 도큐먼트에서 특정 유형의 오류가 발생하는 경우
// 정렬 연산을 선택했는지 혹은 비정렬 연산을 선택했는지에 따라 발생하는 상황이 달라집니다.

db.movies.insertMany([{ "title": "Titanic" }, { "title": "Inception" }, { "title": "Interstellar" }]);

// insertMnay에 대한 두 번째 매개변수로 옵션 도큐먼트를 지정할 수 있습니다.
// 도큐먼트가 제공된 순서대로 삽입되도록 옵션 도큐먼트에 "ordered" 키에 true를 지정합니다.
// false를 지정하면 몽고DB가 성능을 개선하려고 삽입을 재배열할 수 있습니다.
// 순서가 지정되지 않았다면 정렬된 삽입이 기본값입니다.

// 정렬된 삽입의 경우 삽입에 전달된 배열이 삽입 순서를 정의합니다.
// 도큐먼트가 삽입 오류를 생성하면, 배열에서 해당 지점을 벗어난 도큐먼트는 삽입되지 않습니다.
// 정렬되지 않은 삽입의 경우 몽고DB는 일부 삽입이 오류를 발생시키는지 여부에 관계없이 모든 도큐먼트 삽입을 시도합니다.

// 1.1.1 orderd 옵션
// 여러 개 넣을 때 오류가 나면 어떻게 할지 정하는 옵션입니다.
// - ordered: true (기본) => 중간에 오류 나면 그 이후는 삽입하지 않음
// - ordered: false => 오류가 나도 가능한 건 계속 삽입

db.movies.insertMany(
    [
        { "title": "A" },
        { "title": "B", "_id": 1 },
        { "title": "C", "_id": 1 }, // 중복 id 오류!
    ],
    { ordered: false }
);

// _id 같은 게 겹치는 경우 오류 발생할 수 있음
// 하지만 ordered: false면 가능한 것만 넣어줌

// 2. 도큐먼트 삭제
// MongoDB에서는 데이터를 삭제할 때 deleteOne() 과 deleteMany() 를 사용합니다.

// deleteOne() → 조건에 맞는 첫 번째 문서만 삭제
// deleteMany() → 조건에 맞는 모든 문서 삭제

// 삭제할 때는 어떤 데이터를 지울지 조건(필터)를 넣어줘야 해요.


// deleteOne과 deleteMany를 제공한다.
// 두 메서드 모두 필터 도큐먼트를 첫 번째 매개변수로 사용합니다.
// 필터는 도큐먼트를 제거할 때 비교할 일련의 기준을 지정합니다.

// "_id" 값이 4인 도큐먼트를 삭제하려면 다음과 같이 mongo 셸에서 deleteOne을 사용합니다.

db.movies.find()
// { "_id": 0, "title": "Top Gun" }
// { "_id": 1, "title": "Back to the Future" }
// { "_id": 2, "title": "Sixteen Candles" }
// { "_id": 3, "title": "The Terminator" }


db.movies.deleteOne({"_id": 4})
// _id 는 문서마다 고유하므로 조건에 딱 하나만 해당됩니다.

// 왜 deleteOne?
// _id는 항상 고유(unique) 값 → 같은 값이 2개 있을 수 없음
// 따라서 이 조건으로는 무조건 한 개만 삭제

// "_id" 값이 컬렉션에서 고유하기 때문에 여기서는 하나의 도큐먼트만 일치시킬 수 있는 필터로 사용했습니다.
// 그러나 컬렉션 내 여러 도큐먼트와 일치하는 필터도 지정할 수 있습니다.

// 이때, deleteOne은 필터와 일치하는 첫 번째 도큐먼트를 삭제합니다.
// 조건과 맞는 문서가 여러 개라도 deleteOne() 은 첫 번째 문서만 삭제합니다.

// 필터와 일치하는 모든 도큐먼트를 삭제하려면 deleteMany를 사용합니다.
// deleteMany()는 지정한 조건(필터) 과 일치하는 모든 도큐먼트(문서) 를 삭제합니다.
// 즉, 조건에 해당되는 데이터가 여러 개라면 그걸 전부 다 지워버리는 명령입니다.

// db.movies.deleteMany({ genre: "comedy" });
db.movies.deleteMany({ "genre": "comedy" });
// → 코미디 영화 문서가 10개면, 10개가 전부 삭제됩니다.

// 전체 삭제 조심!
// 빈 필터 {}를 넣으면 컬렉션 내부의 모든 문서를 삭제
db.movies.deleteMany({})
// 이 명령은 삭제 폭탄이니 조심해야 합니다! (테이블 초기화 같은 효과)
// 컬렉션(테이블) 자체는 남아있음
// 즉, 내용만 싹 지우는 것

// 그러나 전체 컬렉션을 삭제하려면 다음과 같이 drop을 사용하는 편이 더 빠릅니다.
db.movies.drop()
// 컬렉션 자체가 삭제
// 내부 문서 + 컬렉션 구조 + 인덱스 모두 삭제
// 마치 테이블을 아예 없애는 것과 동일
// 즉, 테이블을 통째로 없애는 것

// 3. 도큐먼트 갱신
// 도큐먼트를 데이터베이스에 저장한 후에는 updateOne, updateMany, replaceOne과 같은 갱신 메서드를 사용해 변경합니다.
// updateOne, updateMany는 필터 도큐먼트를 첫 번째 매개변수로, 변경 사항을 설명하는 수정자 도큐먼트를 두 번째 매개변수로 사용합니다.
// replaceOne도 첫 번째 매개변수를 필터로 사용하지만 두 번째 매개변수는 필터와 일치하는 도큐먼트를 교체할 도큐먼트입니다.

// 3.1 도큐먼트 치환
// replaceOne은 도큐먼트를 새로운 것으로 완전히 치환합니다.
{
    "_id" : ObjectId("abcdefghijklmnopqrstuvwxyz"),
    "name" : "joe",
    "friends" : 32,
    "enemies" : 2
}

// "friends"와 "enemies" 필드를 "relationships"라는 서브 도큐먼트로 옮겨보도록 하겠습니다.
// 셸에서 도큐먼트의 구조를 수정한 후 replaceOne을 사용해 데이터베이스의 버전을 교체합니다.

// - 새 구조로 변활할 목표
{
    "_id" : ObjectId("abcdefghijklmnopqrstuvwxyz"), // _id는 유지
    "name" : "joe",
    "relationships" : {    
        "friends" : 32,
        "enemies" : 2
    }
}

const joe = db.users.findOne({ "name" : "joe" });
joe.relationships = { "friends" : joe.friends, "enemies" : joe.enemies };

joe.username = joe.name;

delete joe.friends;
delete joe.enemies;
delete joe.name;

db.users.replaceOne({ "_id": joe._id }, joe);

// 3.2 갱신 연산자
// MongoDB에서 문서를 수정할 때, 
// - 전체 문서를 바꾸지 않고
// - 필요한 부분만 수정하는 경우가 대부분입니다.

// 이를 위해 MongoDB는 갱신 연산자(update operator)라는 특별한 키를 제공합니다.
// 이 연산자들은 아래와 같은 일을 합니다.

// - $set : 필드 값 바꾸기
// - $inc : 숫자 늘리기/줄이기
// - $unset : 필드 삭제
// - $push : 배열에 값 넣기
// - $pull : 배열에서 값 빼기

db.users.insertOne({
    name: "Park",
    age: 25,
    friends: 3,
    hobbies: ["games", "music"],
    profile: {
        city: "Seoul",
        level: 1
    }
})

// 1. park의 age를 26으로 변경하세요.
db.users.updateOne({ "name": "park" }, { $set: { age: 33 }})

// 2. park의 친구 수(friends)를 2명 증가시키세요.
db.users.updateOne({ "name": "park" }, { $inc: { friends: 2 }})