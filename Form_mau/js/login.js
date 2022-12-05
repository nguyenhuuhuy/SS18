// phần login đăng nhập và chuyển tới web bán hàng
let email_login = document.getElementById("email_login").value;
let password_login = document.getElementById("password_login").value;
let dangky_2 = document.getElementById("dangky_2");
let flag = true;
dangky_2.addEventListener("click", function() {
    // console.log(111);
    let getListUser = localStorage.getItem("listUser"); // lấy từ local về thành mảng array
    // console.log(getListUser);
    let check = JSON.parse(getListUser) // chuyển từ array sang object
    // console.log(check);
    for (let i = 0; i < check.length; i++) {
        if(check[i].email == email_login) {
            flag = true;
            break;
        } else {
            flag = false;
        }
        if(flag == false) {
            console.log("sai email");
        } 
    }
});