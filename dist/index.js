"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHours = void 0;

/**
 *
 * @param {number} startHour
 * @param {number} endHour
 * @author Pedro Oliveira
 */
var generateHours = function generateHours() {
  var startHour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;
  var endHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  var listHour = [];

  for (var hour = startHour; hour < endHour; hour++) {
    var textHour = `0${hour}`.substr(-2);
    listHour.push(generateMinutesForHour(textHour));
  }

  return listHour.reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
};
/**
 *
 * @param {number} hour number
 * @param {object} param1 options
 * @author Pedro Oliveira
 */


exports.generateHours = generateHours;

function generateMinutesForHour(hour) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$intervalBetweenM = _ref.intervalBetweenMinutes,
      intervalBetweenMinutes = _ref$intervalBetweenM === void 0 ? 30 : _ref$intervalBetweenM,
      _ref$maxMinute = _ref.maxMinute,
      maxMinute = _ref$maxMinute === void 0 ? 30 : _ref$maxMinute;

  var listHourWithMinutes = [];

  for (var minute = 0; minute <= maxMinute; minute += intervalBetweenMinutes) {
    var textMinute = `0${minute}`.substr(-2);
    listHourWithMinutes.push(`${hour}:${textMinute}`);
  }

  return listHourWithMinutes;
}