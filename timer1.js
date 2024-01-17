// timer beeps after specified amount(s) of time has passed. entered using command line arguments.
const alarms = process.argv.slice(2);

for (const alarm of alarms) {
  const delay = alarm * 1000;
  
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay)
}
