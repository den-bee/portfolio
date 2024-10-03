import {Link} from "react-scroll";

const Home = () => {
  return (
    <main className="h-screen flex flex-col justify-evenly">
      <section className="flex flex-col justify-center gap-12 xl:flex-row xl:flex-wrap md:justify-start md:text-left">
        <div className="w-fit flex flex-col justify-center">
          <div className="pt-10 flex flex-col justify-center">
            <p className="text-xl">Hello, my name is</p>
            <p className="text-4xl sm:text-5xl text-orange">Michiel Baert</p>
          </div>
          <div className="flex flex-col gap-5 p-10 sm:pl-0 text-lg sm:text-3xl">
            <p>
              I'm a passionate
              <span className="text-orange"> front-end developer</span> who
              makes <br></br> web applications and mobile applications.
            </p>
            <p>
              I love being <span className="text-orange">creative</span> in my
              work.
            </p>
          </div>
        </div>
        <div className="w-72 xl:block hidden">
          <img className="absolute" src="./src/assets/images/laptop.png" />
        </div>
        <div className="w-fit flex flex-col self-center md:self-start text-5xl">
          <p>Check out my</p>

          <p>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer text-orange hover:text-orange-dark"
            >
              projects.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
