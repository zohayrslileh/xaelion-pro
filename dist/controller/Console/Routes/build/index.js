"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const Router_1=__importDefault(require("@/Tools/Console/Router"));exports.default=(0,Router_1.default)(({route:e,index:r})=>{r(()=>require("./all")),e("controller",()=>require("./controller")),e("web",()=>require("./web"))});