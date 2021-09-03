# 코딩테스트용 함수

> [1. 시간복잡도](#1-시간복잡도)
>
> [2. Array 함수](#2-array-함수)
>
> [3. String 함수](#3-string-함수)
>
> [4. Object 함수](#4-object-함수)
>
> [5. 일반함수](#5-일반함수)
>
> [6. Set 함수](#6-set-함수)
>
> [7. Map 함수](#7-map-함수)
>
> [8. class](#8-class)
>
> [9. 정규표현식](#9-정규표현식)
>
> [10. Date](#10-date)

<br><hr>

## 1. 시간복잡도

- N의 범위 ~500 : 시간복잡도 N^3
- N의 범위 ~2000 : 시간복잡도 N^2
- N의 범위 ~ 100,000 : 시간복잡도 NlogN
- N의 범위 ~ 10,000,000 : 시간복잡도 N

<br><hr>

## 2. Array 함수

```
// 생성

let temp = Array(5);
temp.fill(3);

temp
// [3, 3, 3, 3, 3]
```

```
// slice

const arr = [1, 2, 3, 4, 5]

arr.slice(-3);  // [3, 4, 5]
arr.slice(1, 4);  // [2, 3, 4, 5]
```

```
// splice

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = arr.splice(2, 4);

arr  // [1, 2, 7, 8, 9, 10]
arr2  // [3, 4, 5, 6]

arr2 = arr.splice(1, 1, 6, 6, 6)  // (시작인덱스, 몇개자를지, 삽입할 데이터)

arr  // [1, 6, 6, 6, 7, 8, 9, 10]
arr2  // [2]
```

```
// 최대값 구하기

const arr = [1, 2, 3, 4]
Math.max(...arr)
// 4

arr.reduce((a,b)=> a>b ? a : b)
// 4

배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
```

```
// map, forEach, filter

const arr = [1, 2, 3, 4, 5, 6]

arr.map((a, i) => a*i) // [0, 2, 6, 12, 20, 30]
arr.filter((a) => a > 3)  // [4, 5, 6]
arr.forEach((a) => console.log(a))  // 1, 2, 3, 4, 5, 6
```

```
// indexOf

const arr = ['a', 'b', 'c', 'd'];

arr.indexOf('c');  // 2
```

```
// 정렬

const arr = [3, 1, 7, 4, 2, 6, 5];

arr.sort((a, b)=> a - b);  // [1, 2, 3, 4, 5, 6, 7]
arr.sort((a, b)=> a < b ? -1 : 1);  // 숫자가 아닌 경우 부등호로 대소 비교

arr.reverse();  // [7, 6, 5, 4, 3, 2, 1]


// 그냥 sort 하면 결과가 이상하게 나올 수 있다.
const test = [1, 2, 3, 4, 11, 100];

test.sort();  // [1, 100, 11, 2, 3, 4]
```

```
// for in, for of

const arr = [1, 3, 5, 6, 8, 9];

for (let a in arr){
	console.log(a)
}
// 0 1 2 3 4 5
// for in 은 성능이 그닥 좋지 않다고 함.

for (let a of arr){
	console.log(a)
}
// 1 3 5 6 8 9
```

<br><hr>

## 3. String 함수

```
const star = "*";

star.repeat(6);  // "******"

star.padStart(4, "@");  // "@@@*"
star.padEnd(4, "@");  // "*@@@"
star.padStart(9, "abc") // "abcabcab*"

// string 을 array로 바꾸기
const temp = "abcde";

[...temp]  // ["a", "b", "c", "d", "e"]
temp.split("") // ["a", "b", "c", "d", "e"]

// 공백 지우기
const space = "  hello world ";
space.trim()  // "hello world"
```

<br><hr>

## 4. Object 함수

```
const a = {1:"test", "k":"pp", "2":"ok"}

Object.keys(a)  // ["1", "2", "k"]
Object.values(a)  // ["test", "ok", "pp"]
Object.entries(a)  // [["1", "test"], ["2", "ok"], ["k", "pp"]]

delete a[1]
a   // {2: "ok", k: "pp"}


// 객체 복사 (배열과 달리 펼침연산자로 복사 불가)
const copied = Object.assign({}, a);
const copied2 = JSON.parse(JSON.stringify(a));
```

<br><hr>

## 5. 일반함수

- Math

```
Math.floor(3.7)  // 3   -> 내림
Math.ceil(3.4)  // 3   -> 올림
Math.round(3.2)  // 3  -> 반올림

Math.PI  // 3.141592...  -> 파이
Math.abs(-4)  // 4       -> 절대값
Math.random()  // 0.24...  -> 0과 1사이의 랜덤한 값
Math.sqrt(121)  // 11    -> 제곱근
Math.max(1, 5, 7, 2)  // 7   -> 최대값. 배열에 적용시 펼침연산자 사용
```

- 타입 확인

```
Number.isInteger("3")  // false
Number.isInteger(-3)  // true
Number.isInteger(3.4)  // false

typeof "3"  // "string"
typeof [1, 2]  // "object"
```

- 형 변환

```
const num = 3;
num.toString()  // "3"
String(num)  // "3"

const longNum = 1000000;
longNum.toLocaleString()  // "1,000,000"
// toString() 메소드는 2에서 32까지의 진수로 바꾸어 반환하는 기능을 가졌습니다.
// 매개변수에 아무것도 넣지 않았을 때 디폴트인 10진수로 출력해 주니,
// String() 메소드와 차이가 없는 것 처럼 보이는 것 뿐입니다.

const str = "3";
Number(str)  // 3
parseInt(str)  // 3

Number("1000원")  // NaN
parseInt("1000원")  // 1000
parseInt("돈 1000원")  // NaN

// 문자열이 숫자가 아닌 경우가 Number()와 다르다.
// 문자열이 숫자로 시작하는 경우에는 숫자가 끝날때 까지만 형변환을 하여 num에 저장된다.
// 시작이 숫자가 아니면 Number()와 마찬가지로 num에 NaN이 저장됩니다.

+str  // 3
str * 1 // 3
// str 앞에 + 를 붙여주거나 1을 곱해주면 숫자로 변환된다.

const strB = "2"
str - strB  // 1
// + 를 제외한 -, *, / 가 사용되면 자동으로 수식을 계산해준다.


"A".charCodeAt()  // 65
String.fromCharCode(65)  // "A"
// 아스키코드 변환
```

<br><hr>

## 6. Set 함수

```
const a = new Set();
a.add(1)  // Set(1) {1}
a.add(3)  // Set(2) {1, 3}
a.add(4)  // Set(3) {1, 3, 4}

a.has(3)  // true

a.size  // 3

a.delete(3)  // Set(2) {1, 4}

a.clear()  // Set(0) {}

const b = new Set([1, 3, 5, 6, 8]);  // set(5) {1, 3, 5, 6, 8}
```

<br><hr>

## 7. Map 함수

```
const a = new Map();
a.set("name", "harry");
a.set("age", 30);

a.has("name")  // true
a.get("name")  // "harry"
a.size  // 2

// delete(): 엔트리를 삭제
a.delete('age');
console.log(a.has('age'));  // false

// clear(): 모든 엔트리를 삭제
a.clear();
console.log(a.size); // 0
```

<br><hr>

## 8. class

```
const a = new Map();
a.set("name", "harry");
a.set("age", 30);

a.has("name")  // true
a.get("name")  // "harry"
a.size  // 2

// delete(): 엔트리를 삭제
a.delete('age');
console.log(a.has('age'));  // false

// clear(): 모든 엔트리를 삭제
a.clear();
console.log(a.size); // 0
```

<br><hr>

## 9. 정규표현식

- `*` : 앞의 표현식이 0회 이상 연속으로 반복되는 부분과 대응됩니다. {0,} 와 같은 의미입니다.
- `+` : 앞의 표현식이 1회 이상 연속으로 반복되는 부분과 대응됩니다. {1,} 와 같은 의미입니다.
- `?` : 앞의 표현식이 0 또는 1회 등장하는 부분과 대응됩니다. {0,1} 와 같은 의미입니다.
- `.` : 개행 문자를 제외한 모든 단일 문자와 대응됩니다.
- `\d`: 숫자 문자에 대응됩니다. [0-9]와 동일합니다.
- `\D`: 숫자 문자가 아닌 문자에 대응됩니다. [^0-9]와 동일합니다.
- `\w` : 밑줄 문자를 포함한 영숫자 문자에 대응됩니다. [A-Za-z0-9_] 와 동일합니다. (역주: 여기에 대응되는 문자를 단어 문자라고 합니다.)

<br>

- exec : 대응되는 문자열을 찾는 RegExp 메소드입니다. 정보를 가지고 있는 배열을 반환합니다. 대응되는 문자열을 찾지 못했다면 null을 반환합니다.
- test : 대응되는 문자열이 있는지 검사하는 RegExp 메소드 입니다. true 나 false를 반환합니다.
- match : 대응되는 문자열을 찾는 String 메소드입니다. 정보를 가지고 있는 배열을 반환합니다. 대응되는 문자열을 찾지 못했다면 null을 반환합니다.
- search : 대응되는 문자열이 있는지 검사하는 String 메소드 입니다. 대응된 부분의 인덱스를 반환합니다. 대응되는 문자열을 찾지 못했다면 -1을 반환합니다.
- replace : 대응되는 문자열을 찾아 다른 문자열로 치환하는 String 메소드입니다.
- split : 정규식 혹은 문자열로 대상 문자열을 나누어 배열로 반환하는 String 메소드입니다.

<br>

- g : 전역 검색
- i : 대소문자 구분 없는 검색
- m : 다중행(multi-line) 검색
- s : .에 개행 문자도 매칭(ES2018)
- u : 유니코드; 패턴을 유니코드 코드 포인트의 나열로 취급합니다.
- y : "sticky" 검색을 수행. 문자열의 현재 위치부터 검색을 수행합니다. sticky (en-US) 문서를 확인하세요.

```
// 정규식 만들기
let re = /ab+c/;
let re = new RegExp("ab+c");


const new_id = "...!@BaT#*..y.abcdefghijklm"
const answer = new_id
    .toLowerCase() // new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    .replace(/[^\w-_.]/g, '') // new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    .replace(/\.+/g, '.') // new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    .replace(/^\.|\.$/g, '') // new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    .replace(/^$/, 'a') // new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    .slice(0, 15).replace(/\.$/, ''); // new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
const len = answer.length;
// new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
answer = len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// "bat.y.abcdefghi"
```

<br><hr>

## 10. Date

```
const date = new Date()  // Fri Sep 03 2021 02:12:55 GMT+0900 (한국 표준시)

// 연월일 표시
date.getFullYear()  // 2021
date.getMonth()  // 8 => 1월 ~ 12월(0 ~ 11)
date.getDate()  // 3

// date.getYear()
// 121

// 요일
date.getDay()  // 5 => 일월화수목금토(0123456)

// 시간 표시
date.getHours()  // 2
date.getMinutes()  // 12
date.getSeconds() // 55

date.getTime() // 1970년 1월 1일 0시 0분 0초 부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환
let time = date.getTime()
let year = Math.floor(time/(3600*24*365*1000))+1970 // 2021

const tomorrow = new Date('2021-09-04')  // Sat Sep 04 2021 09:00:00 GMT+0900 (한국 표준시)
```
