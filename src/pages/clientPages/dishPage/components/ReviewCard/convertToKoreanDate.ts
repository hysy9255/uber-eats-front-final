export const convertToKoreanDate = (date: Date) => {
  return date.toLocaleDateString("ko-KR", {
    timeZone: "Asia/Seoul",
  });
};
