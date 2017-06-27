/**
 * Created by sjin on 2017/6/20/.
 */
import React from "react";
import BreadcrumbCustom from "../BreadcrumbCustom";

class MyTest extends React.Component{
  render(){
    return (
      <div className="gutter-example">
        <BreadcrumbCustom first="测试" second="第一个页面" />

      </div>
    )
  }
}

export default MyTest;