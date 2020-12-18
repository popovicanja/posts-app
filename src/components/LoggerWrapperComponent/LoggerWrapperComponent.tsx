import React, { useContext, useEffect } from "react";
import PostsContext from "../../contexts/post-context";

interface WrappedComponentProps {
  [key: string]: any;
}
const LoggerWrapperComponent = (InnerComponent: any) => {
  const InnerComponentWithLog: React.FC<WrappedComponentProps> = ({
    ...props
  }) => {
    const { logger } = useContext(PostsContext);
    useEffect(() => {
      logger && logger(InnerComponent.name);
    });
    return <InnerComponent {...props} />;
  };

  return InnerComponentWithLog;
};

export { LoggerWrapperComponent };
