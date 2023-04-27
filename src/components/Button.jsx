import { Link } from "react-router-dom";

const Button = ({ type, to, children, bg }) => {
  const style = "py-2 px-5 rounded-lg font-medium";
  if (type === "link")
    return (
      <Link to={to} className={`${checkBg(bg)} ${style} `}>
        {children}
      </Link>
    );
  return <button className={`${checkBg(bg)} ${style}`}>{children}</button>;
};

function checkBg(color) {
  let classname = "";

  switch (color) {
    case "primary":
      classname = "bg-third";
      break;
    case "outline":
      classname = "border transition-colors hover:bg-white hover:text-black";
      break;
    default:
      break;
  }

  return classname;
}

export default Button;
