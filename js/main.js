/* Listen for a keypress; if we press the right key,
then find the matching audio file and play it. If they key doesn't show up on the keyboard, the script shouldn't
do anything. */


(() => {
  console.log("drumkit file loaded");
  //remove the highlight from each element after a key press / trasnsition event

  function removeHighLight(e) {
    console.log(e);
    //if this isnt the transform transition, then quit
    if (e.propertyName !== 'transform') {
      return;
    } else {
      e.target.classList.remove('playing';)
    }
  }

  /*This should be fire every time a key is pushed; do somegthing interesting inside this function*/

  function playSound(e) {
    //debugger;
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');

    // If we pres a key that doesn't have a corresponding audio element, then quit and dont do anything else...
    if (!audio) { return; }
    // rewind any audio files b4 playing
    //console.log(audio);
    audio.play();
    //debugger;

/* Tell the browser to listen for a keypress event */

  }

  window.addEventListener('keydown', playSound);

  //
  const keys = Array.true(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitioned', removeHighLight));

})();
