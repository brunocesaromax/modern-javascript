class Payment {
    customer = "";
    pay = value => console.log(`Foi pago R$${value} pelo cliente ${this.customer}`);
}

const payment = new Payment();

payment.customer = 'Xarles';
payment.pay(25);
