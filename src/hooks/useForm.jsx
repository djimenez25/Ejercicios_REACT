import { useState } from "react";

export function useForm(valorInicial) {
  const [values, setValues] = useState(valorInicial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const resetForm = (e) => {
    e.preventDefault();
    setValues(valorInicial);
  };

  return { values, handleChange, resetForm, handleSubmit };
}
