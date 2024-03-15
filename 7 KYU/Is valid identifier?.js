function isValid(idn) {
return (/^[a-z$_][\w$_\d]{0,}$/i).test(idn)
}
