// BigInt
// ES2020 도입된 지 얼마 되지 않음
// 64bit 넘어가는. 안전하게 표현
// 정수형 표현만 가능
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

let bigNum1 = 123456n;
console.log(typeof bigNum1); // bigInt

// bigint 연산
console.log(5n / 2n);
console.log(5n / BigInt(2)); // BigInt(2n) == 2n

// BigInt 변환 시 주의사항

/* 안전하지 않은 값 -> 문자열로 전달해야 함 */
console.log(BigInt("9008093019234322"));
console.log(BigInt("9008093019234323"));
console.log(BigInt("9008093019234324"));
console.log(BigInt("9008093019234325"));
