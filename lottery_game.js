const pickNumberBtn=document.getElementById("pickNumberBtn");
const resultBtn= document.getElementById("result");
const lotterySheetContainer = document.getElementById("lotterySheetContainer");
const tick=new Audio('tap.wav');
const win=new Audio('win.wav');
const gifts =["Headphones","Iphone","Smartwatch","Laptop","Scooter","Earbuds","Speaker","Headset","Smart TV","Drone","Spotify Premium",
    "₹5000 ","PS5","Youtube Premium","Coffee Maker","Robot Vacuum","Perfume","Yoga mat","Sunglasses","Gold Ring",
    "Gold Chain","Kindle eReader","Portable Projector","Custom Sneakers","Designer Handbag","Gold-Plated Pen","Mini Fridge",
    "Electric Bicycle","Lamp","Teddy Bear","Camping Tent","Leather Wallet", "Gold Necklace",
    "Netflix Subscription","Travel Mug","OTT Subscription","Laptop Bag","Board Game Set",
    "Fitness Band", "Massage Gun", "Hoodie", "3D Printer","Wireless Charger","Keychain",
    "Microwave","Air Fryer","Electric Toothbrush","Gaming Chair","Power Bank","Water Bottle"];

pickNumberBtn.addEventListener('click',function(){
    for(let i=1;i<50;i++){
    document.getElementById(i).classList.remove("winningBox");
    }
    resultBtn.innerHTML=`🔮 Picking your lucky gift... <b>What could it be?</b> 🤔`;
  
    let secondsCount=0;
    const intervalId=setInterval(function(){
        tick.pause();
        tick.currentTime=0;
        tick.play();

        secondsCount++;
       const randomBox= Math.floor(Math.random()*50)+1;
       for (let i = 1; i <= 50; i++) {
        if (i === randomBox) {
          document.getElementById(i).classList.add("highlightedBox");
        } else {
          document.getElementById(i).classList.remove("highlightedBox");
        }
      }
    
       if(secondsCount ===6){
        let drawnNumber = Math.floor(Math.random()*50)+1;
        const gift = gifts[drawnNumber - 1]
        resultBtn.innerHTML =`Congratulations!!! 🎉 You got <span style="color:gold;"> ${drawnNumber}</span> ! You've won a <span style="color: gold;">${gift}</span>! 🎁✨`;
        document.getElementById(randomBox).classList.remove("highlightedBox");
        document.getElementById(drawnNumber).classList.add("winningBox");
        win.pause();
        win.currentTime=0;
        win.play();
        clearInterval(intervalId);
    }
    },1000);
});

gifts.forEach(function(value,i){
    const boxElement = `<div class="box" id=${i+1}>${i+1}.${value}</div>`;
    // console.log(boxElement);
    lotterySheetContainer.insertAdjacentHTML("beforeend",boxElement);
});