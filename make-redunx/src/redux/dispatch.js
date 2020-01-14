const appState = {
  title: {
    text: "React.js 小书",
    color: "red"
  },
  content: {
    text: "React.js 小书内容",
    color: "blue"
  }
};

function renderApp(appState) {
  renderTitle(appState.title);
  renderContent(appState.content);
}
function renderTitle(title) {
  const titleDOM = document.getElementById("title");
  titleDOM.innerHTML = title.text;
  titleDOM.style.color = title.color;
}
function renderContent(content) {
  const contentDOM = document.getElementById("content");
  contentDOM.innerHTML = content.text;
  contentDOM.style.color = content.color;
}

function dispatch1(action) {
  switch (action.type) {
    case "UPDATE_TITLE_TEXT":
      appState.title.text = action.text;
      break;
    case "UPDATE_TITLE_COLOR":
      appState.title.color = action.color;
      break;
    default:
      break;
  }
}
function dispatch2(action) {
  switch (action.type) {
    case "UPDATE_TITLE_TEXT":
      appState.content.text = action.text;
      break;
    case "UPDATE_TITLE_COLOR":
      appState.content.color = action.color;
      break;
    default:
      break;
  }
}

renderApp(appState); //首次渲染

dispatch2({ type: "UPDATE_TITLE_TEXT", text: "react 小书" });
dispatch2({ type: "UPDATE_TITLE_COLOR", color: "red" });
renderApp(appState); //再次渲染
