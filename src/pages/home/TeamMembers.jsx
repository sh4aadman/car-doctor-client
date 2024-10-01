import TeamMember from "./TeamMember";
import member1 from "../../../public/team/1.jpg"
import member2 from "../../../public/team/3.jpg"
import member3 from "../../../public/team/2.jpg"

const TeamMembers = () => {
    return (
        <div className="grid grid-cols-3 gap-6 mt-12 text-center">
            <TeamMember img={member1} name="Team Member 1" title="Engine Expert" />
            <TeamMember img={member2} name="Team Member 2" title="Tyre Expert" />
            <TeamMember img={member3} name="Team Member 3" title="ECU Expert" />
        </div>
    );
};

export default TeamMembers;