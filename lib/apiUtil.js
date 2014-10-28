exports.unsupportedOperationError = function () {
  var error = {
    code: 501,
    message: 'Not Implemented'
  };        
  return error;
}

exports.removeNulls = function (resultSet) {

  console.log('removeNulls');

  for (var resultIndex in resultSet) {

    var dataValues = resultSet[resultIndex].dataValues;

    for(var i in dataValues) {
      if (dataValues[i] === null || dataValues[i] === undefined) {
        // test[i] === undefined is probably not very useful here
        delete dataValues[i];
      }
    }
  }

  return resultSet;
}

