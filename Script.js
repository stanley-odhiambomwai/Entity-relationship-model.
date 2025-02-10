const Gymnasium = {
    id: 1,
    name: "Elite Fitness",
    address: "123 Main St",
    phone: "123-456-7890"
  };
  const Member = {
    id: 101,
    lastName: "Doe",
    firstName: "John",
    address: "456 Elm St",
    dob: "1990-05-15",
    gender: "Male",
    gymId: Gymnasium.id
  };

  const Coach = {
    id: 201,
    lastName: "Daniel",
    firstName: "James",
    age: 35,
    specialty: "Yoga"
  };

  const Session = {
    id: 301,
    sportType: "Yoga",
    schedule: "Monday 10AM",
    gymId: Gymnasium.id,
    maxCapacity: 20,
    coaches: [Coach.id]
  };

  const MemberSession ={
    memberId : Member.id,
    SessionId: Session.id
  };

  const CoachSession = {
    coachId: Coach.id,
    sessionId: Session.id
  };

  console.log({ Gymnasium, Member, Coach, Session, MemberSession, CoachSession });