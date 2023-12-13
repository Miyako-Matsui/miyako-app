"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ContentRespository = require("./ContentRespository");
var _reactBeautifulDnd = require("react-beautiful-dnd");
require("./SportList.css");
const SportList = () => {
  const [sports, setSports] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const data = localStorage.getItem('sports');
    if (data) {
      setSports(JSON.parse(data));
    } else {
      refreshSports();
    }
  }, []);
  const saveSportsOrder = () => {
    try {
      localStorage.setItem('sports', JSON.stringify(sports));
      window.alert('Sports order saved successfully!');
    } catch (error) {
      window.alert('Error saving sports order. Please try again.');
    }
  };
  const onDragEnd = result => {
    if (!result.destination) return;
    const newList = Array.from(sports);
    const [reorderedSports] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, reorderedSports);
    setSports(newList);
  };
  const refreshSports = async () => {
    try {
      const contentRepository = new _ContentRespository.ContentRepository();
      const allSports = await contentRepository.getFeaturedSports();
      const randomSports = [];
      while (randomSports.length < 3) {
        const randomSport = allSports[Math.floor(Math.random() * allSports.length)];
        if (!randomSports.some(sport => sport.name === randomSport.name)) {
          randomSports.push(randomSport);
        }
      }
      setSports(randomSports);
    } catch (error) {
      console.error('Error refreshing sports:', error);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "button-position"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: refreshSports
  }, "Refresh Sports List")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.DragDropContext, {
    onDragEnd: onDragEnd
  }, /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/_react.default.createElement("div", Object.assign({}, provided.droppableProps, {
    ref: provided.innerRef
  }), sports.map((sport, index) => /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Draggable, {
    key: sport.name,
    draggableId: sport.name,
    index: index,
    className: "Sport-card"
  }, (provided, snapshot) => /*#__PURE__*/_react.default.createElement("div", Object.assign({
    ref: provided.innerRef
  }, provided.draggableProps, provided.dragHandleProps, {
    className: "Sport-card-container"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "Sport-card-container-name"
  }, sport.name), /*#__PURE__*/_react.default.createElement("p", null, sport.description)))), provided.placeholder)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "button-position"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: saveSportsOrder
  }, "Save")));
};
var _default = exports.default = SportList;