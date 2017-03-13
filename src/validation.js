export function validateFields (data) {
  var validFields = [
    'appID',
    'vertical',
    'conversionID',
    'customerID',
    'bets',
    'betTotal',
    'eventType',
    'timestamp',
    'walletAmount'
  ]

  var requiredFields = [
    'appID',
    'vertical'
  ]

  var requiredCount = 0

  for (var property in data) {
    if (data.hasOwnProperty(property)) {
      if (validFields.indexOf(property) < 0) {
        return new Error('Invalid property submitted in data object: ' + property + '\n Valid fields are as follows: ' + validFields)
      }

      if (requiredFields.indexOf(property) > -1) {
        requiredCount++
      }
    }
  }

  if (requiredCount !== requiredFields.length) {
    return new Error('Required fields are missing from data object, `data` must contain the following fields: ' + requiredFields)
  }
}

export function validateBets(data)
{
  // Validate bet array and stringify
  if (data.bets) {
    if (!(data.bets instanceof Array)) {
      return new Error('Expected data.bets to be an Array, instead found ' + (typeof data.bets))
    }

    for (var i = 0; i < data.bets.length; i++) {
      var exploded = data.bets[i].split('_')
      if (exploded.length !== 2) {
        return new Error('Invalid bet data supplied to bets, expected [betid]_[optionid], found ' + data.bets[i])
      }
    }

    data.bets = data.bets.join(',')
  }
}

