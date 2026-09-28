export const capitalizeWords = (text?: string | null) => {
  if (!text) return;

  return text
    .split(" ")
    .map((word) =>
      word.length > 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word
    )
    .join(" ");
};

export const capitalizeAllWords = (text?: string | null) => {
  if (!text) return;
  return text.toUpperCase();
};
