const user = require("./user");
const handler = {
  getOnly: (req, r) => {
    const response = r.response({
      name: req.query.name,
      message: "success",
      data: {
        user : user.map(m => ({name: m.name})),
      },
    });
    return response;
  },

  register: (req, r) => {
    // console.log(req.payload);
    const { email, pass, name } = req.payload;

    const already = user.filter((m) => m.email === email).length > 0;

    if (already) {
      return r
        .response({
          status: "failed",
          message: "email telah digunakan",
        })
        .code(400);
    }
    console.log(pass.length);

    if (pass.length < 8) {
      return r
        .response({
          status: "failed",
          message: "password minimum 8 characters",
        })
        .code(400);
    }

    const newName = name ? name : `User-${Math.floor(Math.random() * 99999)}`;

    user.push({ email, pass, newName });

    const response = r.response({
      status: "success",
      message: "akun berhasil di buat",
    });
    response.code(201);

    return response;
  },
  login: (req, r) => {
    const { email, pass } = req.payload;
    // console.log(req.payload);
    const userData = user.filter((m) => m.email === email)[0];
    if (!userData) {
      return r
        .response({
          message: "failed",
          reason: "email tidak di temukan",
        })
        .code(404);
    }

    if (userData.pass !== pass) {
      return r
        .response({
          message: "failed",
          reason: "kata sandi salah",
        })
        .code(400);
    } else {
      return r
        .response({
          status: "success",
        })
        .code(200);
    }
  },
};

module.exports = handler;
