export function isNewPet(date) {
  // Get the current date
  const currentDate = new Date();

  // Calculate the date 7 days ago
  const sevenDaysAgo = new Date(currentDate);
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  // Compare the given date with the date 7 days ago
  return date > sevenDaysAgo;
}
