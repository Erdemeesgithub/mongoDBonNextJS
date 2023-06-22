import MongoDBreq from "../utils/MongoDBreq";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).end();
    return;
  }
  const result = await MongoDBreq("find", {});

  res.status(200).json(result);
}
