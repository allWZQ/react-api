class AutoFocusInput extends Component {
  componentDidMount() {
    this.input.focus();
  }
  render() {
    //进入页面自动获取焦点
    return <input ref={inputDom => (this.input = inputDom)} />;
  }
}
export default AutoFocusInput;
