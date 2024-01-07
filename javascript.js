function fineresult() {
  let math = document.getElementById("math").value;
  let khmer = document.getElementById("khmer").value;
  let history = document.getElementById("history").value;
  let pum = document.getElementById("pum").value;
  let earth = document.getElementById("earth").value;
  let li = document.getElementById("li").value;
  let english = document.getElementById("english").value;
  let output = document.getElementById("output");


  if (math === "" || khmer === "" || history === "" || pum === "" || earth === "" || li === "" || english === "") {
    alert("សូមបញ្ជូលពិន្ទុអោយបានគ្រប់មុខវិជ្ជា");
  } else {
    if (english <= 25) {
      let x = parseFloat(math) + parseFloat(khmer) + parseFloat(history) + parseFloat(pum) + parseFloat(earth) + parseFloat(li) ;
      if (x > 475) {
        output.textContent = "សូមអភ័យទោសពិន្ទុសរុបទាំងអស់មិនអាចលើសពី 475 បានទេ😒";
      }
      else if (x >= 427 && x <= 475) {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : A";
      }
      else if (x >= 380 && x <= 426) {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : B";
      }
      else if (x >= 332 && x <= 379) {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : C";
      }
      else if (x >= 286 && x <= 331) {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : D";
      }
      else if (x >= 237 && x <= 285) {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : E";
      }
      else {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : F";
      }
    }
    else if (english > 25) {
      let fine_en = parseFloat(english) - 25;
      let x = parseFloat(math) + parseFloat(khmer) + parseFloat(history) + parseFloat(pum) + parseFloat(earth) + parseFloat(li) + parseFloat(fine_en);
      if (x > 475) {
        output.textContent = "សូមអភ័យទោសពិន្ទុសរុបទាំងអស់មិនអាចលើសពី 475 បានទេ😒";
      }
      else if (x >= 427 && x <= 475) {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : A";
      }
      else if (x >= 380 && x <= 426) {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : B";
      }
      else if (x >= 332 && x <= 379) {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : C";
      }
      else if (x >= 286 && x <= 331) {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : D";
      }
      else if (x >= 237 && x <= 285) {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : E";
      }
      else {
        output.textContent = "លិទ្ធផលរបស់អ្នក : ពិន្ទុសរុប : " + x + "  .  និទ្ទេស : F";
      }

    }
  }
}
