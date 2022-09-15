/*
----------------------------------
            CONDITIONALS 
----------------------------------
1.mening of: < , >, >=,<= ,==,!=,===,
2.mening of &&
3.mening of ||
4.Let say you have x amount of money.If you have more than 80,000 taka, then you buy a pc.
If you have more than 60,000 you will buy a laptop
If you have more than 40,000 you will buy a camera
If you have mote than 20,000 you will buy a  mobile
Otherwise you will buy a ssd*/

var money = 75000;
if( 80000 <= money){
      console.log("Buy a pc");
}
else if( 60000<= money){
      console.log("Buy a laptop");
}
else if( 40000 <= money){
      console.log("Buy a Camera")
}
else if( 20000 <= money){
      console.log("Buy a Mobile")
}
else{
      console.log('Buy a SSD')
}

