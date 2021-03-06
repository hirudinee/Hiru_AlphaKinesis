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


	rds.beginTransaction({
		instanceIdentifier: 'Hiru002'
	}, function (error, connection) {
		if (error) { throw err; }
	});



	callback(null, 'Successfully executed');
}