export const getFiles = (req, res) => {
  res.json({ status: 'ok', message: "GET files" });
};

export const postFile = (req, res) => {
  console.log(req.body);
  res.json({ status: "ok", message: "POST file" });
};

export const getFile = (req, res) => {
  res.json({ status: 'ok', message: `GET file with id: ${req.params.id}` });
};

export const patchFile = (req, res) => {
    res.json({ status: "ok", message: `PATCH file with id: ${req.params.id}` });
};

export const deleteFile = (req, res) => {
  res.json({ status: "ok", message: `DELETE file with id: ${req.params.id}` });
};
