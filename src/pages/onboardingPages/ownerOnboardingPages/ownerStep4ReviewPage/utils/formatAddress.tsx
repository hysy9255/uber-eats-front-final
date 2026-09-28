// ---- 유틸: 주소/영업시간 포매팅
export function formatAddress(step3: {
  streetAddress: string;
  unit: string;
  city: string;
  state: string;
  zip: string;
}) {
  const line1 = [step3.streetAddress, step3.unit].filter(Boolean).join(", ");
  const line2 = [step3.city, step3.state, step3.zip].filter(Boolean).join(", ");
  return [line1, line2].filter(Boolean).join(" • ");
}
