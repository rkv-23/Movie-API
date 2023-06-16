function statusMgmt() {}

statusMgmt.prototype.SUCCESS = {
  message: 'Success',
  statusCode: 200,
  status: true,
  data: {},
};

statusMgmt.prototype.BAD_REQUEST = {
  message: 'Bad Request!!',
  statusCode: 400,
  status: false,
};

statusMgmt.prototype.INTERNAL_SERVER_ERROR = {
  message: 'Internal Server Error!!!',
  statusCode: 500,
  status: false,
};

statusMgmt.prototype.MOVIE_NOT_FOUND = {
  message: 'Movie with provided id is not present!!',
  statusCode: 404,
  status: false,
};


module.exports = statusMgmt;
