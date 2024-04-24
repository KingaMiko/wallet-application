import Category from "#models/category.js";
import User from "#models/user.js";

/**
 * DELETE /api/categories/{id}
 * @tags Categories
 * @security BearerAuth
 * @param {string} id.path.required - ID of the category to delete
 * @return {ResponseSchema} 200 - Success, category deleted
 * @return {ResponseSchema} 400 - Error: Bad Request
 * @return {ResponseSchema} 404 - Error: Not Found
 */

export const deleteUserCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const categoryToDelete = await Category.findOne({ _id: id }).lean();

    if (!categoryToDelete) {
      return res.status(404).json({
        statusCode: 404,
        description: "Category not found or does not belong to the user",
      });
    }

    await Category.findByIdAndDelete(id);

    const user = req.user;
    let categories;

    req.user.categories = categories = user.categories.filter(
      (cid) => cid !== id
    );

    await User.findByIdAndUpdate(user.id, { categories });

    return res.status(200).json({
      statusCode: 200,
      description: "Category successfully deleted",
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
