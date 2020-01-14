class Header extends Component {
  constructor() {
    super();
    console.log("constructor"); //1
  }
  componentWillMount() {
    console.log("component will mount"); //2
  }
  componentDidMount() {
    console.log("component did mount"); //4
  }
  componentWillUnmount() {
    console.log("component will Unmpunt"); //当Header组件在DOM当中销毁的时候调用
  }
  render() {
    console.log("render"); //3
    return (
      <div>
        <h1 className="title">React 小书</h1>
      </div>
    );
  }
}
class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }
  //每隔一秒在dom中更新时间
  componentWillMount() {
    this.time = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
  //当组件隐藏的时候使用componentWillUnmount清除定时器
  componentWillUnmount() {
    clearInterval(this.time);
  }
  render() {
    return (
      <div>
        <h1>
          <p>现在的时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}
class Index extends Component {
  constructor() {
    super();
    this.state = {
      isShowHeader: true
    };
  }
  HandleShowOrHide() {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    });
  }
  render() {
    return (
      <div>
        {this.state.isShowHeader ? <Clock /> : null}
        <button onClick={this.HandleShowOrHide.bind(this)}>显示组件</button>
      </div>
    );
  }
}
export default Index;
