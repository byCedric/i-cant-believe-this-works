export default ({ config }) => {
  return {
    ...config,
    extra: {
      cloudEnv: 'production',
    },
  };
};
