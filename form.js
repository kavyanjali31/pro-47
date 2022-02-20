class Form{
    constructor(){
        this.input=createInput("").attribute("placeholder","enter your name")
        this.playButton=createButton("play")
        this.titleImg=createImg("","gameTitle")
        this.greeting=createElement("h2")
    }
    setElementsPosition(){
    this.input.position(200,200)
    this.playButton.position(200,300)
    this.titleImg.position(100,50)
    this.greeting.position(100,60)
    }
    setElementsStyle(){
        this.input.class("customInput")
        this.playButton.class("customButton")
        this.titleImg.class("gameTitle")
        this.greeting.class("greeting")
    }
    hide(){
        this.input.hide();
        this.playButton.hide();
        this.greeting.hide();
    }
    handleMousePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide()
            this.playButton.hide()
            var message=`Hello ${this.input.value()}
            </br> wait for another player to join`
            this.greeting.html(message)
            playerCount+=1
            player.name=this.input.value()
            player.index=playerCount
            player.addPlayer()
            player.updateCount(playerCount)
            player.getDistance()
            
        })

    }
    display(){
       this.setElementsPosition();
       this.setElementsStyle();
       this.handleMousePressed();
    }
}