import express from "express";
const app = express();

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from Node behind NGINX",
    from: "api",
    ip: req.headers["x-real-ip"] || req.ip
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on :${port}`));
