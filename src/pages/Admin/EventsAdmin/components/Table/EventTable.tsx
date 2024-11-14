import React from "react";
import { Button } from "../../../../../components/elements/Button/Button";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { openModal } from "../../../../../utils/modal";
import {  formatDateEvent } from "../../../../../utils/string";

interface EventTableProps {
  events: EventTypes[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  setSelectedEvent: (event: EventTypes) => void;
  setDeletedItem: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }>
  >;
  isLoading: boolean; // New prop for loading state
}

const EventTable: React.FC<EventTableProps> = ({
  events,
  currentPage,
  totalPages,
  setCurrentPage,
  setSelectedEvent,
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
              <th>Date</th>
              <th>Organizer</th>
              <th>Image</th>
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

            {events?.map((event: EventTypes) => (
              <tr key={event.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{event.name}</div>
                    </div>
                  </div>
                </td>
                <td>{formatDateEvent(event.date)}</td>
                <td> {event.organizer}</td>
                <td>
                  {event.image ? (
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={event.image}
                          alt={event.name}
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
                        setSelectedEvent?.(event);
                        openModal("edit-event-dialog");
                      }}
                    >
                      <PencilSquareIcon className="size-5" />
                    </Button>
                    <Button
                      variant="danger"
                      className=""
                      onClick={() => {
                        setDeletedItem?.({
                          id: event.id,
                          name: event.name,
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

export default EventTable;
