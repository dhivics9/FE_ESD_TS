import { FC } from "react";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";

interface EyePasswordProps {
  isHide: boolean;
  name: string;
  handleHidingEye: (name: string) => void;
}

const EyePassword: FC<EyePasswordProps> = ({
  isHide,
  name,
  handleHidingEye,
}) => {
  return (
    <div onClick={() => handleHidingEye(name)}>
      {isHide ? (
        <EyeSlashIcon className="w-h h-5 cursor-pointer text-[#64748B]" />
      ) : (
        <EyeIcon className="w-h h-5 cursor-pointer text-[#64748B]" />
      )}
    </div>
  );
};

export default EyePassword;
