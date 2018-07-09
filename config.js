import { GraphicEntityModule } from './entity-module/GraphicEntityModule.js'
import { TooltipModule } from './TooltipModule.js'
import { EndScreenModule } from './EndScreenModule.js'
import { AnimModule } from './AnimModule.js'

// List of viewer modules that you want to use in your game
export const modules = [
  GraphicEntityModule,
  TooltipModule,
  EndScreenModule,
  AnimModule
]
