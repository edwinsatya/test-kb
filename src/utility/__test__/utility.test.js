import { convertToRupiah, getPercentage } from "../index";

describe("Get Percentage", () => {
  it("Should return correct answer", () => {
    let result = getPercentage(50, 100);
    expect(result).toBe(50);
  });
});

describe("Get Convert Number to Rupiah", () => {
  it("Should return correct answer", () => {
    let result = convertToRupiah(50000);
    expect(result).toBe("Rp50.000");
  });
});
