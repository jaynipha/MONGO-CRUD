const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const courseRoutes = require('./routes/index')

const app = express();
//mongodb configuration
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }).then(()=>console.log('connected to mongoDb. . .'))
  .catch((err)=>console.log(err.message))



if(app.get('env')==='development'){
    app.use(morgan('tiny'));
};
app.use(express.json());
app.use(helmet());
app.use('/', courseRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`))


