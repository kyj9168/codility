// N개의 정수로 구성된 비어 있지 않은 배열 A가 주어집니다. 배열 A는 테이프의 숫자를 나타냅니다.

// 0 < P < N과 같은 임의의 정수 P는 이 테이프를 비어있지 않은 두 부분으로 나눈다: A[0], A[1], ..., A[P - 1] 및 A[P], A[P + 1], ..., A[N - 1].

// 두 부분 사이의 차이는 |(A[0] + A[1] + ...의 값입니다. + A[P - 1] - (A[P] + A[P + 1] + ... + A[N - 1)|

// 즉, 첫 번째 부분의 합과 두 번째 부분의 합의 절대적인 차이입니다.

// 예를 들어 다음과 같은 어레이 A를 가정해 보겠습니다.

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// 이 테이프를 네 군데로 나눌 수 있습니다.

// P = 1, 차이 = |3 - 10| = 7
// P = 2, 차이 = |4 - 9| = 5
// P = 3, 차이 = |6 - 7| = 1
// P = 4, 차이 = |10 - 3| = 7
// 함수 쓰기:

// 클래스 솔루션 {public int 솔루션(int[] A); }

// 즉, N개의 정수로 이루어진 배열 A가 비어 있지 않은 경우 얻을 수 있는 최소의 차이를 반환합니다.

// 예를 들어, 다음과 같습니다.

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// 함수는 위에서 설명한 것처럼 1을 반환해야 합니다.

// 다음 가정을 위한 효율적인 알고리즘을 작성하십시오.

// N은 [2..] 범위 내의 정수입니다.100,000];
// 배열 A의 각 요소는 [-1,000..1,000] 범위 내의 정수입니다.
function solution(A) {
    const sum = A.reduce((sum, currValue) => sum + currValue);
    let beforeSum = 0,
        afterSum = 0,
        answer;
    A.forEach((num, idx) => {
        beforeSum += num;
        afterSum = sum - beforeSum;
        const difference = Math.abs(beforeSum - afterSum);

        if (idx == 0 || answer > difference) answer = difference;
    });

    return answer;
}

solution([-3, 100, -2, 4, -5]);
