const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: 'A username is required!',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: 'A email is required!',
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Friends'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const User = model('User', UserSchema);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

module.exports = User;
