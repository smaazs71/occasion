// utils/formatDate.js

export function formatDate(inputDate) {
    // Define an array of months for easy lookup
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    // Define an array for suffixes for days
    const suffixes = ["th", "st", "nd", "rd"];
  
    // Create a new Date object from the input
    const date = new Date(inputDate);
  
    // Get the day of the week (0-6)
    const dayOfWeek = date.toLocaleString('en-us', { weekday: 'long' });
  
    // Get the day of the month (1-31)
    const dayOfMonth = date.getDate();
  
    // Get the correct suffix based on the day of the month
    const suffix = (dayOfMonth % 10 > 3 && !(dayOfMonth >= 11 && dayOfMonth <= 13)) ? suffixes[0] : suffixes[dayOfMonth % 10];
  
    // Get the month (0-11) and the year
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    // Format the date into the desired format
    return `${dayOfWeek}, ${dayOfMonth}${suffix} ${month} ${year}`;
  }
  