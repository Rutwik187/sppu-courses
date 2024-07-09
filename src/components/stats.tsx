import Title from "./ui/title";

const Stats = () => {
  const stats = [
    {
      title: "Courses",
      value: "20+",
      description: "Available",
    },
    {
      title: "Admission",
      value: "2000+",
      description: "Enrolled",
    },
    {
      title: "Students",
      value: "8000+",
      description: "Passed",
    },
    {
      title: "Students",
      value: "8000+",
      description: "Passed",
    },
  ];

  return (
    <div>
      <div className="  mt-16 ">
        <div className="bg-navy p-4 rounded-md flex gap-16 items-center justify-center flex-wrap pb-8">
          {stats.map((stat, index) => (
            <div className="text-center flex flex-col gap-4" key={index}>
              <Title>{stat.title}</Title>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-base text-white">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
