import { CSVDownload, CSVLink } from "react-csv";

const ExportExcel = () => {

const headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" }
]
const data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Mixamn l3b", email: "ymin@cocococo.com" }
];


  return <CSVLink data={data} target="_blank" headers={headers}>asd</CSVLink>;;
};

export default ExportExcel;
