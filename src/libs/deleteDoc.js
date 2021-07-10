
const aws = require('aws-sdk');

const { S3_ENDPOINT, BUCKET_NAME } = process.env;
const spacesEndpoint = new aws.Endpoint(S3_ENDPOINT);
const s3 = new aws.S3({
    endpoint: spacesEndpoint
});

var params = {
    Bucket: BUCKET_NAME,
    Key: req.body.nombreDoc
};

s3.deleteObject(params, function(err, data) {
   if (err) console.log(err, err.stack);
   else     console.log(data);
});

module.exports = params;
