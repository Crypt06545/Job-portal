const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    const statusCode = error.statusCode || error.status || 500;
    res.status(statusCode).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export default asyncHandler;
