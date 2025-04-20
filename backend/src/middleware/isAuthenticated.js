import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) => {
  const { token } = req.cookies;
  console.log("Token from cookie:", token);
  

  if (!token) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.id = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token", success: false });
  }
};
export default isAuthenticated;