const sdk = require("node-appwrite");
const axios = require("axios");


async function describeContainer(host, containerName){
  const response = await axios.get(`http://${host}/wordpress/${containerName}`);
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

 const instanceNames = await database.listDocuments('wphostingdb','instanceData');

 const data = [];

 for(let i = 0; i < instanceNames.documents.length; i++){
  const response = await describeContainer(host, instanceNames.documents[i].Name);
  console.log(response.data.message);

  if(response.data.message.Id !== ""){
    data.push(response.data.message)
  }
 }

 for(let i = 0; i < data.length; i++){
  const name = data[i].Names[0].split("/")[1];
  await database.updateDocument('wphostingdb', 'instanceData', name, {
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
