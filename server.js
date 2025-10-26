import app from "./app.js";
const PORT = process.env.PORT || 3000; // had to change it to this version to run if error on server //

// middleware to be used last //
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
