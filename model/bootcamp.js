const mongoose = require("mongoose");

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add a name"],
  },

  slung: String, 

    description: {
      type: String,
      required: [true, "please add a description"],
      maxlength: [500, "Description cannot be more than 500"],
    },
  

  website: {
    type: String,

    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please enter a valid Url with https",
    ],
  },

  phonenumber: {
    type: String,
    maxlength: [20, "phonenumber must not be less than 15"],
  },
  email: {
    type: String,
    match: [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/],

    address: {
      type: String,
      required: true,
    },
  },

  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
  },
  career: {
    type: [String],
    required: true,
    enum: [
      "web development",
      "Mobile development",
      "Data Science",
      "Business",
      "other",
    ],
  },

  averageRating: {
    type: Number,
    min: [1, "Rating must be at leasst 1"],
    max: [10, "Rating must can not be more than 10"],
  },
  averageCost: {
    type: Number,
  },

  photo: {
    type: String,
    default: "no- photo-jpg",
  },
  housing: {
    type: String,
    default: false,
  },
  jobAssistance: {
    type: String,
    default: false,
  },

  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: String,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
