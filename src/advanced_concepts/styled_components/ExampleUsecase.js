import React from "react";
import styled, { keyframes } from "styled-components";

export function ExampleUsecase() {
  let Title = styled.h4`
    font-size: 2em;
    color: palevioletred;
  `;
  //   let Wrapper = styled.section({
  //     padding: "4em",
  //     backgroundColor: "papayawhip",
  //   });
  let ButtonStyled = styled.button`
    background: ${(props) => (props.primary ? "palevioletred" : "blue")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
  `;

  return (
    <div>
      <Wrapper>
        <Title>Hello From Styled Components!!</Title>
      </Wrapper>
      {/* <AdaptingStyles />
      <AdaptingStyles primary={true} /> */}
      {/* Adapting styles based on props passed down to styled components */}
      <ButtonStyled>Normal</ButtonStyled>
      <ButtonStyled primary>Primary</ButtonStyled>
      <ExtendingStyles />
      <AnyComponent />
      <PassedProps />
      <AdditionalProps />
      <OverridingAttributes />
      <UsingAnimations />
    </div>
  );
}

// Animations, css animations with @keyframes arent scoped to a single component, we can export keyframes which will generate unique instance that we can use throughout our app without any name collision
let UsingAnimations = () => {
    let rotateFrame = keyframes`
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
    `;
    // creating a component that will rotate
    let RotateElement = styled.div`
    display: inline-block;
    animation: ${rotateFrame} 2s linear infinite;
    padding: "2em 1.1em"
    font-size: "2em"
    `;

    return <RotateElement>ohh hello!!</RotateElement>
}

// Overriding Attributes, when wwrapping styled components .attr are applied from innermost to outermost styled component, and this allows sus to override nested uses of .attrs
let OverridingAttributes = () => {
    let InputElement = styled.input.attrs(props => ({
        type: 'text',
        size: props.size || '1.1em'
    }))`
    border: 2px solid palevioletred;
    margin: ${props=>props.size};
    padding: ${props=>props.size};
    `;
    // InputElement's attrs will be applied first and then this attrs object styles
    let PasswordInput = styled(InputElement).attrs({
        type: 'password'
    })`
    // similarly border override styles from InputElement's border, just like as in css would
    border: 2px solid aqua;
    `;

    return(
        <div>
            <InputElement placeholder=" a bigger text input" size="2em" />
            <PasswordInput placeholder=" a bigger password input" size="2em" />
        </div>
    )
}

// Additional Props, by using attrs constructor we can attach more dynamic props to a component, .attrs object takes functions that recieves props that component recieves, returned value will be merged into resulting props as well
let AdditionalProps = () => {
    let InputElement = styled.input.attrs(props => ({
        // we can define static props here
        type: "text",
        // we can also define dynamic props
        size: props.size || '1.1em'
    }))`
        color: palevioletred;
        font-size: 1.1em;
        border: 2px dotted palevioletred
        border-radius: 4px;
        /* we can use dynamically computed prop*/
        margin: ${props => props.size};
        padding: ${props => props.size}
    `;

    return (
        <div>
            <InputElement placeholder="a small text input" />
            <InputElement placeholder="a bigger text input" size="2em" />
        </div>
    )
}

// passed props, if styled as styled.div, it passes thorugh all known HTML attributes in DOM, for custom component, such as styled(someComponent) it passes through all props
// lets look at an example, how all props of input component are passed on to DOM node that is mounted
let PassedProps = () => {
    let InputElement = styled.input`
        padding: '.5em';
        margin: '.5em';
        color: ${props => props.inputColor || 'palevioletred'};
        background: papayawhip;
    `;
    return(
        <div>
            <InputElement defaultValue="what's up?!" />
            <InputElement defaultValue="ohh yeah!!" inputColor="rebeccapurple"/>
        </div>
    )
}

// we can also style any component, as long as we attach paased className prop to a DOM property
let AnyComponent = () => {
    let Link = ({className, children}) => (
        <a className={className}>{children}</a>
    )

    let StyledLink = styled(Link)`
        color: palevioletred;
        font-weight: bold;
    `;

    return (
        <div>
            <Link>Unstyled Link</Link>
            <StyledLink>Styled Link</StyledLink>
        </div>
    )
}

let Wrapper = styled.section({
  padding: "4em",
  backgroundColor: "papayawhip",
});

let ExtendingStyles = () => {
  let ButtonStyled = styled.button({
    color: "paleturquoise",
    fontSize: "2em",
    margin: "1.1em",
    border: "2px dashed palevioletred",
    borderRadius: "4px",
  });

  // extending ButtonStyled from ButtonStyled
  let TomatoButton = styled(ButtonStyled)`
    color: tomato;
    border-color: maroon;
  `;

  // this way can be benficial when we have similar but distinct identical items needs to be styled

  // this can also be used with custom components as well
  let ReversedButton = props => <ButtonStyled {...props} children={props.children.split(" ").reverse()} />
  return (
    <div>
      <ButtonStyled>Normal Styled</ButtonStyled>
      <TomatoButton>Extend Styled</TomatoButton>
      {/* we can also use "as", a.k.a. polymorphic prop to dynamically swap out elements that recieves styles that we intended */}
      <ButtonStyled as="a" href="#">
        Link With Button Styled
      </ButtonStyled>
      <TomatoButton as="a" href="#">
        Link With Extend Styled
      </TomatoButton>
      <TomatoButton as={ReversedButton}>Custom Button With Extend Style On It Reversed</TomatoButton>
    </div>
  );
};




// function AdaptingStyles(props) {
//     let ButtonStyled = styled.button({
//         backgroundColor: `${props=> props.primary ? "palevioletred" : "maroon"}`,
//         // color: props.primary ? "whitesmoke" : "palegoldenrod",
//         color: `${props=>props.primary ? "whitesmoke" : "palegoldenrod"}`,
//         fontSize: "1.1em",
//         padding: ".25em 1em",
//         border: "2px dashed palevioletred",
//         borderRadius: "4px"
//     });
//     return(
//         <div>
//             <ButtonStyled>Normal</ButtonStyled>
//             <ButtonStyled>Primary</ButtonStyled>
//         </div>
//     )
// }
