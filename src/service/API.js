// const APIBASEURL = "https://api.smkkgb2.sch.id";
const APIBASEURL = "http://127.0.0.1:8000";

const requestSetting = (type, body = null) => {
  const token =
    JSON.parse(localStorage.getItem("usr")).acctkn === null
      ? ""
      : JSON.parse(localStorage.getItem("usr")).acctkn;

  const setting = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  switch (type) {
    case "GET":
      setting.method = "GET";
      break;
    case "POST":
      setting.method = "POST";
      setting.body = JSON.stringify(body);
      break;
    case "PUT":
      setting.method = "PUT";
      setting.body = JSON.stringify(body);
      break;
    case "DELETE":
      setting.method = "DELETE";
      setting.body = JSON.stringify(body);
      break;
    default:
      break;
  }

  return setting;
};

const FecthData = async (url = "", optionsObj = null) => {
  let response = null;

  try {
    const request = await fetch(url, optionsObj);
    console.log(request);
    if (!request.ok) throw Error("Please reload the app");

    response = await request.json();
  } catch (err) {
    console.log(err.message);
  } finally {
    return response;
  }
};

export { APIBASEURL, requestSetting, FecthData };
