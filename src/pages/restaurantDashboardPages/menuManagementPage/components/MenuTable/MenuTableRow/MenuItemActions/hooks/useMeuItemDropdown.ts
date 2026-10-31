import { useRef, useState } from "react";

export const useMenuItemDropdown = () => {
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const [isDropdownUpward, setIsDropdownUpward] = useState(false);

  const updateDropdownDirection = () => {
    const button = moreButtonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const dropdownHeight = 180;
    const gap = 8;
    const spaceBelow = window.innerHeight - rect.bottom;

    setIsDropdownUpward(spaceBelow < dropdownHeight + gap);
  };

  return {
    moreButtonRef,
    isDropdownUpward,
    updateDropdownDirection,
  };
};
