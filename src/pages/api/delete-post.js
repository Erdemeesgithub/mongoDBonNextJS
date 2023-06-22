import MongoDBreq from "../utils/MongoDBreq";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    res.status(405).end();
    return;
  }
  const result = await MongoDBreq("deleteOne", {
    filter: { _id: { $oid: "649288a1cc8f62c436e9adfa" } },
  });

  console.log(result);
  res.status(200).json(result);
}
