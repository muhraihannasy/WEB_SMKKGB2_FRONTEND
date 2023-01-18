import { RiErrorWarningFill } from "react-icons/ri";

export const AlertInputError = ({ field, errors }) => {
  return (
    <>
      {errors.includes(field) && (
        <div className="flex gap-2 text-red-500  items-center ">
          <RiErrorWarningFill />
          <span className="text-[0.8rem]">Field Tidak Boleh Kosong</span>
        </div>
      )}
    </>
  );
};
