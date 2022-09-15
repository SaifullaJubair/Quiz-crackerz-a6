function publicBusFare(people){
      const busCapacity = 50;
      const microBusCapacity = 11;
      const reminderBus = people % busCapacity;
      const reminderMicrobus = reminderBus % microBusCapacity;
      const localBusFare= reminderMicrobus * 250;
      return localBusFare;


}

const price = publicBusFare(227);
console.log( price)