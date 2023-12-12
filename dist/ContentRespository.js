"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentRepository = void 0;
var _Sport = require("./Sport");
class ContentRepository {
  getFeaturedSports() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(_Sport.Sport.createMockedSports());
      }, 100);
    });
  }
}
exports.ContentRepository = ContentRepository;