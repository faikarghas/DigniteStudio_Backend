require('dotenv').config(); // Loading dotenv to have access to env variables
const AWS = require('aws-sdk'); // Requiring AWS SDK.

// Configuring AWS
AWS.config = new AWS.Config({
  accessKeyId: "AKIAIUPDOUUBDMWJZXAQ", // stored in the .env file
  secretAccessKey: "vxOLAD+5D71rpziAH5niKqhmlyxvTvzKw8ZDj1UW", // stored in the .env file
  region: process.env.BUCKET_REGION // This refers to your bucket configuration.
});

// Creating a S3 instance
const s3 = new AWS.S3();

// Retrieving the bucket name from env variable
const Bucket = process.env.BUCKET_NAME;

// In order to create pre-signed GET adn PUT URLs we use the AWS SDK s3.getSignedUrl method.
// getSignedUrl(operation, params, callback) ⇒ String
// For more information check the AWS documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html

// GET URL Generator
function generateGetUrl(Key) {
  return new Promise((resolve, reject) => {
    let dataUrl = []
    // Note operation in this case is getObject
    Key.map(item=>{
      const params = {
        Bucket,
        Key:item,
        Expires: 120 // 2 minutes
      };

      s3.getSignedUrl('getObject', params, (err, url) => {
        if (err) {
          reject(err);
        } else {
          // If there is no errors we will send back the pre-signed GET URL
          // console.log(url);
          dataUrl.push(url)
        }
      });

      resolve(dataUrl);

    })


  });
}

// PUT URL Generator
function generatePutUrl(Key, ContentType) {
  return new Promise((resolve, reject) => {
    // Note Bucket is retrieved from the env variable above.
    const params = { Bucket, Key, ContentType };
    // Note operation in this case is putObject
    s3.getSignedUrl('putObject', params, function(err, url) {
      if (err) {
        reject(err);
      }
      // If there is no errors we can send back the pre-signed PUT URL
      resolve(url);
    });
  });
}

// Finally, we export the methods so we can use it in our main application.
module.exports = { generateGetUrl, generatePutUrl };