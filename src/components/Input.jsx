import { AlertInputError } from "./AlertInput";

// const coba = tr;

export const Input = ({
  formData,
  setFormData,
  type = "text",
  field,
  label,
  errors,
  data = [],
  value,
  disable
}) => {
  switch (type) {
    case "text":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label}</label>
          <input
            id={field}
            type="text"
            placeholder="..."
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
              errors.includes(field)
                ? "border-red-300 focus:border-red-300"
                : "border-slate-300 focus:border-slate-400"
            }`}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, [field]: e.target.value }))
            }
            value={formData[field]}
          />
          <AlertInputError field={field} errors={errors} />
        </div>
      );
      break;
    case "email":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label} </label>
          <input
            id={field}
            type="email"
            placeholder="..."
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg  
            ${errors.includes(field)
                ? "border-red-300 focus:border-red-300"
                : "border-slate-300 focus:border-slate-400"
            }
            ${disable ? "bg-slate-200" : ""}
            `}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, [field]: e.target.value }))
            }
            value={formData[field]}
            disabled={disable}
          />
          <AlertInputError field={field} errors={errors} />
        </div>
      );
      break;
    case "password":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label} </label>
          <input
            id={field}
            type="password"
            placeholder="..."
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
              errors.includes(field)
                ? "border-red-300 focus:border-red-300"
                : "border-slate-300 focus:border-slate-400"
            }`}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, [field]: e.target.value }))
            }
            value={formData[field]}
          />
          <AlertInputError field={field} errors={errors} />
        </div>
      );
      break;
    case "number":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label} </label>
          <input
            id={field}
            type="number"
            placeholder="..."
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
              errors.includes(field)
                ? "border-red-300 focus:border-red-300"
                : "border-slate-300 focus:border-slate-400"
            }`}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, [field]: e.target.value }))
            }
            value={formData[field]}
          />

          <AlertInputError field={field} errors={errors} />
        </div>
      );
      break;
    case "date":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label} </label>
          <input
            id={field}
            type="date"
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg   ${
              errors.includes(field)
                ? "border-red-300 focus:border-red-300"
                : "border-slate-300 focus:border-slate-400"
            }`}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, [field]: e.target.value }))
            }
            value={formData[field]}
          />
          <AlertInputError field={field} errors={errors} />
        </div>
      );
      break;
    case "textarea":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label}</label>
          <textarea
            id={field}
            placeholder="..."
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg ${
              errors.reason_kip
                ? "border-red-300 focus:border-red-300"
                : "border-slate-300 focus:border-slate-400"
            }`}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, [field]: e.target.value }))
            }
            value={formData[field]}
          />
          <AlertInputError field={field} errors={errors} />
        </div>
      );
    case "select":
      return (
        <div className="input-group">
          <label htmlFor={field}>{label}</label>{" "}
          <select
            id={field}
            placeholder="..."
            className={`border-1  focus:ring-0 focus:outline-none rounded-lg   ${
              errors.includes(field)
                ? "border-red-300 focus:border-red-300"
                : "border-slate-300 focus:border-slate-400"
            }`}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, [field]: e.target.value }))
            }
            value={formData[field]}
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
          <AlertInputError field={field} errors={errors} />
        </div>
      );
    default:
      break;
  }
};
