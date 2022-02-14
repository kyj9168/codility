// 배열 N 다른 정수의 유니폼을 주어진다.배열은 범위 경우 1에 정수가 포함되어 있습니다.이는 요소가 정확히 하나가(N+1) 뻗는다.

// 당신의 목표는 빠진 요소를 찾는 것이다.

// 기능을 써라:

// 기능 solution(A).

// 그, 배열 A를 감안하면 실종된 요소의 값을 반환합니다.

// 예를 들어, 주어진 배열 한 그러한 것.

// A[0]=2
// A[1]=3
// A[2]=1
// A[3]=5
// 현재의 빠진 요소 그 기능, 4을 반환해야 합니다.

// :다음과 같은 가정을 위한 효과적인 알고리즘을 써라.

// 범위 내에 N는 정수 경우 0입니다.10만 해결;
// A의 요소는 뚜렷하다.
// 범위 내에 배열 A의 각 요소는 정수 경우 1입니다.(N+1) 뻗는다.

function solution(A) {
    const n = A.length;

    const totalSum = ((n + 1) * (2 + n)) / 2;
    const sum = A.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    return totalSum - sum;
}

solution([1, 2, 4, 5]);
