import {useEffect, FunctionComponent} from 'react'

let withRenderTime = <P extends {}>(
  component: FunctionComponent<P>
): FunctionComponent<P> => {
  const componentName = component.displayName || component.name || "Component"

  const WithRenderTime = (props: P) => {
    const start = new Date().getTime();

    useEffect(() => {
      const millis = new Date().getTime() - start;

      console.log(`${componentName} rendered in ${millis} ms`);
    })

    return component(props) as JSX.Element;
  }

  WithRenderTime.displayName = `withRenderTime(${componentName})`;

  let wrappedComponent = WithRenderTime

  return wrappedComponent as typeof WithRenderTime
}

export default withRenderTime;