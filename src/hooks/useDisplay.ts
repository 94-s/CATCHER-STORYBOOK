import React, { useCallback, useState } from "react";

const useDisplay = (
  initialState: boolean
): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  () => void,
  () => void,
  () => void
] => {
  const [display, setDisplay] = useState(initialState);

  const openDisplay = useCallback(() => {
    console.log("open");
    setDisplay(true);
  }, []);

  const closeDisplay = useCallback(() => {
    setDisplay(false);
  }, []);

  const toggleDisplay = useCallback(() => {
    setDisplay(!display);
  }, []);

  return [display, setDisplay, openDisplay, closeDisplay, toggleDisplay];
};

export default useDisplay;
