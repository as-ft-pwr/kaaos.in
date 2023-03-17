<div class="container">
  <!-- <div class="inner">2023.06.11</div> -->
  <div class="inner">11.06.2023<br />SYDNEY</div>
</div>

<style>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28vw;
    user-select: none;
    letter-spacing: -0.5vw;
    background-color: black;
    background: red;
    animation: blinkingBackground 0.05s infinite;
  }

  .inner {
    opacity: 1;
    /* animation: blinkingOpacity 0.1s infinite; */
    text-align: center;
    line-height: 0.7em;
    color: #0000ff;
    mix-blend-mode: exclusion;
  }

  @keyframes blinkingBackground {
    50% {
      background-color: white;
    }
  }

  @keyframes blinkingOpacity {
    50% {
      color: #ffff00;
    }
  }
</style>
