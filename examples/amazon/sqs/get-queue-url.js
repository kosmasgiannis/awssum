var inspect = require('eyes').inspector();
var awssum = require('awssum');
var amazon = awssum.load('amazon/amazon');
var Sqs = awssum.load('amazon/sqs').Sqs;

var env = process.env;
var accessKeyId = process.env.ACCESS_KEY_ID;
var secretAccessKey = process.env.SECRET_ACCESS_KEY;
var awsAccountId = process.env.AWS_ACCOUNT_ID;

var sqs = new Sqs(accessKeyId, secretAccessKey, awsAccountId, amazon.US_EAST_1);

console.log( 'Region :', sqs.region() );
console.log( 'EndPoint :',  sqs.host() );
console.log( 'AccessKeyId :', sqs.accessKeyId() );
console.log( 'SecretAccessKey :', sqs.secretAccessKey().substr(0, 3) + '...' );
console.log( 'AwsAccountId :', sqs.awsAccountId() );

sqs.GetQueueUrl({ QueueName : 'my-queue' }, function(err, data) {
    console.log("\nGetting the URL for my-queue - expecting success");
    inspect(err, 'Error');
    inspect(data, 'Data');
});
