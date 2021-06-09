import React from "react";
import { Breadcrumb } from "antd";

type Props = {
  breadcrumbText: string[];
};
const DisplayBreadcrumb: React.FC<Props> = ({ breadcrumbText }) => {
  return (
    <Breadcrumb className="breadcrumb">
      {breadcrumbText.map(function (item) {
        return <Breadcrumb.Item>{item}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

export default DisplayBreadcrumb;
