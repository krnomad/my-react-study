
// React에서 사용하는 타입스크립트의 기본적인 문법을 알아보자.
// 타입스크립트는 자바스크립트의 상위집합이다.
// 자바스크립트의 모든 문법을 사용할 수 있고, 타입을 지정할 수 있다.
// 타입스크립트는 자바스크립트를 컴파일하는 과정에서 타입을 검사한다.
// 타입스크립트는 자바스크립트로 컴파일되기 때문에 브라우저에서 실행할 수 있다.
// 타입스크립트는 자바스크립트의 모든 문법을 사용할 수 있기 때문에
// 자바스크립트로 컴파일되기 전에 타입을 검사할 수 있다.

// tsx는 다음 3가지의 특징을 가진다.
// 1. react에서 Component의 return 값은 반드시 하나의 태그로 감싸져야 한다.
// 여러개의 태그를 사용하고 싶다면, 부모 태그 하나로 감싸주면 된다.
// 태그를 감싸는 부모 태그는 렌더링되지 않는다.
// <> </> 이런식으로 감싸주면 된다. 혹은 <div></div>로 감싸주면 된다.

// 2. React에서는 html class tag를 className으로 사용한다.

// 3. Java script 코드를 작성할 때는 {}를 사용한다.

// tsx는 타입스크립트를 사용하는 리액트 컴포넌트를 의미한다.
// tsx에 tyscript 문법을 사용할 수 있다.
// tsx에 typescript를 사용하기 위해서는 중괄호를 사용할 수 있다.

// -------------------------------

/**
 * tsx에서 변수는 중괄호를 사용해서만 사용할 수 있다.
 * 변수를 선언할 때는 let, const, var를 사용할 수 있다.
 * let은 변수를 재할당할 수 있다.
 * const는 변수를 재할당할 수 없다.
 * 
 * list.map 함수는 list의 각 요소에 대해 함수를 실행시킨다.
 * 예를 들어, list = [1, 2, 3]이고, list.map((item) => item * 2)라면
 * list.map 함수는 [2, 4, 6]을 리턴한다.
 */

/**
 * Props는 부모 컴포넌트에서 자식 컴포넌트로 전달하는 데이터이다.
 * Javascript에서는 Props를 다음과 같이 사용할 수 있다.
    export default function Profile(props) {
        return (
            <div className='profile'>
                <img className='photo'
                    src={props.img}
                    alt="avatar"
                />
                <h1>{props.name}</h1>
                <p>{props.title}</p>
            </div>
        );
    }
 * 여기서 props를 destructuring을 사용해서 다음과 같이 사용할 수 있다.   
    export default function Profile({ img, name, title }) {
 * 이렇게 사용하면, props.img, props.name, props.title를 img, name, title로 사용할 수 있다. 
 */

/**
 * First callenage
 * 새로운 User가 추가될 때 new icon이 사람 우ㅏ에 표시되도록 하라
 */