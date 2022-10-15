import React, { useCallback, useState, ChangeEvent } from "react";

const useChange = (
  initialState: string
): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [value, setValue] = useState(initialState);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, onChange];
};

export default useChange;
