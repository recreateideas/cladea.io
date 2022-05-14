import { useState } from "react";

export const useScrollY = (
  scrollEl: HTMLElement | null,
  thresholds: number[] = [0]
) => {
  const [hasYScrolled1, setHasYScrolled1] = useState(false);
  const [hasYScrolled2, setHasYScrolled2] = useState(false);
  if (!scrollEl)
    return {
      onScroll: undefined,
      showKeyLine: false,
    };
  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    const isRefTarget = scrollEl ? scrollEl === e.target : true;
    if (isRefTarget) {
      setHasYScrolled1((e.target as HTMLElement).scrollTop > thresholds[0]);
      setHasYScrolled2((e.target as HTMLElement).scrollTop > thresholds[1]);
    }
  };
  // console.log({ hasYScrolled });
  return {
    hasYScrolled1,
    hasYScrolled2,
    onScroll,
  };
};
