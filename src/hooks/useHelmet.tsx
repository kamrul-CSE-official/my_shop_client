import { Helmet } from "react-helmet";
import favIcon from "@/assets/logo.png";

const HelmetComponent = ({
  title,
  description = "This is my shop website.",
  keywords = "my shop, website",
}: {
  title: string;
  description?: string;
  keywords?: string;
}) => {
  return (
    <Helmet>
      <title>My Shop | {title}</title>
      <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default HelmetComponent;
