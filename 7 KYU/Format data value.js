function formatDataValue(data) {
  if (data === 0) return "0MB";
  let tb = 0;
  let gb = 0;
  let mb = 0;
  while (data >= 1000000) {
    tb++;
    data -= 1000000;
  }
  while (data >= 1000) {
    gb++;
    data -= 1000;
  }
  mb = data;
  return `${tb ? tb + "TB" : ""} ${gb ? gb + "GB" : ""} ${
    mb ? mb + "MB" : ""
  }`.trim();
}
