module.exports = function (error, stats) {
  if (error) {
    throw error;
  }

  var jsonStats = stats.toJson();

  if (jsonStats.errors.length > 0) {
    handleErrors(jsonStats.errors);
  }

  if (jsonStats.warnings.length > 0) {
    handleErrors(jsonStats.warnings);
  }

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');
};

function handleErrors (array) {
  var errorString = array[0];
  return new Error(errorString);
}
