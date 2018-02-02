let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {
	sns.publish({
		Message: 'this is a test message',
		MessageAttributes: {
			'AWS.SNS.SMS.SMSType': {
				DataType: 'String',
				StringValue: 'Transactional'
			},
			'AWS.SNS.SMS.SenderID': {
				DataType: 'String',
				StringValue: 'Hirudinee'
			}
		},
		PhoneNumber: '+94715397214'
	}).promise()
		.then(data => {

			console.log("successful , data : ", data);
		})
		.catch(err => {
			console.log("Error , error message : ", err);

		});
	sns.createPlatformEndpoint({
		PlatformApplicationArn: 'arn:aws:sns:us-east-1:480964559519:app/BAIDU/Test-Baidu-App',
		Token: '123456',
		CustomUserData: 'test',
		Attributes: {
			'test': '001',
		},
	}).promise()
		.then(data => {
			console.log("successful , data : ", data);
		})
		.catch(err => {
			console.log("Error , error message : ", err);
		});

	// You can pass the existing connection to this function.
	// A new connection will be created if it's not present as the third param 
	// You must always end/destroy the DB connection after it's used
	rds.query({
		instanceIdentifier: 'hirutest',
		query: 'Select * from customers',
		inserts: []
	}, function (error, results, connection) {
		if (error) {
			console.log("Error occurred");
			throw error;
		} else {
			console.log("Success")
			console.log(results);
		}

		connection.end();
	});


	callback(null, 'Successfully executed');
}