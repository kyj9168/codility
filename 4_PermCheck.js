// N개의 정수로 구성된 비어 있지 않은 배열 A가 주어집니다.

// 순열은 1부터 N까지의 각 원소를 한 번만 포함하는 수열이다.

// 예를 들어 다음과 같은 배열 A는 다음과 같습니다.

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// 는 순열이지만 배열 A는 다음과 같습니다.

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// 값 2가 누락되었기 때문에 순열이 아닙니다.

// 목표는 어레이 A가 순열인지 여부를 확인하는 것입니다.

// 함수 쓰기:

// 클래스 솔루션 {public int 솔루션(int[] A); }

// 즉, 배열 A가 지정된 경우 배열 A가 순열이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

// 예를 들어, 다음과 같은 배열 A가 주어졌을 때:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// 함수가 1을 반환해야 합니다.

// 배열 A는 다음과 같이 주어집니다.

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// 함수는 0을 반환해야 합니다.

// 다음 가정을 위한 효율적인 알고리즘을 작성하십시오.

// N은 [1..] 범위 내의 정수입니다.100,000];
// 배열 A의 각 요소는 [1.1,000,000] 범위 내의 정수입니다.
function solution(N, A) {
    let counters = new Array(N).fill(0);

    let maxCounter = 0;

    let maxToSet = 0;

    for (let i = 0; i < A.length; i++) {
        let X = A[i] - 1;

        if (X === N) {
            // lazy update all counters
            maxToSet = maxCounter;
        } else if (0 <= X && X < N) {
            // see if we needed to set it to maxToSet but havent yet
            counters[X] = Math.max(counters[X] + 1, maxToSet + 1);

            maxCounter = Math.max(counters[X], maxCounter);
        }
    }

    // update any counters to maxToSet that we havent yet
    counters = counters.map((val) => Math.max(val, maxToSet));
    return counters;
}

solution([1, 4, 1]);
