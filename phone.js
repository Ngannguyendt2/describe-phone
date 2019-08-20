let Mobile = function (name, battery) {
    const minbattery = 10;
    this.name = name;
    this.battery = battery;
    this.message = '';
    this.inbox = [];
    this.outbox = [];
    this.status = false;
    this.setBattery = function (battery) {
        this.battery = battery;
    };

    this.getBattery = function () {
        return this.battery;
    };

    this.decreaseEnergy = function () {
        if (this.battery > 0) {
            this.battery--;
        }
    };

    this.chargebattery = function () {
        this.battery++;
        alert(this.name + ' charging' + this.battery);

    };

    this.writeMsg = function (msg) {
        this.message = msg;
    };

    this.sendMsg = function (mobile) {
        if (this.status) {
            this.outbox.push(this.message);
            mobile.inbox.push(this.message);
        } else {
            alert(this.name + " turned off");
        }
        this.decreaseEnergy();
    };

    this.turnOnphone = function () {
        if (this.getBattery() >= minbattery) {
            alert(this.name + " is turn on");
        } else {
            alert(this.name + " is turn on but low battery");
        }
        this.decreaseEnergy();
        this.status = true;
    };

    this.turnOffphone = function () {
        alert(this.name + " is turn off");
        this.status = false;
    };

    this.checkOnOff = function () {
        if (this.status) {
            alert(this.name + " had being turn on");
        } else {
            alert(this.name + " had being turn off");
        }
        this.decreaseEnergy();
    };

}

let iphone = new Mobile("Iphone", 100);
let nokia = new Mobile("Nokia", 100);

function sendMessage(mobile1,mobile2) {
    mobile1.sendMsg(mobile2);
    display(mobile1);
    display(mobile2);
}
function display(mobile) {
    document.getElementById("inbox"+mobile.name).innerHTML = mobile.inbox;
    document.getElementById("outbox"+mobile.name).innerHTML = mobile.outbox;
    document.getElementById("message"+mobile.name).value = "";
}

