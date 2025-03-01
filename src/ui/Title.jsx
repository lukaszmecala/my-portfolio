import Heading from "./Heading";

function Title({ title }) {
  return (
    <Heading as={"h3"} type={"title"}>
      {title}
    </Heading>
  );
}

export default Title;
