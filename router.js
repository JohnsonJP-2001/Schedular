// function callMethod(method) {
//   return async (req, res) => {
//     let result;
//     console.log(req);
//     try {
//       result = await method(req, res);
//     } catch (e) {
//       result = {
//         action: "error",
//         message: e.message,
//       };
//     }

//     res.send(result);
//   };
// }

// module.exports = {
//   setRoutes(app, prefix, storage) {
//     app.get(
//       `${prefix}`,
//       callMethod((req) => {
//         return storage.getAll(req.query);
//       })
//     );

//     app.post(
//       `${prefix}`,
//       callMethod((req) => {
//         console.log(req);
//         return storage.insert(req.body);
//       })
//     );

//     app.put(
//       `/events/:id`,
//       callMethod((req) => {
//         return storage.update(req.params.id, req.body);
//       })
//     );

//     app.delete(
//       `${prefix}/:id`,
//       callMethod((req) => {
//         return storage.delete(req.params.id);
//       })
//     );
//   },
// };
