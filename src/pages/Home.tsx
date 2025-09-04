import MainLayout from '../layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-gray-300 text-lg">Frontend Developer</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
