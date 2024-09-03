// describe는 함수는 테스트 유닛들의 모음
describe("자스민 테스트입니다.", () => {
  // it은 함수의 테스트 유닛
  it("1을 더하는 함수입니다.", () => {
    let num = 30;

    // 기대식. 실행할 함수의 결과값을 인수로 전달합니다.
    // 매쳐함수. 내가 기대한 결과가 실제로 일치하는지 판단하는 함수입니다. (matcher function) (toBe)
    expect(plusOne(num)).toBe(num + 1);
  });
});
