const { getService } = require("./util");
const cds = require("@sap/cds");

const getData = async (req) => {
  const oSrv = await getService("gw_client_data_13E457B793C61EEF91840F1052ED1AB5");
  return oSrv.tx(req).run(req.query);
};

// const createDate = async (req) => {
//   const oSrv = await getService("gw_client_data_13E457B793C61EEF91840F1052ED1AB5");
//   const oPayload = req.data;
//   const oResult = await oSrv.send("POST", "/ZTOTECNFWCSTOSAPSet", oPayload);
//   return oResult;
// };

module.exports = {
  getData,
  createDate
};
