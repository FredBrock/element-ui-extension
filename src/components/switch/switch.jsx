export const ESwitch = {
  name: "ESwitch",
  functional: true,
  render(h) {
    const switchProps = {
      props: {
        shwo: true,
      },
    };
    return <div {...switchProps}>switch</div>;
  },
};
