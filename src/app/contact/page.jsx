export default function Contact() {
  return (
    <div className="items-start justify-center hero min-h-screen bg-gradient-to-t from-base-200 from-0% via-primary via-50% to-base-200 to-100%">
      <form action="submit" className="flex flex-col mt-32 w-72 items-center">
        <p className="text-neutral mb-4">Contact Me</p>
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
        <button type="submit" className="btn btn-neutral text-base-200 w-min">Submit</button>
      </form>
    </div>
  );
}
