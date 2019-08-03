var roleHarvester = require('role.harvester');

var harvesterId = 'harvester' 
var maxHarvesterCount = 2;
function manage(spawner){
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == harvesterId);
    if(harvesters.length < maxHarvesterCount) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new ' + harvesterId + ': ' + newName);
        Game.spawns[spawner].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: harvesterId}});
    }
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == harvesterId) {
            roleHarvester.run(creep);
        }
    }
}

module.exports = {
	manage: manage,
	harvesterId: harvesterId,
    maxHarvesterCount: maxHarvesterCount
};