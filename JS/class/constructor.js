const kim = {
    firstName: "아무개",
    lastName: "김",
    getFullName: function () {
        return `${this.firstName} | ${this.lastName}`;
    },
};

const lee = {
    firstName: "아무개",
    lastName: "이",
    getFullName: function () {
        return `${this.firstName} | ${this.lastName}`;
    },
};

const park = {
    firstName: "아무개",
    lastName: "박",
    getFullName: function () {
        return `${this.firstName} | ${this.lastName}`;
    },
};

console.log(kim.getFullName()); // 아무개 김
console.log(lee.getFullName()); // 아무개 이
console.log(park.getFullName()); // 아무개 박

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return `${this.firstName} | ${this.lastName}`;
    };
}

const userKim = new User("김", "아무개"); // 생성자 함수 - 하나의 객체 데이터
const userLee = new User("이", "아무개"); // 생성자 함수 - 하나의 객체 데이터
const userPark = new User("박", "아무개"); // 생성자 함수 - 하나의 객체 데이터

console.log(userKim);
console.log(userLee);
console.log(userPark);

console.log(userKim.getFullName());
