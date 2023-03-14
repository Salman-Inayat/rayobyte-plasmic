export const showRadio = (text: string) => {
  if (text.includes('-')) {
    const ind = text.indexOf('-');
    return (
      text.charAt(0).toUpperCase() +
      text.slice(1, ind) +
      '-' +
      text.charAt(ind + 1).toUpperCase() +
      text.slice(ind + 2)
    );
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
};
