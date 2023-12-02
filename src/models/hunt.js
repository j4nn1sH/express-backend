import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: [
    {
      name: String,
      kitchen: String,
    },
  ],
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const Hunt = mongoose.model('Hunt', schema);

module.exports = {
  Hunt,
};
