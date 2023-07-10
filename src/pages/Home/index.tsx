import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useAuth } from "@/provider/authProvider";
import styles from "./style.module.scss";

const Home: React.FC = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    setToken("");
    navigate("/login", { replace: true });
  };

  return (
    <div className={styles.container}>
      <span>Home</span>
      <Button type="primary" onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
