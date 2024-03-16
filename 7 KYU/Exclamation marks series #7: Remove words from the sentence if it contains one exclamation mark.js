function remove(s) {
  return s.split(" ").map(M => M.replace(/(^\w+!$|^!\w+$)/, ""))
    .join(" ").trim().replace(/\s+/g, " ");
}
