import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./database.sqlite");
const initializedb = async () => {
  await dbRun(
    "CREATE TABLE IF NOT EXISTS flowers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL UNIQUE, description TEXT, stock INTEGER, price INTEGER, ImgUrl TEXT, cathegory TEXT )"
  );
};
function dbQuerry(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}
function dbRun(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err) => {
      if (err) reject(err);
      else resolve(this);
    });
  });
}
export { db, dbQuerry, dbRun, initializedb };
