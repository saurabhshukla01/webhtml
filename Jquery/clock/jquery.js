var hourHand = document.getElementById('hourhand')
var minuteHand = document.getElementById('minutehand')
var secondHand = document.getElementById('secondhand')

function initClock(){
	var date = new Date();
	var hour = date.getHours()%12;
	var minute = date.getMinutes();
	var second = date.getSeconds();

	var hourDeg = (hour * 30) + (0.5 * minute);
	var minuteDeg = (minute * 6) + (0.1 * second);
	var secondDeg = (hour * 30) + (0.5 * minute);

	hourHand.css.transform = 'rotate(' + hourDeg + deg')';
	minuteHand.css.transform = 'rotate(' + minuteDeg + deg')';
	secondHand.css.transform = 'rotate(' + secondDeg + deg')';

	setTimeout(initClock, 1000);


};
initClock();