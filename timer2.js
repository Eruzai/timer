const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  process.stdout.write('.');
});


const validateEntry = function(key) { // validates entry, returning false if NAN or not a number between 1 and 9
  if (isNaN(Number(key)) || Number(key) < 0) {
    console.log(`${key} isn't a valid entry. Please input a number between 1 and 9!`)
    return false;
  }
};

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (validateEntry(key)) {
    const entry = Number(key); // converts valid entry to a number rather than "9" for example
    const delay = entry * 1000; // converts entry into an amount of miliseconds

    console.log(`setting timer for ${key} seconds...`)
  
    setTimeout(() => { // schedules a beep notification after the delay given by the entry.
      process.stdout.write('\x07');
    }, delay);
  }
});