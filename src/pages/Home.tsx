const Home = () => {
  return (
    <main className="h-screen">
      <section className="h-1/3 pt-10 flex flex-col justify-center">
        <p className="text-xl">Hello, my name is</p>
        <p className="text-4xl text-orange">Michiel Baert</p>
      </section>
      <section className="h-1/3 p-10 text-lg">
        <p>
          I'm a passionate
          <span className="text-orange"> front-end developer</span> who makes
          web applications and mobile applications.
        </p>
        <p>
          I love being <span className="text-orange">creative</span> in my work.
        </p>
      </section>
      <section className="h-1/3 text-4xl flex flex-col justify-center">
        <p>check out my</p>
        <p className="text-orange">projects.</p>
      </section>
    </main>
  );
};

export default Home;
