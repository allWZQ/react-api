class LikeButton extends Component {
  constructor() {
    super();
    this.state = { isLiked: false };
  }
  handleClickOnLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    });
    console.log(this.props.onClick);
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    // 子组件用props接收属性 ,如果进行封装这里需要使用this.props.wordings
    const wordings = this.props.wordings || {
      likedText: "取消",
      unlikedText: "点赞"
    };
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? wordings.likedText : wordings.unlikedText}👍
      </button>
    );
  }
}
class Index extends Component {
  render() {
    return (
      <div>
        {/* 父组件在子组件的标签上传值 ,因为wordings被封装,现在已经使用不了*/}
        <LikeButton likedText="已赞" unlikedText="赞" />
        {/* 这里需要两个{} */}
        <LikeButton wordings={{ likedText: "已赞", unlikedText: "赞" }} />
        <LikeButton
          wordings={{ likedText: "赞", unlikedText: "取消" }}
          // 可以往组件内部传入函数作为参数
          onClick={() => console.log("Click on like button!")}
        />
      </div>
    );
  }
}
export default Index;
