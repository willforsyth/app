import { Mongo } from 'meteor/mongo';

export const UserList = new Mongo.Collection('users', {idGeneration: 'STRING'});


// db.users.insert({"FirstName":"Will","SecondName":"Forsyth","Address":{"house":"249","street":"Salters Road","city":"Newcastle Upon Tyne","Country":"UK" },"Email":"willforsyth01@gmail.com","Role":{"User", "Admin"},{idGeneration: 'STRING'}});
