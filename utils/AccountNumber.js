function generateAccountNumber() {
    const timestamp = new Date().getTime(); // Get current timestamp
    const uniqueNumber = String(timestamp).slice(-12); // Use the last 12 digits of the timestamp
    return uniqueNumber;
  }
  
module.exports = {generateAccountNumber}