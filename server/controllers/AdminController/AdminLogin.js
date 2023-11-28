//Login in admin 
const Admin = require("../../models/Admin");

const AdminLogin = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const admin = await Admin.findOne({ username });
  
      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }
  if(admin.password===password){
    res.status(200).json({ message: "Login successful" });
  }else{
    return res.status(401).json({ error: "Invalid password" });
  }
     
  
      
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  module.exports = {AdminLogin };