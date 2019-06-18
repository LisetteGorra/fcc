function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean); // returns true statements only - filter will run the test
}

console.log(bouncer([7, "ate", "", false, 9, 10, false, true, ""]));