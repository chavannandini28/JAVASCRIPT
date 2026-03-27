// Load value from localStorage
    let count = localStorage.getItem("count");

    if (count === null) {
      count = 0;
    } else {
      count = parseInt(count);
    }

    const countDisplay = document.getElementById("count");
    countDisplay.innerText = count;

    function updateDisplay() {
      countDisplay.innerText = count;
      localStorage.setItem("count", count);
    }

    function increase() {
      count++;
      updateDisplay();
    }

    function decrease() {
      count--;
      updateDisplay();
    }

    function reset() {
      count = 0;
      updateDisplay();
    }