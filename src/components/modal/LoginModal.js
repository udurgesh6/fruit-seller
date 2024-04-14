import React from "react";
import Common from "../login/Common";
import MainModal from "./MainModal";

const LoginModal = ({ modalOpen, setModalOpen }) => {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="border-2 z-[1000] relative w-full max-w-lg p-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <Common setModalOpen={setModalOpen} />
      </div>
    </MainModal>
  );
};

export default React.memo(LoginModal);
