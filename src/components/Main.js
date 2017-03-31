require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');
// 获取图片相关信息
var imageDatas = require('../data/imageDatas.json');

// 利用自执行函数，讲图片名信息转化成图片url路径信息
imageDatas = (function getImageUrl (imagesDataArr) {
  for(var i=0;i<imagesDataArr.length;i++){
    var singleImageData = imagesDataArr[i];
    singleImageData.imageURL = require('../images/'+singleImageData[i].fileName);
    imagesDataArr[i]=singleImageData;
  }
  return imagesDataArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="main">
        <section className="img-sec">

        </section>
        <nav className="nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
