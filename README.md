# 오늘한일
- 6/25 html
# 6/27

- <body>의 속성
1. bgcolor :페이지의 배경색상
2. background : 배경에 깔리는 이미지
3. bgproperties :배경 이미지 배치 방법
4. text : 링크가 아닌 일반 문자열에 사용되는 색상
5. link : 링크된 글자에 사용될 색상
6. 
7. scroll: 스크롤 바 표시 여부

# (내장)style 시트

- 정렬(align)
1. left : 왼쪽으로 졍렬 (디폴트)
2. right : 오른쪽으로 정렬
3. center : 가운데 정렬
4. justify : 양쪽 정렬

- 글꼴(font)
1. face : 글꼴의 이름을 지정(컴퓨터에 글꼴이 있어야함)
2. size : 크기 지정(1~7)
3. color : 색깔 지정
4. justify : 양쪽 정렬

# (외장)style 시트

- link
1. href : 연결된 문서의 주소
2. rel : 연결된 문서와 현재 문서의 관계를 지정한다
3. type : 연결된 문서의 형식을 지정한다
4. sizes : 아이콘의 크기를 지정한다
5. media : 문서를 연결할 장치를 지정한다.

 

# 기본선택자

1. text-align : right,center,left 등의 속성값으로 문자열 정렬방식을 지정한다
2. background : 배경색을 지정한다
3. border : 대상 외부의 경계선을 그린다 (굵기,색상,모양을 지정함)

- 태그선택자(태그{속성목록})

특정 태그를 골라서 선택함

- 전체 선택자(*)

모든 태그를 선택함

