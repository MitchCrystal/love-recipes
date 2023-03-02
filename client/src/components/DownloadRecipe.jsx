function DownloadRecipe() {
  return (
    <div className="DownloadRecipe">
      <form submitForm={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe URL</span>
          </label>
          <label className="input-group">
            <span>simplyrecipes.com/</span>
            <input
              type="text"
              placeholder="cheeseburger-casserole-recipe-6835713"
              className="input input-bordered"
            />
          </label>
        </div>
      </form>
      ;
    </div>
  );
}

export default DownloadRecipe;
