//event('keydown') => dice.src(++) 
// if side6 -> ++ side1 (Po šestce zobrazte opět jedničku)
//const side index -> src=`side${index}`

const body = document.querySelector('body');
const dice = document.querySelector('.dice');

const diceRoll = () => {
  let srcValue = dice.getAttribute('src');
  const sideIndex = Number(srcValue.slice(-5,-4));

  if(sideIndex === 6) {
    dice.src = `img/side1.svg`
  } else {
    dice.src = `img/side${sideIndex + 1}.svg`
  }
}
body.addEventListener('keydown', diceRoll);


