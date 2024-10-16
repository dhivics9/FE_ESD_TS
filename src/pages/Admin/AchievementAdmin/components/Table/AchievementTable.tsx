import React from "react";
import { Button } from "../../../../../components/elements/Button/Button";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { openModal } from "../../../../../utils/modal";

interface AchievementTableProps {
  achievements: Achievement[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  setSelectedAchievement: (achievement: Achievement) => void;
  setDeletedItem: React.Dispatch<
    React.SetStateAction<{ id: string; achievement: string }>
  >;
  isLoading: boolean;
}

const AchievementTable: React.FC<AchievementTableProps> = ({
  achievements,
  currentPage,
  totalPages,
  setCurrentPage,
  setSelectedAchievement,
  setDeletedItem,
  isLoading,
}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Member ID</th>
              <th>Achievement</th>
              <th>Image</th>
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

            {achievements?.map((achievement: Achievement) => (
              <tr key={achievement.id}>
                <td>{achievement.member_id}</td>
                <td>{achievement.achievement}</td>
                <td>
                  {achievement.image ? (
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={achievement.image}
                          alt={achievement.achievement}
                        />
                      </div>
                    </div>
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                <td>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => {
                        setSelectedAchievement?.(achievement);
                        openModal("edit-achievement-dialog");
                      }}
                    >
                      <PencilSquareIcon className="size-5" />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        setDeletedItem?.({
                          id: achievement.id,
                          achievement: achievement.achievement,
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

export default AchievementTable;
