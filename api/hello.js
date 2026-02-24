export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  res.status(200).json({
    message: "Hello from Vercel Cloud!",
    cloud: "Vercel",
    status: "Multi-cloud integration working!"
  });
}
