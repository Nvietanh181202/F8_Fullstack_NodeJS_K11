const data = [];

// Hàm đăng ký
function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    return "Không đủ thông tin.";
  }

  const user = {
    name: name,
    password: password,
    email: email,
    role: "user",
  };
  data.push(user);
  return user;
}
const dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
console.log("dataRegister =", dataRegister);

const dataRegister1 = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
console.log("dataRegister1 =", dataRegister1);

console.log("data =", data);

//Hàm đăng nhập

function handleLogin(email, password) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === email && data[i].password === password) {
      return data[i];
    }
  }
  console.log("Thông tin đăng nhập không hợp lệ");
}
const dataLogin = handleLogin("nguyenvanb@email.com", "123456");
console.log(dataLogin);
