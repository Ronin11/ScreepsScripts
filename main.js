var memoryManager = require('memory.manager');
var harvesterManager = require('manager.harvester');
var upgraderManager = require('manager.upgrader');
var builderManager = require('manager.builder');

module.exports.loop = function () {
	memoryManager.manage()

	var Spawn = 'Spawn1'
    if(Game.spawns[Spawn].spawning) {
        var spawningCreep = Game.creeps[Game.spawns[Spawn].spawning.name];
        Game.spawns[Spawn].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns[Spawn].pos.x + 1,
            Game.spawns[Spawn].pos.y,
            {align: 'left', opacity: 0.8});
    }
    harvesterManager.manage(Spawn)
	// upgraderManager.manage(Spawn)
	// builderManager.manage(Spawn)
}