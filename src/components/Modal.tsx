import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "src/components/Button";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800 bg-opacity-70 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto h-full w-full lg:h-auto lg:w-3/6 lg:max-w-3xl">
          {/* Content */}
          <div className="boder-0 relative flex h-full w-full flex-col rounded-lg bg-black shadow-lg outline-none focus:outline-none lg:h-auto">
            {/* Header */}
            <div className="flex items-center justify-between rounded-t p-10">
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
              <button
                onClick={handleClose}
                className="ml-auto border-0 p-1 text-white transition hover:opacity-70"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/* Body */}
            <div className="relative flex-auto p-10">{body}</div>
            {/* Footer */}
            <div className="flex flex-col gap-2 p-10 ">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullwidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
