import { headers } from "../../../next.config";

export default async function handler(req, res) {
  const result = await fetch(
    "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-omhrb/endpoint/data/v1/action/find",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key":
          "mVcN9HasgaooVobGpj00LceziEjclyMbox0EpZkKFlwqDPW5KGtaMv6b1wUlmV2y",
      },
      body: JSON.stringify({
        dataSource: "Cluster0",
        database: "postDb",
        collection: "posts",
      }),
    }
  ).then((res) => res.json());

  res.status(200).json(result);
}
