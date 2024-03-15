function histogram(results) {
  return `6|${"#".repeat(results[5])}${results[5] > 0 ? " " + results[5] : ""}\n5|${"#".repeat(results[4])}${results[4] > 0 ? " " + results[4] : ""}\n4|${"#".repeat(results[3])}${results[3] > 0 ? " " + results[3] : ""}\n3|${"#".repeat(results[2])}${results[2] > 0 ? " " + results[2] : ""}\n2|${"#".repeat(results[1])}${results[1] > 0 ? " " + results[1] : ""}\n1|${"#".repeat(results[0])}${results[0] > 0 ? " " + results[0] : ""}\n`;
}
