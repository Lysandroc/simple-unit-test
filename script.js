const number = 3;
const divideBy = 4;

const fBase = (number, divideBy) => {
  return number % divideBy === 0 ? 'PLIM': number;
}

const fDivideByThreeOrFive = (number, divideBy) => {
  const divisibleIsThreeOrFive = (divideBy === 5 || divideBy === 3);
  return divisibleIsThreeOrFive ? fBase(number, divideBy) : number;
}

const fDivideByThreeAndFive = (number) => {
  let divisibleByThree = fBase(number, 3);
  let divisibleByFive = fBase(number, 5);

  return divisibleByThree==='PLIM' && divisibleByFive==='PLIM' ? 'PLIMPLIM' : number;
}

const fDivideComposed = (number) => {
  let divideByThreeAndFive = fDivideByThreeAndFive(number);
  let divideByThreeOrFive = (fBase(number, 3) === 'PLIM' || fBase(number, 5) === 'PLIM') ? 'PLIM' : number;
  
  if(divideByThreeAndFive === 'PLIMPLIM') {
    return divideByThreeAndFive;
  } else if(divideByThreeOrFive === 'PLIM') {
    return divideByThreeOrFive
  } else {
    return number;
  }
}

const fDivideComposedDivisibleDynamic = (number, xDivisible, yDivisble) => {
  let divideByThreeAndFive = fDivideByThreeAndFive(number);
  let divideByThreeOrFive = (fBase(number, xDivisible) === 'PLIM' || fBase(number, yDivisble) === 'PLIM') ? 'PLIM' : number;
  
  if(divideByThreeAndFive === 'PLIMPLIM') {
    return divideByThreeAndFive;
  } else if(divideByThreeOrFive === 'PLIM') {
    return divideByThreeOrFive
  } else {
    return number;
  }
}

module.exports = { 
  fBase, 
  fDivideByThreeOrFive, 
  fDivideByThreeAndFive,
  fDivideComposed,
  fDivideComposedDivisibleDynamic
};

