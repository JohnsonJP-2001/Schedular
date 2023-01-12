// require("date-format-lite"); // add date format

// class Storage {
//   constructor(Item) {
//     this.Item = Item;
//   }

//   // get events from the table, use dynamic loading if parameters sent
//   async getAll(params) {
//     const result = await this.Item.find();
//     // console.log(result);
//     return result;
//     // return result;
//   }

//   // create new event
//   async insert(data) {
//     const data1 = new this.Item(data);

//     await data1.save();

//     return {
//       action: "inserted",
//       id: String(data1._id),
//     };
//   }

//   // update event
//   async update(id, data) {
//     console.log("id : ", ObjectId(id));
//     console.log("data : ", data);

//     try {
//       await this.Item.findByIdAndUpdate(id, data);
//       console.log(this.Item);
//     } catch (error) {
//       console.log("item not found");
//     }
//     return {
//       action: "updated",
//     };
//   }

//   // delete event
//   async delete(id) {
//     try {
//       await this.Item.findById(id).remove();
//       console.log(id);
//     } catch (error) {
//       console.log("book not found");
//     }
//     return {
//       action: "deleted",
//     };
//   }
// }

// module.exports = Storage;
