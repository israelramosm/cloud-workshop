export const getDocs = (req, res) => {
  res.json({ status: 'ok', message: "GET documents" });
};

export const postDoc = (req, res) => {
  console.log(req.body);
  res.json({ status: "ok", message: "POST document" });
};

export const getDoc = (req, res) => {
  res.json({ status: 'ok', message: `GET document with id: ${req.params.id}` });
};

export const patchDoc = (req, res) => {
    res.json({ status: "ok", message: `PATCH document with id: ${req.params.id}` });
};

export const deleteDoc = (req, res) => {
  res.json({ status: "ok", message: `DELETE document with id: ${req.params.id}` });
};
