import { useModal } from "../hooks/useModal";

export function HookPersonalizado5() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <button className='btn btn-primary' onClick={openModal}>
        Mostrar Modal
      </button>
      {isOpen && (
        <div className='modal fade show d-block' tabIndex='-1'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Modal Abierto</h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={closeModal}
                ></button>
              </div>
              <div className='modal-body'>
                <p>El modal esta abierto</p>
              </div>
              <div className='modal-footer'>
                <button className='btn btn-danger' onClick={closeModal}>
                  Cerrar Modal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
