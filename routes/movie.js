var express = require('express');
var commonFunc = require('./common-function');
var router = express.Router();
var mysqlConnection = require('../mysql-connect');
const queryUtility = require('./../utils/QueryUtility');
const Util = require('./../utils/Util');

/* GET all movie */
router.get('/', async (req, res) => {
  let msyqlConn = new mysqlConnection();
  let query = new queryUtility();
  let util = new Util();
  let conn = await msyqlConn.createDbConnection();
  let commonfunc = new commonFunc();
  conn.connect();

  req.check('pageNo', 'pageNo is mantoary field!').notEmpty();
  req.check('pageNo', 'pageNo should be numeric!').isNumeric();

  const errors = req.validationErrors();
  if (errors) {
    util.BAD_REQUEST.message = await commonfunc.getValidationMessage(errors);
    return res.status(400).send(util.BAD_REQUEST);
  }

  let limit = parseInt(process.env.PAGE_SIZE);
  let offset = (req.query.pageNo - 1) * limit;

  conn.query(query.GET_ALL_MOVIE, [limit, offset], async (err, data) => {
    if (err) {
      util.INTERNAL_SERVER_ERROR.message = err.message;
      return res.status(500).send(util.INTERNAL_SERVER_ERROR);
    }
    util.SUCCESS.data = data;
    res.status(200).send(util.SUCCESS);
    conn.end();
  });
});

/* Get movie by id */
router.get('/:id', async (req, res) => {
  let msyqlConn = new mysqlConnection();
  let query = new queryUtility();
  let util = new Util();
  let conn = await msyqlConn.createDbConnection();
  let commonfunc = new commonFunc();
  conn.connect();

  req.check('id', 'id should be numeric!').isNumeric();
  const errors = req.validationErrors();
  if (errors) {
    util.BAD_REQUEST.message = await commonfunc.getValidationMessage(errors);
    return res.status(400).send(util.BAD_REQUEST);
  }

  try {
    let movieData = await commonfunc.getmovieById(conn, req.params.id);
    if (!movieData.status) {
      return res.status(404).send(util.MOVIE_NOT_FOUND);
    }
    util.SUCCESS.data = movieData.data;
    res.status(200).send(util.SUCCESS);
    conn.end();
  } catch (err) {
    util.INTERNAL_SERVER_ERROR.message = err.message;
    return res.status(500).send(util.INTERNAL_SERVER_ERROR);
  }
});

module.exports = router;
