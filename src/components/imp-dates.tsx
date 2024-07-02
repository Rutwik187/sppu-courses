import Title from "./ui/title";

const ImpDates = () => {
  return (
    <div className="mt-16">
      <Title>Important Dates</Title>
      {[1, 2, 3, 4].map((item, index) => (
        <ul key={index} className="max-w-2xl mx-auto">
          <li>
            <div className="flex items-center justify-between">
              <p className="text-blue-400">
                Post Graduate Diploma in Blockchain Technology
              </p>
              <p>12-Dec-203</p>
            </div>
          </li>
          <hr className="my-4 text-gray-900" />
        </ul>
      ))}
    </div>
  );
};

export default ImpDates;
