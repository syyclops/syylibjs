const silentTerminal = () =>
  beforeEach(() => {
    console.error = () => {};
  });

export default silentTerminal;
