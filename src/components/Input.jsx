import { AlertInputError } from "./AlertInput";

// const coba = tr;

export const Input = ({
  type = "text",
  field,
  label,
  errors,
  register,
  require = true,
  data = [],
}) => {
  switch (type) {
    case "text":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label} </label>
          {require ? (
            <input
              {...register(field, {
                required: "Tidak Boleh Kosong",
              })}
              id={field}
              type="text"
              placeholder="..."
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
                errors[`${field}`]
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            />
          ) : (
            <input
              {...register(field, { require: false })}
              id={field}
              type="text"
              placeholder="..."
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
                errors[`${field}`]
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            />
          )}
          <AlertInputError field={field} errors={errors} />
        </div>
      );
      break;
    case "email":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label} </label>
          {require ? (
            <input
              {...register(field, {
                required: "Tidak Boleh Kosong",
              })}
              id={field}
              type="email"
              placeholder="..."
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
                errors[`${field}`]
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            />
          ) : (
            <input
              {...register(field, { require: false })}
              id={field}
              type="email"
              placeholder="..."
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
                errors[`${field}`]
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            />
          )}
          <AlertInputError field={field} errors={errors} />
        </div>
      );
      break;
    case "password":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label} </label>
          {require ? (
            <input
              {...register(field, {
                required: "Tidak Boleh Kosong",
              })}
              id={field}
              type="password"
              placeholder="..."
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
                errors[`${field}`]
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            />
          ) : (
            <input
              {...register(field, { require: false })}
              id={field}
              type="password"
              placeholder="..."
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
                errors[`${field}`]
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            />
          )}
          <AlertInputError field={field} errors={errors} />
        </div>
      );
      break;

    case "number":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label} </label>
          {require ? (
            <input
              {...register(field, {
                required: "Tidak boleh kosong",
              })}
              id={field}
              type="number"
              placeholder="..."
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
                errors[`${field}`]
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            />
          ) : (
            <input
              {...register(field, {
                required: false,
              })}
              id={field}
              type="number"
              placeholder="..."
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
                errors[`${field}`]
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            />
          )}

          <AlertInputError field={field} errors={errors} />
        </div>
      );
      break;
    case "date":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label} </label>
          <input
            {...register(field, {
              required: "Tidak boleh kosong",
            })}
            id={field}
            type="date"
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
              errors[`${field}`]
                ? "border-red-300 focus:border-red-300"
                : "border-slate-300 focus:border-slate-400"
            }`}
          />
          <AlertInputError field={field} errors={errors} />
        </div>
      );
      break;
    case "textarea":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label}</label>
          {require ? (
            <textarea
              {...register(field, {
                required: "Tidak boleh kosong",
              })}
              id={field}
              placeholder="..."
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg ${
                errors.reason_kip
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            />
          ) : (
            <textarea
              {...register(field, {
                required: false,
              })}
              id={field}
              placeholder="..."
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg ${
                errors.reason_kip
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            />
          )}
          <AlertInputError field={field} errors={errors} />
        </div>
      );
    case "select":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label}</label>
          {require ? (
            <select
              {...register(field, {
                required: "Tidak boleh kosong",
              })}
              id={field}
              placeholder="..."
              className={`border-1  focus:ring-0 focus:outline-none rounded-lg   ${
                errors[`${field}`]
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            >
              <option value="">Pilih...</option>
              {data.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          ) : (
            <select
              {...register(field, {
                required: false,
              })}
              id={field}
              placeholder="..."
              className={`border-1  focus:ring-0 focus:outline-none rounded-lg   ${
                errors[`${field}`]
                  ? "border-red-300 focus:border-red-300"
                  : "border-slate-300 focus:border-slate-400"
              }`}
            >
              <option value="">Pilih...</option>
              {data.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          )}
          <AlertInputError field={field} errors={errors} />
        </div>
      );
    default:
      break;
  }
};
