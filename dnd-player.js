
function DnD_Player(user, plrClass)
{
  this.user = user;
  this.playerClass = plrClass;
  this.stats = plrClass.statsBase;
  this.moves = plrClass.movesStarter;
  this.useMove = function(move, target)
  {
    if(this.canUseMove(move))
    {
      move.Resolve(this, target);
    }
  }
  this.level = 1;
  this.upgrades = 0;
  this.inventory = {
    
  }
  //...
}
