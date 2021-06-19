function fruitee(){
if(frameCount%20===0){
fruite=createSprite(random(100,1000),0,20,20)
fruite.velocityY=6
rand=Math.round(random(1,5))
switch(rand){
case 1:fruite.addImage(fruit1_img);
break;
case 2:fruite.addImage(fruit2_img);
break;
case 3:fruite.addImage(fruit3_img);
break;
case 4:fruite.addImage(fruit4_img);
break;
case 5:fruite.addImage(fruit5_img);
break;
}

fruitGroup.add(fruite)







    }




}