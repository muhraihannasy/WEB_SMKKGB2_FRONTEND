import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";

export const createExpandoList =
  (key, nameList, RowComponent) =>
  ({ state, register, errors, data }) => {
    const [idList, setIdList] = useState(Object.keys(state[key]));

    const addItem = () => {
      setIdList([...idList, idList.length]);
    };

    const onDelete = (index) => {
      setIdList(idList.filter((i) => i !== index));
    };

    return (
      <>
        {idList.map((id) => (
          <div className="mb-[1.5rem] ">
            <RowComponent id={id} register={register} errors={errors} />
            {id > 0 && (
              <button
                type="button"
                onClick={() => onDelete(id)}
                className="px-4 py-2 text-white bg-primary rounded-lg flex items-center gap-2 text-[0.8rem] mt-[1rem]"
              >
                <IoMdTrash className="text-[1.1rem]" />
                Delete
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addItem()}
          className="px-4 py-2 text-white bg-primary rounded-lg flex items-center gap-2 text-[0.8rem] mt-[1rem]"
        >
          <IoAddCircleSharp className="text-[1.1rem]" />
          Tambah {nameList}
        </button>
      </>
    );
  };
