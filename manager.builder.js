var roleBuilder = require('role.builder');

var builderId = 'builder' 
var maxBuilderCount = 3;
function manage(spawner){
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == builderId);
    if(builders.length < maxBuilderCount) {
        var newName = 'Builder' + Game.time;
        console.log('Spawning new ' + builderId + ': ' + newName);
        Game.spawns[spawner].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: builderId}});
    }
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == builderId) {
            roleBuilder.run(creep);
        }
    }
}

module.exports = {
	manage: manage,
	builderId: builderId,
    maxBuilderCount: maxBuilderCount
};