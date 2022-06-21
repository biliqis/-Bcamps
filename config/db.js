const mongoose = require('mongoose');
const connectDB = async () => {
	try {
	await mongoose.connect(process.env.ATLAS_CONNECTION_STRING || "");
		console.log("Connected to DB" .green	);
	} catch (e) {
		throw e;
	}
};

module.exports = connectDB;