- id 선택자(#id {속성목록})

id를 입력해놓고 그 id를 선택함(중복불가)

- 클래스 선택자(.class{속성목록})

클래스를 입력해놓고 그 클래스를 선택한다(중복가능)

- 그룹 선택자

사용방법은 태그선택자와 같지만 콤마를 붙여 여러개를 한꺼번에  선택한다

# 계층 선택자

- 자식 선택자(부모>자식{속성목록})

부모에속한 자식 태그라는 의미이며 이 조건에 맞는 태그만            스타일이 적용된다.(바로 한단계 아래만 선택함)

- 후손 선택자(부모 자식{속성목록})

아래쪽의 모든 단계를 선택한다\

- 형제 선택자(A+B{속성목록}, A~B{속성목록})

A+B: A바로 뒤의 B태그 하나만 선택한다

A~B: A뒤의 모든 B태그를 선택한다.

# 가상 선택자

- child 선택자

:first-child : 첫번째 자식인 요소 선택

:last-child : 마지막 자식인 요소 선택

:nth-child(n) : n번째 자식인 요소를 선택한다. 자식순서는 1부터 시작

:nth-last-child(n) : 끝에서 n번째 자식인 요소를 선택한다

- of-type 선택자

:first-of-type : 처음 등장하는 특정 태그 선택

:last-of-type : 마지막 등장하는 특정 태그 선택

:nth-of-type(n) : n번째 등장하는 특정 태그 선택

 자식순서는 1부터 시작

:nth-last-of-type(n) : 끝에서 n번째 등장하는 특정 태그 선택

- only-child 선택자

부모의 자식이 자신 혼자 뿐인 태그를 선택

- root 선택자

문서 전체를 선택

# 색상

#RRGGBB , rgb(r,g,b), 색상이름 등으로 나타낸다

#RRGGBB 색상표 사이트: [http://www.hipenpal.com/tool/html-color-charts-rgb-color-table-in-korean.php](http://www.hipenpal.com/tool/html-color-charts-rgb-color-table-in-korean.php)

- 반투명 색상 rgba(r,g,b,a)로 나타냄(a가 투명도)

# 글꼴

1. font-family

글꼴을 설정합니다.

2. font- size

글꼴의 크기를 설정합니다.

- 절대(고정) 크기의 단위

in

인치 (1인치 = 2.54cm )

cm

센티미터

mm

밀리미터

pt

포인트 ( 1포인트 = 1/72인치 )

pc

파이카 ( 1파이카 = 12포인트 )

12pt 크기

- 상태(비례) 크기의 단위

em

기준 글꼴 문자의 높이

ex

기준 글꼴 문자의 영문 소문자 높이

%

기준 글꼴 크기에 대한 백분률 크기

px

1픽셀을 1로 하는 단위

larger

글자 크기를 앞에 입력한 글자보다 크게

smaller

글자 크기를 앞에 입력한 글자보다 작게

3. font-style

글자의 기울기를 설정합니다.

normal - 정상

oblique - 글꼴이 기운 형태

italic - 글꼴이 이탤릭 형태, 이탤릭 글꼴이 없으면 oblique로 표시

inherit - 부모 요소의 값을 상속

4. font-weight

글자의 두께를 설정합니다.

normal - 정상

bolder - 조금 더 굵게

bold - 굵게, <b> 태그 효과와 동일

lighter - 가늘게

5. letter-spacing

글자 사이의 간격을 설정합니다. 기본은 0이며 숫자가 커질수록 간격이 넓어지고 작아질수록(음수) 좁아집니다.

6. word-spacing

단어 사이의 간격을 설정합니다. 기본은 0이며 숫자가 커질수록 간격이 넓어지고 작아질수록(음수) 좁아집니다.

7. line-height

줄 간격을 설정합니다. 퍼센트(%) 또는 픽셀(px), 포인트(pt) 등 절대/상태 크기의 단위로 지정 가능합니다.

 8. text-transform

1. capitalize 각 단어의 첫번째 **문자**를 **대문자**로 만듦
2. uppercase 모든 **문자**를 **대문자**로 바꿈 
3. lowercase 모든 **문자**를 **소문자**로 바꿈
4. capitalize 각 단어의 첫 글자만 대문자로 바꿈

9. text shadow (수평거리 수직거리 흐림정도 색상)

문자열 뒤쪽에 그림자를 출력

# 위치

position 속성은  태그의 위치를 정한다 (position:속성;left :값;top:값;),

(position:속성;right:값;bottom:값;)

- `static`: 기본값, 다른 태그와의 관계에 의해 자동으로 배치되며 위치를 임의로 설정해 줄 수 **없습니다**.
- `absolute`: 절대 좌표와 함께 위치를 지정해 줄 수 있습니다.
- `relative`: **원래 있던 위치**를 기준으로 좌표를 지정합니다.
- `fixed`: 스크롤과 상관없이 항상 문서 최 좌측상단을 기준으로 좌표를 **고정**합니다.
- `inherit`: 부모 태그의 속성값을 상속받습니다.

# 경계선

`border` 속성은 태그의 테두리를 설정하는 속성으로, [background 속성](https://ofcourse.kr/css-course/background-%EC%86%8D%EC%84%B1)과 비슷하게 세부적인 속성들을 한번에 쓸 수 있는 속성입니다. **width - style - color**의 순서로 사용합니다.

### **border-width**

테두리의 두께로, 주로 `px` 단위를 사용합니다.

### **border-style**

테두리의 스타일로 실선, 점선, 이중선 등의 옵션이 존재합니다.

### **border-color**

테두리의 색상으로, 값은 [color 속성](https://ofcourse.kr/css-course/color-%EC%86%8D%EC%84%B1)의 포맷을 사용합니다.

# 테이블 속성

## **border-collapse 속성**

border-collapse 속성값을 collapse로 설정하면 해당 테이블의 테두리는 한 줄로 표현된다. 이 속성을 명시하지 않으면 해당 테이블은 기본 설정으로 테이블 요소별 테두리를 모두 표현하게 된다.

## **border-spacing 속성**

border-spacing 속성은 테이블 요소(th, td)간의 여백을 설정해 준다.

## **text-align 속성**

text-align 속성은 테이블 요소(th, td) 내부에서 텍스트의 수평 방향 정렬을 설정한다.<th>태그 내부는 가운데 정렬이, <td>태그 내부는 왼쪽 정렬이 기본 설정이다.

## **vertical-align 속성**

vertical-align 속성은 테이블 요소(th, td) 내부에서 텍스트의 수직 방향 정렬을 설정한다. <th>태그와 <td>태그 모두 가운데 정렬이 기본 설정이다.

# 레이아웃

- overflow

- **visible** : 기본 값입니다. 넘칠 경우 컨텐츠가 상자 밖으로 보여집니다.

- **hidden** : 넘치는 부분은 잘려서 보여지지 않습니다.

- **scroll** : 스크롤바가 추가되어 스크롤할 수 있습니다.(가로, 세로 모두 추가 됩니다.)

- **auto** : 컨텐츠 량에 따라 스크롤바를 추가할지 자동으로 결정됩니다.( 필요에 따라 가로, 세로 별도로 추가될 수도 있습니다.)

- float

`inherit`: 부모 요소에서 상속

`left`: 왼쪽에 부유하는 블록 박스를 생성. 페이지 내용은 박스 오른쪽에 위치하며 위에서 아래로 흐름.

`right`: 오른쪽에 부유하는 블록 박스를 생성. 페이지 내용은 박스 왼쪽에 위치하며 위에서 아래로 흐름. 이후 요소에 clear 속성이 있으면 페이지 흐름이 달라짐. none 이 아니라면 display 속성은 무시된다.

`none` - 요소를 부유시키지 않음
. .
- column

column-count 속성
column-count 속성은 해당 요소를 몇 개의 칼럼(column)으로 나눌지를 설정합니다.

column-gap 속성
column-gap 속성은 칼럼(column) 사이의 간격을 설정합니다.

column-width 속성
column-width 속성은 칼럼의 너비를 설정합니다.

column-span 속성
column-span 속성은 해당 요소가 몇 개의 칼럼을 병합하여 표현할지를 설정합니다.

column-rule-style 속성
column-rule-style 속성은 칼럼 사이에 들어갈 라인의 스타일을 설정합니다.

column-rule-width 속성
column-rule-width 속성은 칼럼 사이에 들어갈 라인의 두께를 설정합니다.

column-rule-color 속성
column-rule-color 속성은 칼럼 사이에 들어갈 라인의 색상을 설정합니다.

column-rule 속성
모든 columns-rule 속성을 이용한 스타일을 한 줄에 설정할 수 있습니다.-6/26 css








자바 스크립트 공부할것
let,var,const,dom,배열메소드,객체,호이스팅

변수 선언 방식(var,let,const)

정리: 변수선언에는 기본적으로 const를 사용하고 재할당이 필요한 경우만 let을 사용하는것이 좋다.

우선, var는 변수 선언 방식에 있어서 큰 단점을 가지고 있다.

    var name = 'bathingape'
    console.log(name) // bathingape

    var name = 'javascript'
    console.log(name) // javascript
변수를 한 번 더 선언했음에도 불구하고, 에러가 나오지 않고 각기 다른 값이 출력되는 것을 볼 수 있다.

이는 유연한 변수 선언으로 간단한 테스트에는 편리 할 수 있겠으나, 코드량이 많아 진다면 어디에서 어떻게 사용 될지도 파악하기 힘들뿐더러 값이 바뀔 우려가 있다.

그래서 ES6 이후, 이를 보완하기 위해 추가 된 변수 선언 방식이 let 과 const 이다.

위의 코드에서 변수 선언 방식만 바꿔보자.

    let name = 'bathingape'
    console.log(name) // bathingape

    let name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared
name이 이미 선언 되었다는 에러 메세지가 나온다. (const도 마찬가지)

변수 재선언이 되지 않는다.

그렇다면 let 과 const 의 차이점은 무엇일까?

이 둘의 차이점은 immutable 여부이다.

let 은 변수에 재할당이 가능하다. 그렇지만,

    let name = 'bathingape'
    console.log(name) // bathingape

    let name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'react'
    console.log(name) //react
const는 변수 재선언, 변수 재할당 모두 불가능하다.

    const name = 'bathingape'
    console.log(name) // bathingape

    const name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'react'
    console.log(name) 
    //Uncaught TypeError: Assignment to constant 
    variable.






호이스팅
호이스팅(Hoisting)이란, var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다.

자바스크립트는 ES6에서 도입된 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅한다.

하지만, var 로 선언된 변수와는 달리 let 로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.

	console.log(foo); // undefined
	var foo;

	console.log(bar); // Error: Uncaught ReferenceError: bar is not defined
	let bar;
이는 let 로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적 사각지대(Temporal Dead Zone; TDZ)에 빠지기 때문이다.

참고로, 변수는 선언 단계 > 초기화 단계 > 할당 단계 에 걸쳐 생성되는데

var 으로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다. 하지만,

// 스코프의 선두에서 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.

console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1
let 로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.

// 스코프의 선두에서 선언 단계가 실행된다.
// 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않았다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 없다.

console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1









DOM의 개념
문서 객체 모델(DOM)이란?
문서 객체 모델(DOM, Document Object Model)은 XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스입니다.

이 객체 모델은 문서 내의 모든 요소를 정의하고, 각각의 요소에 접근하는 방법을 제공합니다.

 

이러한 DOM은 W3C의 표준 객체 모델이며, 다음과 같이 계층 구조로 표현됩니다.

 

Document- html - body - p - text
            I         - a - href
            I           I - text
            I - - head - title - text
            

 

자바스크립트는 이러한 객체 모델을 이용하여 다음과 같은 작업을 할 수 있습니다.

 

- 자바스크립트는 새로운 HTML 요소나 속성을 추가할 수 있습니다.

- 자바스크립트는 존재하는 HTML 요소나 속성을 제거할 수 있습니다.

- 자바스크립트는 HTML 문서의 모든 HTML 요소를 변경할 수 있습니다.

- 자바스크립트는 HTML 문서의 모든 HTML 속성을 변경할 수 있습니다.

- 자바스크립트는 HTML 문서의 모든 CSS 스타일을 변경할 수 있습니다.

- 자바스크립트는 HTML 문서에 새로운 HTML 이벤트를 추가할 수 있습니다.

- 자바스크립트는 HTML 문서의 모든 HTML 이벤트에 반응할 수 있습니다.




DOM의 종류
W3C DOM 표준은 세 가지 모델로 구분됩니다.

 Document

1. Core DOM : 모든 문서 타입을 위한 DOM 모델

2. HTML DOM : HTML 문서를 위한 DOM 모델

3. XML DOM : XML 문서를 위한 DOM 모델

HTML DOM
HTML DOM은 HTML 문서를 조작하고 접근하는 표준화된 방법을 정의합니다.

모든 HTML 요소는 HTML DOM를 통해 접근할 수 있습니다.

XML DOM
XML DOM은 XML 문서에 접근하여, 그 문서를 다루는 표준화된 방법을 정의합니다.

모든 XML 요소는 XML DOM를 통해 접근할 수 있습니다.






배열 객체 메소드
Array 객체가 갖고 있는 메소드들에 대해 알아봅니다.
함수들을 이용하여 배열을 효과적으로 사용할 수 있습니다.
 


내장 메소드들
concat()
인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
 
copyWithin()
배열의 일부를 얕게 복사한 뒤, 동일한 배열의 다른 위치에 덮어쓰고 그 배열을 반환합니다.
 
entries()
배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 배열 반복자 객체를 반환합니다.
 
every()
배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다.
만약 배열의 모든 요소가 제공된 판별 함수를 통과하면 true를 반환합니다.
 
fill()
배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.
 
filter()
주어진 함수의 테스트를 통과하는(결과가 참인 경우의) 요소들을 모아 새로운 배열을 생성하여 반환합니다.
 
find()
주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다.
그러한 요소가 없다면 undefined를 반환합니다.
 
findIndex()
주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다.
만족하는 요소가 없으면 -1을 반환합니다.
 
forEach()
주어진 함수를 배열 요소 각각에 대해 실행합니다.
 
includes()
배열에 특정 요소가 포함돼있는지 알아내어 true 또는 false를 반환합니다.
 
indexOf()
배열에서 지정한 값과 같은 요소의 첫 인덱스를 반환합니다.
없으면 -1을 반환합니다.
 
join()
배열의 모든 요소를 문자열로 변환하여 합칩니다.
 
keys()
배열의 각 인덱스를 키 값으로 가지는 새로운 배열 반복자 객체를 반환합니다.
 
lastIndexOf()
지정된 요소가 배열에서 발견될 수 있는 마지막 인덱스를 반환하고, 존재하지 않으면 -1을 반환합니다.
 
map()
배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출하고, 그 결과를 모아서 만든 새로운 배열을 반환합니다.
 
pop()
배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
 
push()
배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
 
reduce()
배열의 각 요소에 대해 주어진 함수(reducer 함수)를 적용하여 하나의 값으로 줄입니다.
왼쪽에서 오른쪽 방향으로 적용합니다.
 
reduceRight()
배열의 각 요소에 대해 주어진 함수를 적용하여 하나의 값으로 줄입니다.
오른쪽에서 왼쪽 방향으로 적용합니다.
 
reverse()
배열의 요소 순서를 반전시킵니다.
 
shift()
배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다.
 
slice()
배열의 일부를 추출한 새 배열을 반환합니다.
원본 배열은 수정되지 않습니다.
 
some()
배열 안의 어떤 하나의 요소라도 주어진 함수를 통과하는지 테스트하고 만족한다면 true를 반환합니다.
 
sort()
배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
기본 정렬 순서는 유니코드 코드 포인트를 따릅니다.
 
splice()
배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
 
toLocaleString()
배열의 요소를 나타내는 지역화된 문자열을 반환합니다.
 
toString()
배열과 요소를 나타내는 문자열을 반환합니다.
 
unshift()
새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
 
values()
배열의 각 인덱스에 대한 값을 가지는 새로운 배열 반복자 객체를 반환합니다.
 
 

 

