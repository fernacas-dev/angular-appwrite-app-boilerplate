const sdk = require("node-appwrite");
const axios = require("axios");

/*
  'req' variable has:
    'headers' - object with request headers
    'payload' - request body data as a string
    'variables' - object with function variables

  'res' variable has:
    'send(text, status)' - function to return text response. Status code defaults to 200
    'json(obj, status)' - function to return JSON response. Status code defaults to 200

  If an error is thrown, a response with code 500 will be returned.
*/

async function createContainer(host, payload){
  payload.containerImage = 'wordpress'; //'wordpress:php8.2-fpm';
  const response = await axios.post(`http://${host}/wordpress/create`, payload, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
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

 const response = await createContainer(host, payload);

 database.createDocument('wphostingdb','instancesCreatedQueue', sdk.ID.unique(), {
  instanceName: response.data.message
 });

 res.json({instanceName: response.data.message});
};
