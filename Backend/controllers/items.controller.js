const { Item } = require('../models');
const { Op } = require('sequelize');

/**
 * @desc   Create a new inventory item
 * @route  POST /api/items
 */
exports.create = async (req, res, next) => {
  try {
    const { name, quantity, supplier, description } = req.body;

    // Validate required fields
    if (!name || !supplier) {
      return res.status(400).json({ message: 'Item name and supplier are required.' });
    }

    // Create new item (default quantity = 0 if not provided)
    const item = await Item.create({
      name,
      quantity: quantity || 0,
      supplier,
      description
    });

    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

/**
 * @desc   Get all items (with optional search by name)
 * @route  GET /api/items?search=keyword
 */
exports.findAll = async (req, res, next) => {
  try {
    const { search } = req.query;

    // Build query condition
    const where = {};
    if (search) {
      where.name = { [Op.like]: `%${search}%` };
    }

    // Fetch all items in ascending ID order
    const items = await Item.findAll({
      where,
      order: [['id', 'ASC']]
    });

    res.json(items);
  } catch (err) {
    next(err);
  }
};

/**
 * @desc   Get single item by ID
 * @route  GET /api/items/:id
 */
exports.findOne = async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    res.json(item);
  } catch (err) {
    next(err);
  }
};

/**
 * @desc   Update an existing item
 * @route  PUT /api/items/:id
 */
exports.update = async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    const { name, quantity, supplier, description } = req.body;

    await item.update({
      name,
      quantity,
      supplier,
      description
    });

    res.json(item);
  } catch (err) {
    next(err);
  }
};

/**
 * @desc   Delete an item
 * @route  DELETE /api/items/:id
 */
exports.delete = async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    await item.destroy();
    res.json({ message: 'Item deleted successfully.' });
  } catch (err) {
    next(err);
  }
};
