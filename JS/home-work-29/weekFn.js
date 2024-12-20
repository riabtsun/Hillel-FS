function weekFn(cond) {
  let str = '';

  switch (cond) {
    case 1:
      str = 'Понеділок';
      break;
    case 2:
      str = 'Вівторок';
      break;
    case 3:
      str = 'Середа';
      break;
    case 4:
      str = 'Четвер';
      break;
    case 5:
      str = "П'ятниця";
      break;
    case 6:
      str = 'Субота';
      break;
    case 7:
      str = 'Неділя';
      break;
    default:
      str = null;
  }

  return str;
}

module.exports = weekFn;
