function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    //if (counter === 0) return;
    setCounter(counter - 1);
  }

  /* 🌟 [03] - Implement a function called `decrement` here, which decrements the counter state. */

  return (
    <>
      <h1>Exercise 3</h1>
      <div>
        {/* 🌟 [04] - Add an `onClick` to the button below and call the `decrement` function. */}
        {/* 🌟 [05] - We do not allow negative numbers, so disable the decrement button when `counter` is 0. */}
        <button className={styles.btn} onClick={decrement} disabled={counter <= 0}> - </button>
        <span className={styles.counter}>{counter}</span>
        {/* 🌟 [02] - Add an `onClick` to the button below and call the `increment` function. */}
        <button className={styles.btn} onClick={increment}disabled={counter <= 25}> + </button>
      </div>
    </>
  );
}

/* 🌟 [06] - FINISHED! 💯  When clicking the buttons, the counter should decrement or increment. 💯 */
