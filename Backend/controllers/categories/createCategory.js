import category from "#models/category.js";
import User from "#models/user.js";

export const createCategory = async (req, res) => {
  try {
    const { name, description, thumbUrl } = req.body;
    const userId = req.user.id;

    const newCategory = new category({
      name,
      description,
      thumbUrl,
      owner: userId,
    });

    const savedCategory = await newCategory.save();

    const user = await User.findById(userId);
    user.categories.push(savedCategory._id);
    await user.save();

    res.status(201).json({ data: savedCategory });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
