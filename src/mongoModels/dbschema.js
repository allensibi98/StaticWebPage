const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    search: String
});

const Search = mongoose.model('Search', userSchema);

module.exports = Search;