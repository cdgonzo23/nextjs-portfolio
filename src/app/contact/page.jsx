'use client'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // <div className="alert alert-error">
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     className="stroke-current shrink-0 h-6 w-6"
    //     fill="none"
    //     viewBox="0 0 24 24"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="2"
    //       d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    //     />
    //   </svg>
    //   <span>Error! Task failed successfully.</span>
    // </div>;
  };

  return (
    <div className="items-start justify-center hero min-h-screen bg-gradient-to-t from-base-200 from-0% via-primary via-50% to-base-200 to-100%">
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="flex flex-col mt-32 w-80 items-center"
      >
        <h2 className="text-4xl font-bold text-neutral pb-12">Contact Me</h2>
        <input
          type="text"
          placeholder="Name*"
          required
          className="input input-bordered input-accent w-full max-w-xs mb-4"
        />
        <input
          type="email"
          placeholder="Email*"
          required
          className="input input-bordered input-accent w-full max-w-xs mb-4"
        />
        <textarea
          className="textarea textarea-accent w-full mb-8"
          required
          placeholder="Message*"
        ></textarea>
        <button type="submit" className="btn btn-neutral text-base-200 w-min">
          Submit
        </button>
      </form>
    </div>
  );
}
