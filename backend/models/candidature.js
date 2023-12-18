const mongoose = require('mongoose');

const candidatureSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  telephone: {
    type: Number,
    required: true
  },
  motivation: {
    type: String,
    required: true
  },
  cv: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
 
});

module.exports = candidature = mongoose.model('candidature', candidatureSchema);