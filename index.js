/**
 *
 * @param {number} startHour
 * @param {number} endHour
 * @author Pedro Oliveira
 */
export const generateHours = (startHour = 9, endHour = 18) => {
  let listHour = [];

  for (let hour = startHour; hour < endHour; hour++) {
    let textHour = `0${hour}`.substr(-2);
    listHour.push(generateMinutesForHour(textHour));
  }

  return listHour.reduce(
    (previousValue, currentValue) => [...previousValue, ...currentValue],
    []
  );
};

/**
 *
 * @param {number} hour number
 * @param {object} param1 options
 * @author Pedro Oliveira
 */
function generateMinutesForHour(hour, { intervalBetweenMinutes = 30, maxMinute = 30 } = {}) {
  let listHourWithMinutes = [];

  for (let minute = 0; minute <= maxMinute; minute += intervalBetweenMinutes) {
    const textMinute = `0${minute}`.substr(-2);
    listHourWithMinutes.push(`${hour}:${textMinute}`);
  }

  return listHourWithMinutes;
}
