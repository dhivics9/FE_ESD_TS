import React, { useState, useMemo } from "react";
import {
  useDeleteMember,
  useGetAllMembers,
} from "../../../services/member/member.query";
import MemberTable from "./components/Table/MemberTable";
import Card from "../../../components/elements/Card/Card";
import { Button } from "../../../components/elements/Button/Button";
import DialogRemove from "../../../components/ui/DialogRemove/DialogRemove";
import { closeModal, openModal } from "../../../utils/modal";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import DialogAddMember from "./components/DialogAdd/DialogAddMember";
import DialogEditMember from "./components/DialogEdit/DialogEditMember";

const MemberAdmin: React.FC = () => {
  const queryClient = useQueryClient();
  const [selectedMember, setSelectedMember] = useState<Member>();
  const [deletedItem, setDeletedItem] = useState<{ id: string; name: string }>({
    id: "",
    name: "",
  });

  const { id: deletedId, name: deletedName } = deletedItem;

  const { data: memberData, isFetching, isError } = useGetAllMembers();
  const { mutate: deleteMember, isPending: pendingDelete } = useDeleteMember({
    onSuccess: () => {
      setDeletedItem({ id: "", name: "" });
      queryClient.invalidateQueries({ queryKey: ["members"] });
      closeModal("modal-delete");
      toast.success("Member deleted successfully");
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to delete member");
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const totalPages = Array.isArray(memberData)
    ? Math.ceil(memberData.length / pageSize)
    : 1;

  const tableData = useMemo(() => {
    if (Array.isArray(memberData)) {
      return memberData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
      );
    }
    return [];
  }, [memberData, currentPage]);

  if (isError) return <div>Error loading data.</div>;

  return (
    <>
      <Card className="space-y-6 p-6">
        <div className="inline-flex w-full justify-between">
          <h1 className="text-2xl font-semibold">Member </h1>
          <Button
            onClick={() => {
              openModal("add-member-dialog");
            }}
          >
            Add Member
          </Button>
        </div>
        <MemberTable
          members={tableData}
          currentPage={currentPage}
          totalPages={totalPages}
          setSelectedMember={setSelectedMember}
          setDeletedItem={setDeletedItem}
          setCurrentPage={setCurrentPage}
          isLoading={isFetching} // Pass loading state to table
        />
      </Card>

      <DialogAddMember
        onClose={() => {
          closeModal("add-member-dialog");
        }}
      />

      {selectedMember ? (
        <DialogEditMember
          selectedMember={selectedMember}
          onClose={() => {
            closeModal("edit-member-dialog");
            setSelectedMember(undefined);
          }}
        />
      ) : null}

      <DialogRemove
        isPending={pendingDelete} // Pass pending state
        title={`Delete ${deletedName}`}
        onConfirm={() => {
          deleteMember(deletedId);
        }}
        onClose={() => {
          closeModal("modal-delete");
        }}
      />
    </>
  );
};

export default MemberAdmin;
