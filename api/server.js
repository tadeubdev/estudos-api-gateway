import express from "express";
import jwt from "jsonwebtoken";
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/hello", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  let userData = null;
  if (token) {
    try {
      userData = jwt.decode(token);
    } catch (err) {
      console.error("JWT error:", err);
    }
  }

  res.json({
    message: "Hello from Node behind NGINX",
    from: "api",
    ip: req.headers["x-real-ip"] || req.ip,
    user: userData || "no-user",
    token: token ? token.substring(0, 10) + "..." : "no token"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on :${port}`));
