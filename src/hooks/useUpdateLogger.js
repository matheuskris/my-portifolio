import { useState, useEffect } from "react";

const useUpdateLogger = (inicialValue) => {
  const [value, setValue] = useState(inicialValue);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return [value, setValue];
};

export default useUpdateLogger;
