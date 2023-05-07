import css from "components/Home/Home.module.css";

const Home = () => {
        return (
          <div className={css.homebox}>
            <h1 className={css.homename}>Welcome to your personal Phonebook. Login and enjoy!</h1>
          </div>
        );
      };
      
      export default Home;