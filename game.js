class Game{
    constructor(){
    }
    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on('value',function(data){
            gameState=data.val()
        })
    }
    update(state){
    database.ref('/').update({
        gameState:state
    })

    
    }
    start(){
    form=new Form()
    form.display()
    player=new Player()
    playerCount=player.getCount()
    bike1=createSprite(300,300)
    bike1.addImage("bike1",bike1_img)
    bike2=createSprite(100,100)
    bike2.addImage("bike2",bike2_img)
    bikes=[bike1,bike2]
    }
    handleElements(){
    form.hide();
    form.titleImg.position(40,50)
    }
    play(){
        this.handleElements()
        Player.getPlayersInfo()
        if(allPlayers!==undefined){
            image(track,0,-height*5,width,height*6)
            var index=0;
            for(var plr in allPlayers){
                index=index+1
                var x=allPlayers[plr].positionX
                var y=height-allPlayers[plr].positionY
                if(index===player.index){
              stroke(10)
              fill("red")
              ellipse(x,y,60,60)
              camera.position.x=bikes[index-1].position.x
              camera.position.y=bikes[index-1].position.y
                }
            }
            this.handlePlayersControls()

            
            drawSprites()
            
        }
    }
    handlePlayersControls(){
        if(keyIsDown(UP_ARROW) ){
            player.positionY+=10
            player.update()
        }
    }
}
