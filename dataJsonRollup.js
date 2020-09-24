export default () => {
  return {
    name: "data.json-loader",
    transform(json, id) {
      if (id.slice(-5) !== ".json") {
        return null;
      }

      try {
        return {
          code: `export default ${json};`,
          map: { mappings: "" },
        };
      } catch (err) {
        const message = "Could not parse JSON file";
        const position = parseInt(/[\d]/.exec(err.message)[0], 10);
        this.warn({ message, id, position });
        return null;
      }
    },
  };
};
