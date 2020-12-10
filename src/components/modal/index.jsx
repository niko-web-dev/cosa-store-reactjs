import './modal.sass'

const Modal = ({ children, active, setActive }) => {
  return (
    <div
         className={active ? 'modal active' : 'modal'}
         onClick={() => setActive(false)}>
      <div
          className={active ? 'modal__content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}>
            {children}
      </div>
    </div>
  )
}

export default Modal