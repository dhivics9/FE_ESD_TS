import React from "react";
import { BASE_URL } from "../../../services/url";
import { useTypedSelector } from "../../../store";
import Modal from "../../elements/Modal/Modal";

interface Props {
  member?: Member;
  isOpen?: boolean;
  onClose: () => void;
}

const DialogMember: React.FC<Props> = ({ member, isOpen, onClose }) => {
  const { dark } = useTypedSelector((s) => s.ui);
  const { token } = useTypedSelector(({ user }) => user.user);

  return isOpen ? <Modal /> : null;
};

export default DialogMember;
