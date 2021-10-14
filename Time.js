function isDate(){
    let D = new Date();
    let month = D.getMonth() + 1;
    let date = D.getDate();
    let day = D.getDay();
    let hour = D.getHours();
    let minute = D.getMinutes();
    return (month == 1 && date == 1) || day == 6 || day == 0 || hour < 9 || (hour >= 15 && minute >= 30)
}

function getToDateTime(){
    let D = new Date();
    return `${D.getFullYear()}.${D.getMonth()+1}.${D.getDate()} ${D.getHours()}:${D.getMinutes()}:${D.getSeconds()}`;
}

module.exports = {
    isDate,
    getToDateTime
}
