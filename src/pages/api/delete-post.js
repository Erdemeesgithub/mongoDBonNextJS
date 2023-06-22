import MongoDBreq from "../utils/MongoDBreq";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    res.status(405).end();
    return;
  }
  const { id } = req.query;
  console.log(req.query);

  const result = await MongoDBreq("deleteOne", {
    filter: { _id: { $oid: id } },
  });

  console.log(result);
  res.status(200).json(result);
}
