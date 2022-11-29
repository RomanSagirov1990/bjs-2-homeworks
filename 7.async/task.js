class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, сallback, id) {
        if (!id) {
            throw new Error('Error: невозможно индетифицировать будильник. Параметр id не передан')
        }
        if (this.alarmCollection.some(el => el.id === id)) {
            console.error(`Будильник с таким id ${id} уже существует`);
            return;
        };
        this.alarmCollection.push({ id, time, сallback })
    }
    removeClock(id) {
        if (this.alarmCollection.some(el => el.id === id)) {
            this.alarmCollection.splice(this.alarmCollection.findIndex(el => el.id === id), 1)
            return true
        } else return false
    }
    getCurrentFormattedTime() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }
        let mins = date.getMinutes();
        if (mins < 10) {
            mins = '0' + mins;
        }
        let output = 'h:m'.replace('h', hours).replace('m', mins)
        return output;
    }
    start() {
        let checkAlarm = (checkClock) => {
            let alarm = this.getCurrentFormattedTime();
            if (checkClock.time === alarm) {
                return checkClock.сallback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(el => checkAlarm(el)), 1000);
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(el => console.log(`Будильник №${el.id} заведен на ${el.time}`));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}