function formatDuration(seconds) {
  // your code here
  var time = seconds;
  var years = Math.floor(time / 31536000);
  var months = Math.floor((time % 31536000) / 2592000);
  var days = Math.floor((time % 2592000) / 86400);
  var hours = Math.floor((time % 86400) / 3600);
  var minutes = Math.floor((time % 3600) / 60);
  var seconds = time % 60;
  var result = [];
  if (years) {
    result.push(years + " year" + (years > 1 ? "s" : ""));
  }
  if (months) {
    result.push(months + " month" + (months > 1 ? "s" : ""));
  }
  if (days) {
    result.push(days + " day" + (days > 1 ? "s" : ""));
  }
  if (hours) {
    result.push(hours + " hour" + (hours > 1 ? "s" : ""));
  }
  if (minutes) {
    result.push(minutes + " minute" + (minutes > 1 ? "s" : ""));
  }
  if (seconds) {
    result.push(seconds + " second" + (seconds > 1 ? "s" : ""));
  }
  if (result.length === 1) {
    return result[0];
  }
  return (
    result.slice(0, result.length - 1).join(", ") +
    " and " +
    result[result.length - 1]
  );
}
