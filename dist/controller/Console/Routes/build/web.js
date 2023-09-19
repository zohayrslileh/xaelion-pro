"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,o)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t};Object.defineProperty(exports,"__esModule",{value:!0});const Path_1=__importStar(require("@/Tools/System/Path")),Command_1=require("@/Tools/Console/Command"),path_1=require("path"),chalk_1=require("chalk");async function default_1(){console.log((0,chalk_1.bold)("Build web"));var e="source/web",t="dist/web",r=(await(0,Path_1.makedir)(t).clear(),await(0,Command_1.run)({command:"npm run build",directory:e}));if(0!==r)throw new Error("Build error with code "+r);await(0,Path_1.default)((0,path_1.join)(e,"dist")).move(t)}exports.default=default_1;