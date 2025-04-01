import { ChangeEvent, useState } from "react";

export const useForm = <T extends object>(initialValue: T) => {
  const [values, setValues] = useState<T>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setValues(initialValue);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
};
