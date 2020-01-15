import React from "react";
import "./Nav.css";
import logo from "../img/cut/首页/紫讯-LOGO.png";
import servelog1 from "../img/cut/首页/紫鸟.png";
import servelog1copy from "../img/cut/首页/紫鸟634拷贝2.png";
import servelog2 from "../img/cut/首页/图层634拷贝.png";
import servelog2copy from "../img/cut/首页/图层634.png";
import servelog3 from "../img/cut/首页/图层647.png";
import servelog3copy from "../img/cut/首页/图层647拷贝.png";
import consult1 from "../img/cut/首页/dongtaiquan.png";
import consult1copy from "../img/cut/首页/dongtaiquan拷贝.png";
import consult2 from "../img/cut/首页/shexiangji-2.png";
import consult2copy from "../img/cut/首页/shexiangji-2拷贝.png";
import about1 from "../img/cut/首页/Contact-User.png";
import aboutcopy1 from "../img/cut/首页/Contact-User拷贝.png";
import about2 from "../img/cut/首页/shu.png";
import about2copy from "../img/cut/首页/shu拷贝.png";
import about3 from "../img/cut/首页/联系(1).png";
import about3copy from "../img/cut/首页/联系(1)拷贝.png";
import join1 from "../img/cut/首页/zhaopin.png";
import join1copy from "../img/cut/首页/zhaopin拷贝.png";
import join2 from "../img/cut/首页/drxx51.png";
import join2copy from "../img/cut/首页/drxx51拷贝.png";
class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="zxlog">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>首页</li>
        </ul>
        <ul>
          <li className="serve">
            产品服务
            <div className="drop_wrap">
              <div className="drop_wrap_n">
                <div className="drop_text3">
                  <img className="prototype" src={servelog1} alt="" />
                  <img className="copy3" src={servelog1copy} alt="" />
                  <span className="text3">菜鸟数据魔方</span>
                </div>
                <div className="drop_text3">
                  <img className="prototype" src={servelog2} alt="" />
                  <img className="copy3" src={servelog2copy} alt="" />
                  <span className="text3">酷鸟卖家助手</span>
                </div>
                <div className="drop_text3">
                  <img className="prototype" src={servelog3} alt="" />
                  <img className="copy3" src={servelog3copy} alt="" />
                  <span className="text3">超级浏览器</span>
                </div>
              </div>
            </div>
          </li>
          <li className="serve">
            咨询中心
            <div className="drop_wrap2">
              <div className="drop_wrap_n">
                <div className="drop_text3">
                  <img className="prototype" src={consult1} alt="" />
                  <img className="copy3" src={consult1copy} alt="" />
                  <span className="text3">公司动态</span>
                </div>
                <div className="drop_text3">
                  <img className="prototype" src={consult2} alt="" />
                  <img className="copy3" src={consult2copy} alt="" />
                  <span className="text3">媒体互动</span>
                </div>
              </div>
            </div>
          </li>
          <li className="serve">
            关于我们
            <div className="drop_wrap">
              <div className="drop_wrap_n">
                <div className="drop_text3">
                  <img className="prototype" src={about1} alt="" />
                  <img className="copy3" src={aboutcopy1} alt="" />
                  <span className="text3">公司简介</span>
                </div>
                <div className="drop_text3">
                  <img className="prototype" src={about2} alt="" />
                  <img className="copy3" src={about2copy} alt="" />
                  <span className="text3">企业文化</span>
                </div>
                <div className="drop_text3">
                  <img className="prototype" src={about3} alt="" />
                  <img className="copy3" src={about3copy} alt="" />
                  <span className="text3">联系我们</span>
                </div>
              </div>
            </div>
          </li>
          <li className="serve">
            加入我们
            <div className="drop_wrap2">
              <div className="drop_wrap_n">
                <div className="drop_text3">
                  <img className="prototype" src={join1} alt="" />
                  <img className="copy3" src={join1copy} alt="" />
                  <span className="text3">社会招聘</span>
                </div>
                <div className="drop_text3">
                  <img className="prototype" src={join2} alt="" />
                  <img className="copy3" src={join2copy} alt="" />
                  <span className="text3">校园招聘</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
