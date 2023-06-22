import MongoDBreq from "../utils/MongoDBreq";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  const result = await MongoDBreq("insertOne", {
    document: {
      text: "Do Ur Job",
    },
  });

  console.log(result);
  res.status(200).json(result);
}
