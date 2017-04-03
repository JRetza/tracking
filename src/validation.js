/**
 * validates data fields to only be the fields in the validFields array
 * validates data fields to have to include the fields in requiredFields array
 * returns an error if validation doesn't pass, else returns true
 * @param data
 * @returns {Error|boolean} returns an Error if fields do not validate and true if they do
 */
export function validateFields (data) {
  let validFields = [
    'appID',
    'vertical',
    'conversionID',
    'customerID',
    'bets',
    'betTotal',
    'eventType',
    'timestamp',
    'walletAmount'
  ];

  let requiredFields = [
    'appID',
    'vertical'
  ];

  let requiredCount = 0;

  for (let property in data) {
    if (validFields.indexOf(property) < 0) {
      return new Error('Invalid property submitted in data object: ' + property + '\n Valid fields are as follows: ' + validFields);
    }
    if (requiredFields.indexOf(property) > -1) {
      requiredCount++;
    }
  }
  if (requiredCount !== requiredFields.length) {
    return new Error('Required fields are missing from data object, `data` must contain the following fields: ' + requiredFields);
  }
  return true;
}
/**
 * validates the bets property of the attribute to be an array and be formatted correctly
 * returns an error if validation doesn't pass, else returns true
 * @param data
 * @returns {Error|boolean} returns an Error if bets do not validate and true if they do
 */
export function validateBets (data) {
  // Validate bet array and stringify
  if (data.bets) {
    if (!(data.bets instanceof Array)) {
      return new Error('Expected data.bets to be an Array, instead found ' + (typeof data.bets));
    }

    for (let i = 0; i < data.bets.length; i++) {
      let exploded = data.bets[i].split('_');
      if (exploded.length !== 2 && exploded.length !== 3) {
        return new Error('Invalid bet data supplied to bets, expected [operator]_[marketid] or [operator]_[marketid]_[selectionid], found ' + data.bets[i]);
      }
    }

    data.bets = data.bets.join(',');
    return true;
  } else {
    return new Error('Data does not contain bets');
  }
}
