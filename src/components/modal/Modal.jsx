const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-[rgba(13,110,253,0.25)] bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className=" rounded-lg  p-6 relative flex justify-center items-center">{children}</div>
    </div>
  );
};

export default Modal;
