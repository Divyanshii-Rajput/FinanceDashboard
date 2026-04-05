import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RoleSwitcher = () => {
    const { role, setRole, darkMode } = useContext(AppContext);

    return (
        <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className={`px-3 py-2 rounded border
            ${
            darkMode
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }
        `}
        >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
        </select>
    );
};

export default RoleSwitcher;