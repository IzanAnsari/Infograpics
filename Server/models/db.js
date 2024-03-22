const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  end_year: {
    type: String,
    // required: true
  },
  intensity: {
    type: Number,
    default: null
  },
  sector: {
    type: String,
    default: ""
  },
  topic: {
    type: String,
    default: ""
  },
  insight: {
    type: String,
    default: ""
  },
  url: {
    type: String,
    default: ""
  },
  region: {
    type: String,
    default: ""
  },
  start_year: {
    type: String,
    default: ""
  },
  impact: {
    type: String,
    default: ""
  },
  added: {
    type: String,
    default: ""
  },
  published: {
    type: String,
    default: ""
  },
  country: {
    type: String,
    default: ""
  },
  relevance: {
    type: Number,
    default: null
  },
  pestle: {
    type: String,
    default: ""
  },
  source: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  likelihood: {
    type: Number,
    default: null
  }
});

module.exports = mongoose.model("Data", dataSchema);
