import Category from "#models/category.js";

/**
 * GET /api/categories/{id}
 * @tags Categories
 * @security BearerAuth
 * @param {string} id.path.required - ID of the category to retrieve
 * @return {ResponseSchema} 200 - Success, returns the category
 * @return {ResponseSchema} 400 - Error: Bad Request
 * @return {ResponseSchema} 404 - Error: Not Found
 */

export const getUserCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const categoryToGet = await Category.findOne({ _id: id }).lean();

    if (!categoryToGet) {
      return res.status(404).json({
        statusCode: 404,
        description: "Category not found",
      });
    }

    const result = await Category.findById(id);

    const user = req.user;
    let categories;

    req.user.categories = categories = user.categories.filter(
      (cid) => cid !== id
    );

    return res.status(200).json({
      statusCode: 200,
      description: "Success",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      description: error.message,
    });
  }
};
