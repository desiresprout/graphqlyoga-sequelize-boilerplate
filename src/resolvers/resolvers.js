const { User, Book, Room} = require('../models');

const resolvers = {
  Query: {
    getuser: (_, { user_id }) => User.findOne({ where : user_id }),
    //setbook: (_, { user_id, room_id, time }) => 
    },
     
};


export default resolvers;
