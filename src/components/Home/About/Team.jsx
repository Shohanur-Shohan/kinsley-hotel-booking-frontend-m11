import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="grid items-center grid-cols-4 gap-6">
      <TeamCard
        image={"/assets/team-1.jpg"}
        name={"Emma Newman"}
        role={"CEO"}
      />
      <TeamCard
        image={"/assets/team-2.jpg"}
        name={"Paul Trueman"}
        role={"CEO"}
      />
      <TeamCard
        image={"/assets/team-3.jpg"}
        name={"Viktoria Freeman"}
        role={"CEO"}
      />
      <TeamCard
        image={"/assets/team-4.jpg"}
        name={"Sofia Oldman"}
        role={"CEO"}
      />
    </div>
  );
};

export default Team;
