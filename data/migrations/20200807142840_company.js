
exports.up = function(knex) {
    return knex.schema
    // Create your tables here
    .createTable("company", tbl => {
        tbl.increments();
        tbl
            .string("name", 255)
            .notNullable()
            .unique();
        tbl
            .boolean('capacity')
            .notNullable()
            .defaultTo(0);
        tbl
            .boolean('distance')
            .notNullable()
            .defaultTo(0);
        tbl
            .boolean('masks')
            .notNullable()
            .defaultTo(0);
        tbl
            .boolean('home')
            .notNullable()
            .defaultTo(0);
        tbl
            .string("comments", 255)
            .notNullable()
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("company")
  
};
