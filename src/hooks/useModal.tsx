import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { subscribeModalAtom } from "../atoms/modals";
import { Modal } from "../components/modal";

export const useModals = () => {
  const [subscribeModalOpen, setSubscribeModalOpen] =
    useRecoilState(subscribeModalAtom);

  const SubscribeModal = useMemo(() => {
    return (
      <Modal isOpen={subscribeModalOpen} setOpen={setSubscribeModalOpen}>
        Modal
      </Modal>
    );
  }, []);

  const ModalInstances = useMemo(() => <>{SubscribeModal}</>, [SubscribeModal]);

  return { ModalInstances };
};
