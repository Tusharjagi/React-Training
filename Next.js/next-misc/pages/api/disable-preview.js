export default function handler(req, res) {
  res.clearPreviewData({ user: "Tango" });
  res.end("Preview mode disable");
}
