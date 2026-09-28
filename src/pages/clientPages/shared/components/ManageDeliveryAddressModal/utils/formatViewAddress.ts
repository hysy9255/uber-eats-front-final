import {
  capitalizeAllWords,
  capitalizeWords,
} from "../../../../../../shared/utils/capitalizeWords";
import type { DeliveryAddressDTO } from "../../../api/deliveryAddress.dto";

export const formatViewAddress = ({
  streetAddress,
  city,
  state,
  zip,
  apt,
}: DeliveryAddressDTO) => {
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
