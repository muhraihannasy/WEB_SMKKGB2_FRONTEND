import { Link } from 'react-router-dom'

const ButtonNav = ({children, bg, to}) => {

   let bgColor = "";
   switch (bg) {
    case "primary":
        bgColor = "bg-orange-500 border-orange-600 hover:border-orange-700";
        break;
    default:
        bgColor = "bg-yellow-500 border-yellow-600 hover:border-yellow-700";
        break;
   }

  return (
    <Link to={to} className={`flex items-center gap-2 px-4 py-3 text-white transition duration-300 border-b-4 rounded-lg transition-all ${bgColor}`}>{children}</Link>
  )
}

export default ButtonNav