import { GraphicEntityModule } from './entity-module/GraphicEntityModule.js';
import { TooltipModule } from './modules/tooltip/TooltipModule.js';
import { EndScreenModule } from './modules/endscreen/EndScreenModule.js';
import { AnimModule } from './modules/anims/AnimModule.js';

// List of viewer modules that you want to use in your game
export const modules = [
	GraphicEntityModule,
	TooltipModule,
	EndScreenModule,
	AnimModule
];
