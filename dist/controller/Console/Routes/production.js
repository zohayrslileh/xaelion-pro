"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,i){void 0===i&&(i=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&("get"in r?t.__esModule:!r.writable&&!r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,i,r)}:function(e,t,a,i){e[i=void 0===i?a:i]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const Path_1=__importStar(require("@/Tools/System/Path")),app_1=__importDefault(require("@/Configs/app")),xaelion_1=__importDefault(require("@/Configs/xaelion")),Json_1=__importDefault(require("@/Tools/System/Json")),path_1=require("path");async function default_1(){var e=(0,path_1.join)("build",app_1.default.version);await(0,Path_1.makedir)(e).clear(),await(0,Path_1.default)("./").ignore([...xaelion_1.default.storagePaths,...xaelion_1.default.depsPaths,...xaelion_1.default.devPaths]).copy(e),(0,Json_1.default)((0,path_1.join)(e,"package.json")).update(e=>({...e,devDependencies:void 0,scripts:e.proScripts,proScripts:void 0})).save(),await(0,Path_1.default)(e).compress((0,path_1.join)("build",app_1.default.version+".zip"),!0),await(0,Path_1.default)(e).clear()}exports.default=default_1;