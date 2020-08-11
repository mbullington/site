declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "scrollto-with-animation" {
  const func: Function
  export default func
}