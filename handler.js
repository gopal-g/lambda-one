'use strict';

module.exports.helloWorld = (event, context, callback) => {
  console.log(event)
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!!',
      input: event,
    }),
  };

  callback(null, response);
};
