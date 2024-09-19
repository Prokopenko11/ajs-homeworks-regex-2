export default function clearPhone(phone) {
  const symbolToDelete = /[+()-\s]/g;
  let clearedPhone = phone.split(symbolToDelete).join('');

  if ((clearedPhone.length === 11) && (clearedPhone[0] === '8')) {
    clearedPhone = clearedPhone.replace(clearedPhone[0], '7');
  }

  return '+'.concat('', clearedPhone);
}
