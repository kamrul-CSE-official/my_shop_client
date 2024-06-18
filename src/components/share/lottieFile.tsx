import Lottie from "lottie-react";

const LottieComponent = ({
  animationData,
  className,
}: {
  animationData: object;
  className?: string;
}) => {
  return (
    <div className={className ? `${className}` : ""}>
      {animationData && <Lottie animationData={animationData} />}
    </div>
  );
};

export default LottieComponent;
