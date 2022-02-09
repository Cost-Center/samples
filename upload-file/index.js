const fs = require('fs');
const AWS = require('aws-sdk');

const BUCKET_NAME = '<bucket name here>';
const ACCESS_KEY_ID = '<access key id here>';
const SECRET_ACCESS_KEY = '<secret access key here>';
const FILE_NAME = '20211025.csv';
const PREFIX = 'ios_288429040';

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY
});

const main = async () => {
  // read file
  const fileContent = fs.readFileSync(FILE_NAME);

  // upload to S3
  await s3.upload({
    Bucket: BUCKET_NAME,
    Key: `${PREFIX}/${FILE_NAME}`,
    Body: fileContent
  }).promise();
  
  console.log('File uploaded');
};

main();
