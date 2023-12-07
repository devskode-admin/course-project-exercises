/* eslint-disable camelcase */
// eslint-disable-next-line import/no-unresolved
import Professional from '../Models/Professional';

const list = async (req, res) => {
  try {
    const result = await Professional.find(req.query);

    if (!result.length) {
      return res.status(404).json({
        message: 'There are not Professional',
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'List of Professional',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
      data: undefined,
      error: true,
    });
  }
};

const findOne = async (req, res) => {
  try {
    const result = await Professional.findOne({ _id: req.params.id });
    if (!result) {
      return res.status(404).json({
        message: 'There are not Professional',
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Professional Found',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
      data: undefined,
      error: true,
    });
  }
};

const create = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await Professional.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'This email is already in use, try another one.', error: true });
    }
    const newProfessional = await Professional.create(req.body);

    const newProfessionalSaved = await newProfessional.save();

    return res.status(201).json({
      message: 'Professional created',
      data: newProfessionalSaved,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
      data: undefined,
      error: true,
    });
  }
};

const update = async (req, res) => {
  try {
    // eslint-disable-next-line max-len
    const updatedProfessional = await Professional.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.status(201).json({
      message: 'Professional updated',
      data: updatedProfessional,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
      data: undefined,
      error: true,
    });
  }
};

const deleteItem = async (req, res) => {
  try {
    const result = await Professional.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      return res.status(404).json({
        message: 'Professional does not exists',
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Professional deleted',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
      data: undefined,
      error: true,
    });
  }
};

export default {
  create,
  list,
  deleteItem,
  update,
  findOne,
};
