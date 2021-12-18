function hey(message) {
  // Code here
  if (message.trim() === "") {
    return "Fine. Be that way!";
  } else if (message.trim().toUpperCase() === message.trim()) {
    return "Whoa, chill out!";
  } else if (message.trim().endsWith("?")) {
    return "Sure.";
  } else {
    return "Whatever.";
  }
}
