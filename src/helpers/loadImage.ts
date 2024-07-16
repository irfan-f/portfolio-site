const importImage = async (imageName: string): Promise<any> => {
  const image = await import(`../photos/${imageName}`);
  return {
    src: image.default.src,
    srcSet: image.default.srcSet,
  };
};

export default importImage;