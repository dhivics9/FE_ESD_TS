import React from "react";
import { Button } from "../../elements/Button/Button";
import { Link } from "react-router-dom";
import Card from "../../elements/Card/Card";
import { MaterialSymbolsChevronLeft } from "../../elements/Icon/Icon";

interface MemberFormProps {
  member: Member;
  isOpen?: boolean;
  setAddMemberIsOpen: (prev: boolean) => void;
}

const MemberForm = ({
  member,
  isOpen,
  setAddMemberIsOpen,
}: MemberFormProps) => {
  return (
    <Card className="h-fit max-w-[1075px]">
      <div className="flex items-center space-x-2 border-b border-[--stroke-color] px-6 py-4">
        <MaterialSymbolsChevronLeft
          className="size-9 cursor-pointer"
          onClick={() => setAddMemberIsOpen(false)}
        />
        <h1 className="text-lg font-semibold">
          {member !== null ? "Edit" : "Add"} Member
        </h1>
      </div>
      <form action="#" className="p-6">
        <div className="p-6.5 space-y-4">
          <div className="w-full xl:w-1/2">
            <label className=" mb-2.5 block">Nama</label>
            <input
              required
              type="text"
              placeholder="Masukkan Nama..."
              className=" w-full rounded border-[1.5px] border-[--stroke-color] bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className=" mb-2.5 block">
              Kelas <span className="text-meta-1">*</span>
            </label>
            <input
              required
              type="email"
              placeholder="Masukkan kelas..."
              className=" w-full rounded border-[1.5px] border-[--stroke-color] bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className=" mb-2.5 block">Role</label>
            <input
              type="text"
              placeholder="Select subject"
              className=" w-full rounded border-[1.5px] border-[--stroke-color] bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:focus:border-primary"
            />
          </div>

          <div className="mb-6">
            <label className=" mb-2.5 block">Message</label>
            <textarea
              rows={6}
              placeholder="Type your message"
              className=" w-full rounded border-[1.5px] border-[--stroke-color] bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:focus:border-primary"
            ></textarea>
          </div>

          <Button className="w-full  text-sm ">
            {member !== null ? "Edit" : "Add"} Member
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default MemberForm;
