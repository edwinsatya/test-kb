import toRupiah from "@develoka/angka-rupiah-js";

export const convertToRupiah = (number) => {
  return toRupiah(number, { dot: ".", floatingPoint: 0 });
};

export const getPercentage = (current, target) => {
  const percentage = Math.round((current / target) * 100);
  return percentage >= 100 ? 100 : percentage;
};
