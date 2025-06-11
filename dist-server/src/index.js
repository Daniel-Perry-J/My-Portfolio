const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "auth-token");
  next();
}
);

const data = [];

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.get("/api/signup", (req, res) => {
  res.send("Sign up endpoint");
});
app.delete("/api/signup", (req, res) => {
    const { email } = req.body;

    const userIndex = data.findIndex((user) => user.email === email);

    if (userIndex === -1) {
        return res.status(404).send("User not found");
    }

    data.splice(userIndex, 1);

    res.status(200).send("User deleted successfully");
});
app.post("/api/signup", async (req, res) => {
  const { email, password, firstName, lastName, phoneNumber, designation } = req.body;

  const user = data.find((user) => user.email === email);

  if (user) {
    return res.status(400).send("User already exists");
  }

  if (!email || !password || !firstName || !lastName || !phoneNumber || !designation) {
    return res.status(400).send("Please fill all the fields");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { email, password: hashedPassword, firstName, lastName, phoneNumber, designation }; 

  data.push(newUser);

  res.status(201).send({message: "Sign up successful"});
});

app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email and password required");
    }
    
    const user = data.find((user) => user.email === email);
    
    if (!user) {
        return res.status(401).send("User not found");
    }
    
    const validPassword = await bcrypt.compare(password, user.password);
    
    if (!validPassword) {
        return res.status(401).send("Invalid password");
    }
    
    const token = jwt.sign({ email }, process.env.TOKEN_SECRET || "secret", { expiresIn: "1h" });
    
    res.status(200).header("auth-token", token).send({
        message: "Login Successful",
        token: token,
        user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            designation: user.designation,
            password: user.password /* should be hashed and salted */
        }
    });
});