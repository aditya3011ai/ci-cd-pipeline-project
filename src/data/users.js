// src/data/users.js
let db = [];
let id = 1;

module.exports = {
  getAll: () => db,
  getById: (idVal) => db.find(u => u.id == idVal),
  add: (data) => {
    const user = { id: id++, name: data.name, email: data.email };
    db.push(user);
    return user;
  }
};