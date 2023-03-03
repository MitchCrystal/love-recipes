import DownloadRecipe from './Recipe/DownloadRecipe';

function Dashboard() {
  return (
    <div className="Dashboard section">
      <div className="container mx-auto grid h-screen place-items-center">
        <DownloadRecipe />
      </div>
    </div>
  );
}

export default Dashboard;
