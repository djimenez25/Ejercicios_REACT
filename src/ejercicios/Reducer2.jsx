import { useReducer, useState } from "react";

const tareasReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_TAREA":
      return [...state, action.tarea];
    case "ELIMINAR_TAREA":
      return state.filter((tarea, index) => index !== action.index);
    case "TOGGLE_COMPLETADA":
      return state.map((tarea, index) =>
        index === action.index
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      );
  }
};

export function Reducer2() {
  const [tareas, setTareas] = useReducer(tareasReducer, []);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: Date.now(),
      name: `Tarea: ${nuevaTarea}`,
      completada: false,
    };
    setTareas({ type: "AGREGAR_TAREA", tarea: tareaNueva });
  };

  const eliminarTarea = (index) => {
    setTareas({ type: "ELIMINAR_TAREA", index });
  };

  const toggleTarea = (index) => {
    setTareas({ type: "TOGGLE_COMPLETADA", index });
  };

  return (
    <div className='container mt-4'>
      <h3 className='text-center mb-3'>Mis Tareas</h3>

      <form className='d-flex' onSubmit={agregarTarea}>
        <input
          type='text'
          className='form-control me-2'
          placeholder='Nueva tarea...'
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          style={{ maxWidth: "300px" }}
        />
        <button type='submit' className='btn btn-primary'>
          Agregar
        </button>
      </form>

      <ul className='list-group mt-3'>
        {tareas.map((tarea, index) => (
          <li
            key={tarea.id}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            <div>
              <span className='fw-bold'>{tarea.name}</span>
              <p className='mb-0 small text-muted'>
                {tarea.completada ? "Completada" : "No completada"}
              </p>
            </div>
            <div>
              <button
                className='btn btn-sm btn-outline-success me-2'
                onClick={() => toggleTarea(index)}
              >
                {tarea.completada ? "No completada" : "Completada"}
              </button>
              <button
                className='btn btn-sm btn-outline-danger'
                onClick={() => eliminarTarea(index)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
