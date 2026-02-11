const express = require("express");
const app = express();

const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const contactUsRoute = require("./routes/ContactUs");
const courseRoute = require("./routes/Course");
const paymentRoute = require("./routes/Payment");
const profileRoute = require("./routes/Profile");
const userRoute = require("./routes/User");
require("dotenv").config();

//load config from file
const PORT = process.env.PORT || 4000;

//connect to the database
database.connect();

//connect to the cloudinary
cloudinaryConnect();

//cookie parser middleware
app.use(cookieParser());

//express middleware
app.use(express.json());

//fileupload middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  }),
);

//cors middleware
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

//mount all api routes
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/profile", profileRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/reach", contactUsRoute);

//send a response for server running
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is running......",
  });
});

//server activate
app.listen(PORT, () => {
  console.log(`App is listing at ${PORT}`);
});
