import MongoDBreq from "../utils/MongoDBreq";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    res.status(405).end();
    return;
  }

  const { id } = req.query;
  const { text } = req.body;

  const result = await MongoDBreq("updateOne", {
    filter: { _id: { $oid: id } },
    update: {
      $set: {
        text: text,
      },
    },
  });

  console.log(result);
  res.status(200).json(result);
}
