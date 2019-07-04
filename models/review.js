const db = require("../database/dbconfig");

addReview = (review, user_id) => {
    const reviewData = {
        ...review,
        user_id: user_id
    }
    return db('review').insert(reviewData).where({user_id: user_id})
}

getReviewById = (id) => {
    return db('review').where({user_id: id})
}

module.exports = {
    addReview,
    getReviewById,
}