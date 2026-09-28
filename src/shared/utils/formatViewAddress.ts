import { capitalizeAllWords, capitalizeWords } from "./capitalizeWords";

export const formatViewAddress = (
  streetAddress?: string,
  apt?: string | null,
  city?: string,
  state?: string,
  zip?: string
) => {
  if (apt === null || apt === undefined || apt === "") {
    return `
          ${capitalizeWords(streetAddress)},
          ${capitalizeWords(city)}, 
          ${capitalizeAllWords(state)} 
          ${zip}`;
  }
  return `
          ${capitalizeWords(streetAddress)}, 
          ${capitalizeAllWords(apt)}, 
          ${capitalizeWords(city)}, 
          ${capitalizeAllWords(state)} 
          ${zip}`;
};
