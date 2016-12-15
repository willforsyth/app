import { Mongo } from 'meteor/mongo';
export const AccountList = new Mongo.Collection('accounts');


// db.users.insert({
//   "FirstName":"Bruce",
//   "secondName":"Keen",
//   "address":{
//     "house":"249",
//     "street":"Heaton Road",
//     "city":"Newcastle Upon Tyne",
//     "country":"UK"
//   },
//     "email":"willforsyth01@gmail.com",
//     "role": "User",
//     "item": {
//       "id": "2",
//       "category" : "sneakers",
//       "subCategory": "Nike",
//       "title": "NikeLab Air Force 1's",
//       "releaseDate": "24/03/84",
//       "description": "The tan pair from the recent NikeLab Air Force 1 Mid pack has a spiritual successor of sorts in this Air Force 1 Low that was just revealed by NikeLab. The materials on the shoe don't appear to be quite the same – it looks like this one doesn't have the tumbled leather or rolled edges – but the tonal colorway and new outsole are there. It's unclear if this Nike Air Force 1 Low will be part of a large pack like the aforementioned Mids, but don't be surprised if that ends up being the case.",
//       "price" : "299",
//       "swap" : true,
//       "offer" : true,
//       "thumbnail" : "https://unsplash.it/400/400/?random",
//       "imageone" : "https://unsplash.it/800/800/?random",
//       "imageone" : "https://unsplash.it/800/800/?random",
//       "messages": {
//         "message": {
//           "id": "1",
//           "read": false,
//           "content": "Hello are you open to offers?"
//         },
//         "message": {
//           "id": "1",
//           "read": true,
//           "content": "Hello are you open to offers?"
//         }
//       }
//     },
//       "notifications": {
//         "notification": {
//           "id": "1",
//           "read": false,
//           "content": "Your account is active"
//       }
//     }
//   });
