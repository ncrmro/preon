import * as React from "react";
import HelloWorld from "../HelloWorld";

class Landing extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}

export default Landing;