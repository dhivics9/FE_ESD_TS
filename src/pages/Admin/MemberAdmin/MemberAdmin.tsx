import { useEffect, useState } from "react";
import { getAllMember } from "../../../store/member/action";
import { useTypedDispatch, useTypedSelector } from "../../../store";
import Table from "../../../components/elements/Table";
import ActionButton from "../../../components/ui/ActionButton";
import Avatar from "../../../components/elements/Avatar";
import Card from "../../../components/elements/Card/Card";
import { Button } from "../../../components/elements/Button/Button";
import { capitalizeFirstLetter } from "../../../utils/string";
import Modal from "../../../components/elements/Modal/Modal";
import DialogMember from "../../../components/fragments/DialogMember";
import MemberForm from "../../../components/forms/MemberForm";

const MemberAdmin = () => {
  const [addMemberIsOpen, setAddMemberIsOpen] = useState(false);
  const [editMemberIsOpen, setEditMemberIsOpen] = useState(false);
  const [deleteMemberIsOpen, setDeleteMemberIsOpen] = useState(false);

  const dispatch = useTypedDispatch();
  const { member } = useTypedSelector(({ member }) => member);
  const { loading } = useTypedSelector(({ ui }) => ui);

  const defaultImageUrl = "../src/assets/noimage.webp";

  const headers = ["Name", "Kelas", "Role", "Status", "Action"];
  const width = ["40%", "20%", "20%", "20%"];

  const row = member.map((m) => [
    <div className=" flex items-center gap-2">
      <Avatar src={m.image === "" ? defaultImageUrl : m.image} />
      {m.name}
    </div>,
    "SI4503",
    m.role,
    capitalizeFirstLetter(m.status),
    <ActionButton />,
  ]);

  useEffect(() => {
    dispatch(getAllMember());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!addMemberIsOpen && member !== null && (
        <div className="w-full max-w-[1075px] space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">Laboratory Member</h1>
            <Button
              type="button"
              variant="primary"
              className="text-sm"
              onClick={() => setAddMemberIsOpen((prev) => !prev)}
            >
              Add Member +
            </Button>
          </div>
          <Card className="space-y-4 p-6">
            <div>
              <label className="input-bordered flex items-center gap-2 ">
                <input
                  type="text"
                  className="max-w-96 grow rounded-lg border border-[--stroke-color] px-5 py-2.5 "
                  placeholder="Search..."
                />
              </label>
            </div>
            <hr className="text-[--stroke-color]" />
            <Table
              headers={headers}
              widths={width}
              rows={row}
              loading={loading}
            />
          </Card>
        </div>
      )}

      {member !== null && addMemberIsOpen && (
        <MemberForm setAddMemberIsOpen={setAddMemberIsOpen} />
      )}
    </>
  );
};

export default MemberAdmin;
