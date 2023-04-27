const Preview = ({ src }) => {
  let content = "";

  if (src !== "") {
    content = <img src={src} alt="" className="w-full" />;
  } else {
    content = <h1 className="px-2 m-auto">No Image</h1>;
  }
  return (
    <div className="w-[6em] h-[6em] bg-gray-300 rounded-md text-[0.9em] overflow-hidden mb-3">
      {content}
    </div>
  );
};

export default Preview;
