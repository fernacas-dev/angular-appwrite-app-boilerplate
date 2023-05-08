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

 const instanceNames = await database.listDocuments('wphostingdb','instancesCreatedQueue');

 const data = [];

 for(let i = 0; i < instanceNames.documents.length; i++){
  const response = await describeContainer(host, instanceNames.documents[i].instanceName);
  console.log(response.data.message);

  if(response.data.message.Id !== ""){
    data.push(response.data.message)
    await database.deleteDocument('wphostingdb','instancesCreatedQueue', instanceNames.documents[i].$id);
  }
 }

 for(let i = 0; i < data.length; i++){
  const name = data[i].Names[0].split("/")[1];
  await database.createDocument('wphostingdb', 'instanceData', name, {
    ContainerId: data[i].Id,
    Name: name,
    Image: data[i].Image,
    ImageId: data[i].ImageID,
    Created: data[i].Created,
    Ports: JSON.stringify(data[i].Ports),
    Labels: JSON.stringify(data[i].Labels),
    State: data[i].State,
    Status: data[i].Status,
    NetworkSettings: JSON.stringify(data[i].NetworkSettings),
    Mounts: JSON.stringify(data[i].Mounts),
  });
 }

  res.json(data);
};
