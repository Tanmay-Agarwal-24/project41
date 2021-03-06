class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
            textSize(30)
            fill("red")
            
            index = index+1;
            x = 100+(index*300)-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;
                
       if(index===player.index){
           textSize(30)
           fill("red")
        text(player.name,x-25,y+25)
        
        
               }
if(keyIsDown(37)){
player.distance+=10
}
if(keyIsDown(39)){
    player.distance-=10
    }
       player.update()     

      
       

        }
        if(player1.isTouching(fruitGroup)){
            player.score+=2
            fruitGroup.destroyEach()
        }
           

        

        
    }

    end(){
       console.log("Game Ended");
    }
}