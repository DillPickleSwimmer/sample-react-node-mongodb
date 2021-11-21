import { useRecoilValue } from "recoil";
import { useEffect } from "react";

export const RecoilObserver = ({ node, onChange }) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};
