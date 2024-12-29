let text =
  'А ви знали, що за перше місце надається знижка 3 000 ₴ на наступний курс?';

const nonDigits = text.match(/\W/gi).join('');
console.log(nonDigits);
