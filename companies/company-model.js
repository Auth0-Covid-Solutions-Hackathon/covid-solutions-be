const db = require("../data/db-config.js");
module.exports = {
    getCompanies,
    addcompanies
  };

function getCompanies(){
    return db("companies")
}
function getCompaniesById(id) {
    return db('companies')
    .where({ id })
    .first();
 }

function addcompanies(companies) {
    return db('companies')
    .insert(companies, 'id')
    .then(id => {
        return getCompaniesById(id[0]);
    });
 }