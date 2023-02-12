function randomGame() {
  
    function counter() {
        let count = 0;
        return function() {
            return ++count
        }
    }

    const gameCount = counter();

    function num() {
        let randomNum = Math.random();
        if(randomNum > 0.75){
            console.log(gameCount());
             clearInterval(timerId);
        } else {
            gameCount()
        }
    }

    let timerId = setInterval(num, 1000);
}