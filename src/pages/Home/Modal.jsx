import { useEffect, useState } from "react";

const Modal = () => {
  const [modalShown, setModalShown] = useState(true);

  useEffect(() => {
    if (modalShown) {
      const modal = document.getElementById("my_modal_4");
      modal.showModal();
      // setModalShown(false);
    }
  }, [modalShown]);

  const closeModal = () => {
    const modal = document.getElementById("my_modal_4");
    modal.close();
    setModalShown(false);
  };
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="relative flex flex-col justify-center w-11/12 max-w-3xl p-8 text-white rounded-lg shadow-lg modal-box bg-gradient-to-r from-indigo-500 to-violet-500">
        <div className="mb-4 text-3xl font-bold text-center">
          Special Offer!
        </div>
        <div className="mb-4 text-lg text-center">
          Get <span className="font-bold text-yellow-400">25% OFF</span> your
          next purchase!
        </div>
        <div className="mb-4 text-base text-center">Use coupon code:</div>
        <div className="flex items-center justify-between px-4 py-2 text-gray-800 bg-white rounded-lg">
          <span className="text-2xl font-semibold">Happy24</span>
          <button className="px-3 py-1 text-white bg-blue-800 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Copy
          </button>
        </div>
        <div className="mt-4 text-sm">
          <p className="text-center">
            Valid until <span className="font-semibold">December 31, 2023</span>
          </p>
          <p className="text-center">Terms and conditions apply.</p>
        </div>
        <div className="absolute modal-action right-2 sm:right-4 top-0 sm:top-1 w-[32px] h-[32px]">
          <form method="dialog">
            <button onClick={closeModal} className="">
              <img
                src="/assets/close.svg"
                className="w-full h-full"
                alt="icon"
              />
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
