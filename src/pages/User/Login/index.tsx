import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useAuth } from "@/provider/authProvider";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleClick = () => {
    setToken("123456");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        Login
      </Button>
    </div>
  );
};

export default Login;
