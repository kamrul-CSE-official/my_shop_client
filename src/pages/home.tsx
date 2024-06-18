import useHelmet from "@/hooks/useHelmet";

const HomePage = () => {
  const helmet = useHelmet({
    title: "Home",
    description: "This is the home page of my awesome site.",
    keywords: "home, awesome site",
  });
  return (
    <div className="bg-orange-500">
      {helmet}
      This is home page
      <p className="text-red-500 text-6xl">Kamurl</p>
      <p className="text-primary">Kamurl</p>
    </div>
  );
};

export default HomePage;
