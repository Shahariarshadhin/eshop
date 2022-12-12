import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rahat Khan",
    email: "rahat@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jakir Khan",
    email: "jakir@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
