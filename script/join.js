function chk_form() {
  if (document.getElementById("join_id").value == "") {
    alert("이름을 입력해주세요.");
  }
  if (document.getElementById("join_pw").value == "") {
    alert("비밀번호를 입력해주십시오.");
  }
  if (document.getElementById("join_nb").value == "") {
  }
  if (document.getElementById("join_em").value == "") {
    alert("이메일을 입력해주십시오.");
  }

  document.getElementById("inbox").submit();
  var link = "login.html";
  location.href = link;
}
