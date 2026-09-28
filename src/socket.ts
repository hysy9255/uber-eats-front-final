import { io } from "socket.io-client";
import { API_BASE_URL } from "./shared/constants/baseUrl";

export const socket = io(`${API_BASE_URL}`, {
  withCredentials: true,
  // autoConnect: false,
  transports: ["websocket"],
});
