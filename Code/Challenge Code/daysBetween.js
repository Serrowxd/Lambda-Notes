function daysBetween (start, end) {
    // convert date into milliseconds
    // subtract start-end
    // return
    return (
        ((Date.parse(end) - Date.parse(start)) / (1000 * 60 * 60 * 24 )).toString() // 1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day.
    );
}