function queryUtility() {}

queryUtility.prototype.GET_ALL_MOVIE = `select * from movie ORDER BY created_at DESC LIMIT ? OFFSET ?`;
queryUtility.prototype.GET_MOVIE_BY_ID = `select * from movie where id = ?`;

module.exports = queryUtility;
