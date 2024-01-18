const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});

stdin.on('data', (key) => {
  if (key === 'b') { // makes the system beep if key pressed is 'b'
    process.stdout.write('\x07');
  } else if (0 < Number(key) && Number(key) < 10) { // checks if key pressed was 1 to 9
    const entry = Number(key); // converts key to a number rather than "9" for example
    const delay = entry * 1000; // converts entry into an amount of miliseconds

    console.log(`setting timer for ${key} seconds...`);
  
    setTimeout(() => { // schedules a beep notification after the delay given by the entry.
      process.stdout.write('\x07');
    }, delay);
  }
});