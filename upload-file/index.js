const fs = require('fs');
const AWS = require('aws-sdk');

const BUCKET_NAME = '<bucket name here>';
const ACCESS_KEY_ID = '<access key id here>';
const SECRET_ACCESS_KEY = '<secret access key here';

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY
});

const main = async () => {
  const fileName = '20211025.csv';
  const prefix = 'ios_288429040';

  // read file
  const fileContent = fs.readFileSync(fileName);

  // upload to S3
  await s3.upload({
    Bucket: BUCKET_NAME,
    Key: `${prefix}/${fileName}`,
    Body: fileContent
  }).promise();
  console.log('File uploaded');
};

main();