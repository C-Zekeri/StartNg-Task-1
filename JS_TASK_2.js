let data = [{principal: 2500, time: 1.8}, {principal: 1000, time: 5}, {principal: 3000, time: 1}, {principal:2000, time: 3}];
function interestCalculator(arr) {
    let interestData = [];
    for (let i=0; i < arr.length; i++){
        let interest = ""
        let rate = 0;
        let principal = arr[i].principal
        let time = arr[i].time
        let allValues = {}
        if (principal>=2500 && time>1 && time<3) {
            rate = 3; 
            function calculate(principal,rate,time) {
            interest = (principal*rate*time)/100;
            allValues = {principal: principal, rate: rate, time: time, interest:interest};
            interestData.push(allValues);
            }
            calculate(principal,rate,time)
        }
        else if (principal>=2500 && time>=3) {
            rate = 4;
            calculate(principal,rate,time)
        }
        else if (principal<2500 || time<=1) {
            rate = 2;
            calculate(principal,rate,time)
        }
        else {
            rate = 1;
            calculate(principal,rate,time)
        }
    }
    console.log(interestData)
    return interestData;
}
interestCalculator(data);
