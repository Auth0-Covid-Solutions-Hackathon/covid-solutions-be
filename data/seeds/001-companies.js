
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {id: 1, name: 'Walmart', capacity: 0, distance: 1, masks: 1, home: 0, comments: 'Save Money, Live Better' },
        {id: 2, name: 'Amazon', capacity: 1, distance: 1, masks: 1, home: 1, comments: 'Work hard. Have fun. Make history'}
      ]);
    });
};
