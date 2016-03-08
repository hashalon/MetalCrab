class PlayerStatus extends PlayerAttribute {
    
    protected maxHealth : number;
    
    public init( controller : PlayerController ){
        super.init(controller);
        
        // we recover the max health of the player
        this.maxHealth = this.ctrl.health;
    }

    public update(){
        // if the player has lost health
        if( this.ctrl.health < this.maxHealth ){
            // he get slowly regen
            this.ctrl.health += this.ctrl.regen;
        }
    }
    
}