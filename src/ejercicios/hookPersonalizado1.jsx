import { useForm } from "../hooks/useForm";

export function HookPersonalizado1() {
  const { values, handleChange, resetForm, handleSubmit } = useForm({
    nombre: "",
    email: "",
  });
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='nombre'
        value={values.nombre}
        onChange={handleChange}
        placeholder='Nombre'
      />

      <input
        type='email'
        name='email'
        value={values.email}
        onChange={handleChange}
        placeholder='Email'
      />

      <button type='submit'>Enviar</button>
      <button onClick={resetForm}>Reset</button>
    </form>
  );
}
