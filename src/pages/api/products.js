
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.x5fc9ya.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run(req, res) {
//     try {
//         await client.connect();
//         const categoryCollection = client.db("pcbuilder").collection("products");
//         if (req.method === "GET") {
//             const products = await categoryCollection.find({}).toArray();
           
//         } else if (req.method === "GET") {
//             // const products = await categoryCollection.find({}).toArray();
//             res.send({
//                 status: 200,
//                 message: "success",
//                 data: products
//             })
//         }

//     } finally {
//     }
// }


// export default run;


