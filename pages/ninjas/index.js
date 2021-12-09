import styles from "../../styles/Ninjas.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};
const index = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a>
            <h3 className={styles.single}>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default index;
