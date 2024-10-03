import githubIcon from "../assets/icons/github.svg";

const Contact = () => {
  return (
    <main className="h-screen flex flex-col justify-center gap-12">
      <div className="flex flex-col gap-3">
        <p className="text-5xl">Say hello!</p>
        <p className="text-xl">Send me an email at: </p>
      </div>
      <div className="flex flex-col gap-6">
        <p>
          <a
            href="mailto:michielbaert.dev@gmail.com"
            target="_blank"
            className="text-xl text-orange hover:text-orange-dark"
          >
            michielbaert.dev@gmail.com
          </a>
        </p>
        <a
          href="https://github.com/den-bee"
          target="_blank"
          className="self-center"
        >
          <img className="w-12 h-12" src={githubIcon} />
        </a>
      </div>
    </main>
  );
};

export default Contact;
