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

console.log(kim.getFullName()); // 김 아무개
console.log(lee.getFullName()); // 이 아무개
console.log(park.getFullName()); // 박 아무개

function User() {
    this.firstName = this.firstName;
    this.lastName = this.lastName;

    this.getFullName = function () {
        return `${this.firstName} | ${this.lastName}`;
    };
}

User.prototype.getFullName = function () {
    return `${this.firstName} | ${this.lastName}`;
}; // => 딱 한 번만 만들어진다. => 딱 한 번만 만들어진 함수를 참조한다.

const userKim = new User("아무개", "김"); // 생성자 함수 - 하나의 객체 데이터
const userLee = new User("아무개", "이"); // 생성자 함수 - 하나의 객체 데이터
const userPark = new User("아무개", "박"); // 생성자 함수 - 하나의 객체 데이터

console.log(userKim);
console.log(userLee);
console.log(userPark);

console.log(userKim.getFullName());
