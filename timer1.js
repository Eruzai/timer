// timer beeps after specified amount(s) of time has passed. entered using command line arguments.
const alarms = process.argv.slice(2);

const validateEntry = function (item) { // validates entry, returning false if NAN or < 0
  if (isNaN(Number(item)) || Number(item) < 0) {
    return false;
  }
}

for (const alarm of alarms) {
  if (validateEntry(alarm) === false) { // if entry isn't valid skip this entry
    continue;
  }

  const entry = Number(alarm) // converts valid entry to a number rather than "9" for example
  const delay = entry * 1000; // converts entry into an amount of miliseconds

  setTimeout(() => { // schedules a beep notification after the delay given by the entry.
    process.stdout.write('\x07');
  }, delay)
}
