abstract class CrabInput extends CharacterInput {
    
    public ctrl : CrabController;
    
    public init( controller : CrabController ){
        super.init(controller);
    }
    
    public abstract getLook   () : Sup.Math.Vector2;
    public abstract getArm1   () : IFireInput;
    public abstract getArm2   () : IFireInput;
    public abstract getFire3  () : boolean;
    public abstract getMove   () : Sup.Math.Vector2;
    public abstract getJump   () : boolean;
    public abstract getCrounch() : boolean;
    
}