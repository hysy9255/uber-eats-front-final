export type DishImageState = {
  status: "unchanged" | "changed" | "removed";
  preview: string | null;
  file: File | null;
};
