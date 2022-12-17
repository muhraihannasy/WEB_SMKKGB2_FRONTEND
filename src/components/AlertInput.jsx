import { RiErrorWarningFill } from "react-icons/ri";

export const AlertInputError = ({ field, errors }) => {
  return (
    <div className="flex gap-2 text-red-500  items-center ">
      {errors[`${field}`] && <RiErrorWarningFill />}
      <span className="text-[0.8rem]">{errors[`${field}`]?.message}</span>
    </div>
  );
};
