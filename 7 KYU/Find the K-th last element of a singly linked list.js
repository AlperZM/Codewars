function getKthLastElement(head, k) {
  let arr = [];
  for(; head; head = head.next) arr.push(head);
  return arr[arr.length - k - 1] || false;
}
