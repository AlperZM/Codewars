function validate(message) {
  return (/^(MDZHB)\s(\d{2})\s(\d{3})\s([A-Z]+?\s(\d{2})\s(\d{2})\s(\d{2})\s(\d{2})$)/gi).test(message)
}
