
exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', review => {
      review.increments()
      review.string('name')
      review.integer('rating')
      review.string('review')
      review.timestamp('created_at').defaultTo(knex.fn.now())
      review
      .string('user_id')
      .unsigned()
      .notNullable()
      .references('firebase_id')
      .inTable('users')
      .unique()
        
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('review')
};
