import express from 'express';

import { Hunt } from '../models/hunt';

const create = async (req, res) => {
  const hunt = new Hunt(req.body);
  await hunt.save();

  res.status(200).json(hunt);
};

const read = async (req, res) => {
  const hunts = await Hunt.find().sort('duration');
  res.status(200).json(hunts);
};

const getStanding = async (req, res) => {
  const hunt = await Hunt.findById(req.params.id);
  if (!hunt) return res.status(404).send('Hunt not found');

  const hunts = await Hunt.find().sort('duration');

  hunts.forEach((hunt, index) => {
    if (hunt._id == req.params.id) {
      res.status(200).json(index + 1);
    }
  });
};

module.exports = {
  // auth.routes.js
  create,
  read,
  getStanding,
};
