function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  
  const testString = "Let's have dinner together!";
  
  if (string === string.toLowerCase()) {
    return "I can't hear you!";

  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";

  } else if (string === testString) {
    return "I would love to!";
  }
}