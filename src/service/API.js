// const APIBASEURL = "https://api.smkkgb2.sch.id";
const APIBASEURL = "https://390c-103-3-221-156.ngrok-free.app";

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
    if (request.status == 401) {
      localStorage.removeItem("usr");
      window.location.href = "/login";
      return;
    }

    response = await request.json();
  } catch (err) {
    console.log(err.message);
  } finally {
    return response;
  }
};

export { APIBASEURL, requestSetting, FecthData };
