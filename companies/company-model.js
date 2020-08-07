const db = require("../data/db-config.js");
module.exports = {
    getCompanies,
    addcompany
  };

function getCompanies(){
    return db("company")
}
function getCompaniesById(id) {
    return db('company')
    .where({ id })
    .first();
 }

function addcompany(company) {
    return db('company')
    .insert(company, 'id')
    .then(id => {
        return getCompaniesById(id[0]);
    });
 }