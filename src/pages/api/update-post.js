import MongoDBreq from "../utils/MongoDBreq";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    res.status(405).end();
    return;
  }
  const result = await MongoDBreq("updateOne", {
    filter: { _id: { $oid: "649288b5cc8f62c436e9adfb" } },
    update: {
      $set: {
        text: "where are you??",
      },
    },
  });

  console.log(result);
  res.status(200).json(result);
}
