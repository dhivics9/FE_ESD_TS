import React from "react";
import { Button } from "../../../../../components/elements/Button/Button";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { openModal } from "../../../../../utils/modal";

interface MemberTableProps {
  members: Member[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  setSelectedMember: (member: Member) => void;
  setDeletedItem: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }>
  >;
  isLoading: boolean; // New prop for loading state
}

const MemberTable: React.FC<MemberTableProps> = ({
  members,
  currentPage,
  totalPages,
  setCurrentPage,
  setSelectedMember,
  setDeletedItem,
  isLoading,
}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4} className="text-center">
                  Loading...
                </td>
              </tr>
            ) : null}

            {members?.map((member: Member) => (
              <tr key={member.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={member.image} alt={member.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{member.name}</div>
                    </div>
                  </div>
                </td>
                <td>{member.role}</td>
                <td> {member.status}</td>
                <td>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => {
                        setSelectedMember?.(member);
                        openModal("edit-member-dialog");
                      }}
                    >
                      <PencilSquareIcon className="size-5" />
                    </Button>
                    <Button
                      variant="danger"
                      className=""
                      onClick={() => {
                        setDeletedItem?.({
                          id: member.id,
                          name: member.name,
                        });
                        openModal("modal-delete");
                      }}
                    >
                      <TrashIcon className="size-5" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between">
        <button
          className="btn btn-sm"
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-sm"
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MemberTable;
