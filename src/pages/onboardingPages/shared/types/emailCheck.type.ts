import type { EmailStatus } from "./emailStatus.enum";

export type EmailCheck =
  | {
      status: EmailStatus.IDLE | EmailStatus.CHECKING;
      email: null;
    }
  | {
      status: EmailStatus.AVAILABLE | EmailStatus.UNAVAILABLE;
      email: string;
    };
