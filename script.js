// function printStars(count) {
//   let str = '';
//   let i, j;

//   for(i = 1; i <= count; i++) {
//     for(j = 1; j <= i; j++) {
//       str += '*';
//     }
//     str += '\n';
//     // console.log(str);
//   }
//   console.log(str);
// }
// printStars(5);
// 請參考 printStars，
// 並完成 printStars2，使其執行時結果如圖： https://imgur.com/56BptSu
function printStars2(count) {
  let str = '';
  let blank = '';
  let i, j, k;
  for(i = 1; i <= count; i++){
    for(k = 1; k<=(count-i); k++){
      blank += " "
    }
    for(j=1; j <= i; j++){
      str += "*"
    }
    blank += str + '\n'
    str = ""
  }
  console.log(blank)

}
printStars2(5);