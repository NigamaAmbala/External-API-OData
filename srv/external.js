const cds = require("@sap/cds");
 
module.exports = cds.service.impl(async function() {
 
    // Connect Service API_BUSINESS_PARTNER
 
    const bp = await cds.connect.to("gw_client_data_13E457B793C61EEF91840F1052ED1AB5");
 
    this.on("READ", "ZTOTECNFWCSTOSAPSet", async req => {
 
        return bp.run(req.query);
 
    })
 
})

// const cds = require("@sap/cds");
// const { getData, createDate } = require("./src/zTotOperations");

// module.exports = cds.service.impl(async function () {
//   this.on("READ", "ZTOTECNFWCSTOSAPSet", getData);
//   // this.on("CREATE", "ZTOTECNFWCSTOSAPSet", createDate)
// });
