// tutorial.js

var data = [
  {author: "Jackson Wong", text: "This is one comment"},
  {author: "Chris Chan", text: "This is *another* comment"}
];

var converter = new Showdown.converter();
var Comment = React.createClass({displayName: "Comment",
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
      )
      );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("div", {className: "CommentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});

var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    );
  }
});

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.props.data}), 
        React.createElement(CommentForm, null)
      )
      );
  }
});





React.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('content')
  );