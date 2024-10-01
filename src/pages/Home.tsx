const Home = () => {
  return (
    <main className="h-screen flex flex-col justify-evenly">
      <section className="sm:self-start">
        <div className="pt-10 flex flex-col justify-center">
          <p className="text-xl">Hello, my name is</p>
          <p className="text-4xl text-white">Michiel Baert</p>
        </div>
        <div className="p-10 text-lg">
          <p>
            I'm a passionate
            <span className="text-white"> front-end developer</span> who makes
            web applications and mobile applications.
          </p>
          <p>
            I love being <span className="text-white">creative</span> in my
            work.
          </p>
        </div>
      </section>
      <section className="sm:self-start text-5xl text-white flex flex-col justify-center">
        <p>check out my</p>
        <p className="text-orange">projects.</p>
      </section>
    </main>
  );
};

export default Home;
