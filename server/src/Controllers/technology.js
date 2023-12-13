import Technology from '../Models/Technology';

const list = async (req, res) => {
  try {
    const result = await Technology.find();

    if (!result.length) {
      return res.status(404).json({
        message: 'There are no Technologies',
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'List of Technologies',
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
    const result = await Technology.findOne({ _id: req.params.id });
    if (!result) {
      return res.status(404).json({
        message: 'There are no Technologies',
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Technology Found',
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
  try {
    const existingTechnology = await Technology.findOne({
      name: req.body.name,
    });

    if (existingTechnology) {
      return res.status(400).json({
        message: 'The technology already exists',
        data: undefined,
        error: true,
      });
    }

    const newTechnology = await Technology.create(req.body);
    const newTechnologySaved = await newTechnology.save();

    return res.status(201).json({
      message: 'Technology created',
      data: newTechnologySaved,
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
    const updatedTechnology = await Technology.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    return res.status(201).json({
      message: 'Technology updated',
      data: updatedTechnology,
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
    const result = await Technology.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      return res.status(404).json({
        message: 'Technology does not exist',
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Technology deleted',
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
  list,
  findOne,
  create,
  update,
  deleteItem,
};
