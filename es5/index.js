"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fm = require('front-matter');

var getSlug = require('speakingurl');

var tutorials = require.context('../content/', true, /^\.\/.*\.md/);

var TutorialContent =
/*#__PURE__*/
function () {
  function TutorialContent() {
    var _this = this;

    _classCallCheck(this, TutorialContent);

    this.courseSlugs = tutorials.keys().map(function (file) {
      var tutorial = fm(tutorials(file));
      var _tutorial$attributes = tutorial.attributes,
          title = _tutorial$attributes.title,
          ogDescription = _tutorial$attributes.ogDescription,
          ogImage = _tutorial$attributes.ogImage,
          headerImage = _tutorial$attributes.headerImage,
          subtitle = _tutorial$attributes.subtitle,
          date = _tutorial$attributes.date,
          readingTime = _tutorial$attributes.readingTime,
          _tutorial$attributes$ = _tutorial$attributes.tags,
          tags = _tutorial$attributes$ === void 0 ? [] : _tutorial$attributes$,
          published = _tutorial$attributes.published,
          reward = _tutorial$attributes.reward,
          header = _tutorial$attributes.header,
          isVideo = _tutorial$attributes.isVideo,
          objective = _tutorial$attributes.objective;
      _this[getSlug(title)] = {
        title: title,
        slug: getSlug(tutorial.attributes.title),
        ogDescription: ogDescription,
        ogImage: ogImage,
        headerImage: headerImage,
        subtitle: subtitle,
        date: date,
        readingTime: readingTime,
        tags: tags,
        basics: tutorial.attributes.basics ? tutorial.attributes.basics.map(function (basic) {
          return {
            title: basic,
            slug: getSlug(basic)
          };
        }) : [],
        published: published,
        reward: reward,
        header: header,
        content: tutorial.body,
        isVideo: isVideo,
        objective: objective
      };
      return getSlug(title);
    });
  }

  _createClass(TutorialContent, [{
    key: "content",
    get: function get() {
      var _this2 = this;

      return this.courseSlugs.map(function (slug) {
        return _this2[slug];
      });
    }
  }]);

  return TutorialContent;
}();

exports.default = TutorialContent;
module.exports = exports["default"];