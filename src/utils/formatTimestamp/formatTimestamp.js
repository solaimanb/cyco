const formatTimestamp = (timestamp) => {
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - timestamp;

  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const weeksAgo = Math.floor(daysAgo / 7);
  const monthsAgo = Math.floor(daysAgo / 30);
  const yearsAgo = Math.floor(daysAgo / 365);

  if (yearsAgo > 0) {
    return `${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ago`;
  } else if (monthsAgo > 0) {
    return `${monthsAgo} month${monthsAgo === 1 ? '' : 's'} ago`;
  } else if (weeksAgo > 0) {
    return `${weeksAgo} week${weeksAgo === 1 ? '' : 's'} ago`;
  } else if (daysAgo > 0) {
    return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
  } else if (hoursAgo > 0) {
    return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
  } else {
    return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
  }
};

export default formatTimestamp;
