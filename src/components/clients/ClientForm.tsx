
const ClientForm = () => {
  return (
    <form>
      <div className="my-8 flex items-center">
        <label htmlFor="fullName" className="label-inline">
          Full Name
        </label>
        <input
          type="text"
          className="input-control"
          placeholder="Ex: Wade Warren"
        />
      </div>

      <div className="mb-8 flex items-center">
        <label htmlFor="fullName" className="label-inline">
          Full name (Myanmar)
        </label>
        <input
          type="text"
          className="input-control"
          placeholder="Ex: Sample text"
        />
      </div>

      <div className="mb-8 flex items-center">
        <label htmlFor="fullName" className="label-inline">
          Father’s name
        </label>
        <input
          type="text"
          className="input-control"
          placeholder="Cameron Williamson"
        />
      </div>

      <div className="mb-8 flex items-center">
        <label htmlFor="fullName" className="label-inline">
          Father’s name (Myanmar)
        </label>
        <input
          type="text"
          className="input-control"
          placeholder="Sample text"
        />
      </div>
      <div className="mb-8 flex items-center">
        <label htmlFor="fullName" className="label-inline">
          Date of birth
        </label>
        <input type="text" className="input-control" placeholder="12/01/1992" />
      </div>

      <div className="mb-8 flex items-center">
        <label htmlFor="fullName" className="label-inline">
          Date of birth (Myanmar)
        </label>
        <input
          type="text"
          className="input-control"
          placeholder="Sample text"
        />
      </div>

      <div className="mb-8 flex items-center">
        <label htmlFor="fullName" className="label-inline">
          Contact number
        </label>
        <input
          type="text"
          className="input-control"
          placeholder="+95 123 456 789"
        />
      </div>

      <div className="mb-8 flex items-center">
        <label htmlFor="fullName" className="label-inline">
          NRC number
        </label>
        <input
          type="text"
          className="input-control"
          placeholder="12/OUKAMA(N)123456"
        />
      </div>

      <div className="mb-8 flex items-center">
        <label htmlFor="fullName" className="label-inline">
          NRC number (Myanmar)
        </label>
        <input
          type="text"
          className="input-control"
          placeholder="Sample text"
        />
      </div>

      <div className="mb-8 flex items-center">
        <label htmlFor="fullName" className="label-inline">
          Address
        </label>
        <input
          type="text"
          className="input-control"
          placeholder="Upper Pansoedan Rd. Kan Daw Kalay (south) Ward"
        />
      </div>

      <div className="mb-8 flex items-center">
        <label htmlFor="fullName" className="label-inline">
          Address (Myanmar)
        </label>
        <input
          type="text"
          className="input-control"
          placeholder="Sample text"
        />
      </div>

      <div>
        <button className="btn btn-info" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ClientForm;
