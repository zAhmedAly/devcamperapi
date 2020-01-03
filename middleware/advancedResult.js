const advancedResult = (model, populate) => async (req, res, next) => {
  let query;

  // Finding resource
  query = model.findOne({ _id: req.params.id });

  console.log('query = model.findOne => ', query);

  if (populate) {
    query = query.populate(populate);
  }

  console.log('query = query.populate => ', query);

  // Executing query
  const result = await query;

  console.log('result = await query => ', result);

  res.advancedResult = {
    success: true,
    data: result
  };

  next();
};

module.exports = advancedResult;
