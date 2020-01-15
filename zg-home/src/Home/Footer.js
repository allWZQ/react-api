import "./Footer.css";
import React from "react";
import ewm from "../img/cut/首页/二维码.png";
const HelloWorld2 = props => {
  return (
    <div>
      <footer>
        <div className="footer_wrap1">
          <div className="footer_logo">
            <img src={ewm} alt="" />
          </div>
          <div className="footer_box">
            <h1>福建紫迅网络技术有限公司</h1>
            <span>周一至周五 9:00-18:00</span>
            <span>电话：0591-83503067</span>
            <span>地址：福州市鼓楼区桥东路8号立嘉广场西塔9楼</span>
          </div>

          <div className="footer_box">
            <h2>产品服务</h2>
            <a href="1">紫鸟数据魔法</a>
            <a href="1">酷鸟卖家助手</a>
            <a href="1">超级浏览器</a>
          </div>
          <div className="footer_box">
            <h2>关于我们</h2>
            <a href="1">公司简介</a>
            <a href="1">企业文化</a>
            <a href="1">练习我们</a>
          </div>
          <div className="footer_box">
            <h2>加入我们</h2>
            <a href="1">社会招聘</a>
            <a href="1">校园招聘</a>
          </div>
        </div>
        <div className="footer_wrap2">
          <span>
            Copyright @ 2015 - Zixun Tech，All Rights Reserved
            福建紫讯信息科技有限公司 版权所有 备案号：闽ICP备16014564号-8
          </span>
        </div>
      </footer>
    </div>
  );
};
export default HelloWorld2;
