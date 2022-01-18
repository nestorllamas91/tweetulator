const getLayout = (viewportWidth: number, viewportHeight: number) => {
  let layout = 0;
  if (viewportWidth < 640) {
    layout = 1;
  } else if (viewportWidth < 1024) {
    if (viewportWidth / viewportHeight > 1) {
      layout = 2;
    } else {
      layout = 3;
    }
  } else {
    layout = 4;
  }
  return layout;
};

const getDateFormatted = (dateString: string) => {
  const tweetCreationDate = new Date(dateString);
  const year = tweetCreationDate.getFullYear();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[tweetCreationDate.getMonth()];
  const day = tweetCreationDate.getDate();
  const dateHour = tweetCreationDate.getHours();
  const hour = (dateHour < 10 ? "0" : "") + dateHour;
  const dateMinute = tweetCreationDate.getMinutes();
  const minute = (dateMinute < 10 ? "0" : "") + dateMinute;

  return { year, month, day, hour, minute };
};

export { getDateFormatted, getLayout };
