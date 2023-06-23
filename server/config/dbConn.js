const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI || "mongodb+srv://techNote:amandekate@cluster0.vmwtahb.mongodb.net/techNotesDB?retryWrites=true&w=majority")
    }catch (err) {
        console.log(err)
    }
}

module.exports = connectDB