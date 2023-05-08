const sdk = require("node-appwrite");
const axios = require("axios");

async function createContainer(host, payload){
  const response = await axios.post(`http://${host}/wordpress/create`, payload, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  return response;
}

async function removeContainer(host, containerName){
  const response = await axios.delete(`http://${host}/wordpress/${containerName}`);
  return response;
}

async function describeContainer(host, containerName){
  const response = await axios.get(`http://${host}/wordpress/${containerName}`);
  return response;
}

async function getHealthcheck(host){
  const response = await axios.get(`http://${host}/healthcheck`);
  return response;
}

module.exports = async function (req, res) {
  const client = new sdk.Client();

  // You can remove services you don't use
  const database = new sdk.Databases(client);

  if (
    !req.variables['APPWRITE_FUNCTION_ENDPOINT'] ||
    !req.variables['APPWRITE_FUNCTION_API_KEY']
  ) {
    console.warn("Environment variables are not set. Function cannot use Appwrite SDK.");
  } else {
    client
      .setEndpoint(req.variables['APPWRITE_FUNCTION_ENDPOINT'])
      .setProject(req.variables['APPWRITE_FUNCTION_PROJECT_ID'])
      .setKey(req.variables['APPWRITE_FUNCTION_API_KEY'])
      .setSelfSigned(true);
  }

 const host = req.variables['NODE_HOST'];

 const payload = JSON.parse(req.payload);

 const response = await removeContainer(host, payload.containerName);

 const opRem = await database.deleteDocument('wphostingdb','instanceData', payload.containerName);
 console.log(opRem)

  res.json({containerName: payload.containerName});
};
