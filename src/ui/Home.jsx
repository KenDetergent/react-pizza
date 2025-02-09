import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="mt-8 mb-10 text-center">
      <h1 className="text-center text-xl font-semibold text-gray-600 uppercase mt-8 mb-10">
        The best pizza.
        <br />
        <span className="text-amber-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser></CreateUser>
    </div>
  );
}

export default Home;
