
exports.up = function(knex) {
    return knex.schema
    // Create your tables here
    .createTable("companies", tbl => {
        tbl.increments();
        tbl
            .string("name", 255)
            .notNullable()
            .unique();
        tbl
            .string("image", 500)
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
            .boolean("elder")
            .notNullable()
            .defaultTo(0);
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("companies")
  
};
