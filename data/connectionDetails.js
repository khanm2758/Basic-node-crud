const mongoConn = {
  userid: encodeURIComponent(process.env.DB_USER),
  password: encodeURIComponent(process.env.DB_PASS),
};




module.exports = { mongoConn };
