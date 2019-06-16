require('mongoose-type-email')

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const contacts = new Schema({
    name: {
      first: {
        type: String,
        required: [true, 'First name required']
      },
      last: {
        type: String,
        required: false
      },
    },
    email: {
      type: mongooseClient.SchemaTypes.Email,
      required: [true, 'Email is required.']
    },
    phone: {
      type: String,
      required: [true, 'Phone number required'],
      validate: {
        validator: function(n) {
          return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(n)
        },
        message: '{VALUE} is not a valid phone number.'
      }
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, {
    timestamps: true
  });

  return mongooseClient.model('contacts', contacts);
};
