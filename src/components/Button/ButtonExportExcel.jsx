import { RiFileExcel2Line } from "react-icons/ri"


const ButtonExportExcel = ({onClick}) => {

  return (
    <button onClick={onClick} className="flex items-center gap-2 px-4 py-3 text-white transition-all duration-300 bg-green-600 border-b-4 border-green-700 rounded-lg hover:border-green-800">Export Excel <RiFileExcel2Line className="text-[1.5em]" /></button>
  )
}

export default ButtonExportExcel