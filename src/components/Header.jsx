export function Header(props) {
  console.log(props);
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </>
  );
}
