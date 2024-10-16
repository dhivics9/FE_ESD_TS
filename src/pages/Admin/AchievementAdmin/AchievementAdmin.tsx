import React, { useState, useMemo } from "react";
import {
  useDeleteAchievement,
  useGetAllAchievements,
} from "../../../services/achievement/achievement.query";
import Card from "../../../components/elements/Card/Card";
import { Button } from "../../../components/elements/Button/Button";
import DialogRemove from "../../../components/ui/DialogRemove/DialogRemove";
import { closeModal, openModal } from "../../../utils/modal";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import DialogAddAchievement from "./components/DialogAdd/DialogAddAchievement";
import DialogEditAchievement from "./components/DialogEdit/DialogEditAchievement";
import AchievementTable from "./components/Table/AchievementTable";

const AchievementAdmin: React.FC = () => {
  const queryClient = useQueryClient();
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement>();
  const [deletedItem, setDeletedItem] = useState<{ id: string; name: string }>({
    id: "",
    name: "",
  });

  const { id: deletedId, name: deletedName } = deletedItem;

  const {
    data: achievementData,
    isFetching,
    // isError,
  } = useGetAllAchievements();
  const { mutate: deleteAchievement, isPending: pendingDelete } =
    useDeleteAchievement({
      onSuccess: () => {
        setDeletedItem({ id: "", name: "" });
        queryClient.invalidateQueries({ queryKey: ["achievements"] });
        closeModal("modal-delete");
        toast.success("Achievement deleted successfully");
      },
      onError: (err) => {
        console.error(err);
        toast.error("Failed to delete achievement");
      },
    });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const totalPages = Array.isArray(achievementData)
    ? Math.ceil(achievementData.length / pageSize)
    : 1;

  const tableData = useMemo(() => {
    if (Array.isArray(achievementData)) {
      return achievementData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
      );
    }
    return [];
  }, [achievementData, currentPage]);

  // if (isError) return <div>Error loading data.</div>;

  return (
    <>
      <Card className="space-y-6 p-6">
        <div className="inline-flex w-full justify-between">
          <h1 className="text-2xl font-semibold">Achievements</h1>
          <Button
            onClick={() => {
              openModal("add-achievement-dialog");
            }}
          >
            Add Achievement
          </Button>
        </div>
        <AchievementTable
          achievements={tableData}
          currentPage={currentPage}
          totalPages={totalPages}
          setSelectedAchievement={setSelectedAchievement}
          setDeletedItem={setDeletedItem}
          setCurrentPage={setCurrentPage}
          isLoading={isFetching} // Pass loading state to table
        />
      </Card>

      <DialogAddAchievement
        onClose={() => {
          closeModal("add-achievement-dialog");
        }}
      />

      {selectedAchievement ? (
        <DialogEditAchievement
          selectedAchievement={selectedAchievement}
          onClose={() => {
            closeModal("edit-achievement-dialog");
            setSelectedAchievement(undefined);
          }}
        />
      ) : null}

      <DialogRemove
        isPending={pendingDelete} // Pass pending state
        title={`Delete ${deletedName}`}
        onConfirm={() => {
          deleteAchievement(deletedId);
        }}
        onClose={() => {
          closeModal("modal-delete");
        }}
      />
    </>
  );
};

export default AchievementAdmin;
