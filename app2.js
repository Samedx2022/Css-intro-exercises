function countDown(index) {
  let clock = setInterval(function () {
    index--;
    if(index <= 0) {
      clearInterval(clock);
      console.log("Done!");
    } else {
      console.log(index);
    }
  }, 1000)
}
