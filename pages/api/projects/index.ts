import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "POST":
      const response = await fetch(`${process.env.BACKEND_API}/projects`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      if (!response.ok) {
        res.status(400).json({ success: false });
      } else {
        res.status(201).json({ success: true });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
