import category from "#models/category.js";

/**
 * DELETE /api/auth/categories/{id}
 *
 * @security BearerAuth
 * @param {string} id.path.required - ID of the category to delete
 * @return {ResponseSchema} 200 - Success, category deleted
 * @return {ResponseSchema} 400 - Error: Bad Request
 * @return {ResponseSchema} 404 - Error: Not Found
 */

export const deleteUserCategory = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const categoryToDelete = await category.findOne({ _id: id, owner: userId });

    if (!categoryToDelete) {
      return res.status(404).json({
        statusCode: 404,
        description: "Category not found or does not belong to the user",
      });
    }

    await category.findByIdAndDelete(id);

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
