const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats shadow bg-primary">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        We are a team of passionate developers who love to build cool stuff. Our
        goal is to make web development accessible and enjoyable for everyone,
        so you can focus on what really matters - building amazing applications!
        Our aim is to create an easy and comfortable user experience for
        everyone, so you can focus on what really matters - your project!
      </p>
    </>
  );
};

export default About;
