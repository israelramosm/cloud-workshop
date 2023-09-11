export const getServer = (req, res) => {
  res.json({ status: 'ok', message: "GET server" });
};

export const postServer = (req, res) => {
  res.json({ status: 'ok', message: "POST server" });
};
