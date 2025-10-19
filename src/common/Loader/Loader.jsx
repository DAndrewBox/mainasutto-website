import { LoaderSquare, LoaderWrapper } from './Loader.styles';

export const Loader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  const isMobile = window.innerWidth <= 768;
  const squareSize = window.innerWidth / (isMobile ? 4 : 5);
  const squareCountWidth = window.innerWidth / squareSize;
  const squareCountHeight = 1 + window.innerHeight / squareSize;

  return (
    <LoaderWrapper>
      {[...Array(Math.ceil(squareCountWidth * squareCountHeight))].map((_, index) => (
        <LoaderSquare
          key={`anim-${
            // biome-ignore lint/suspicious/noArrayIndexKey: We know what we're doing here
            index
          }`}
          $delay={Math.ceil(((index + 1) / squareCountWidth) * (isMobile ? 0.5 : 1) + 0.33 * (index % squareCountWidth))}
        />
      ))}
    </LoaderWrapper>
  );
};
