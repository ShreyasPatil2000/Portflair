import { useUser } from "@/Context/UserContext";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LOGOUT_ROUTE, DELETE_ROUTE } from "@/utils/constants";
import apiClient from "@/lib/api";
import { toast } from "sonner";
import { useState } from "react";
import ConfirmDeleteModal from "../DeleteModal/page";

const UserMenu = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const handleLogout = async () => {
    try {
      const response = await apiClient.post(LOGOUT_ROUTE);
      if (response.status === 200) {
        toast.success(user?.name + " has logged out successfully.");
        setUser(null);
        navigate("/auth");
      }
    } catch (error) {
      console.error("Auth error: ", error);
    }
  };

  const handleDelete = async () => {
    try {
      console.log("Delete Account");
      const response = await apiClient.delete(DELETE_ROUTE);
      if (response.status === 200) {
        toast.success(user?.name + "'s account has been deleted successfully.");
        setUser(null);
        localStorage.clear();
        navigate("/auth");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = () => {
    setTimeout(() => setDeleteModal(true), 0);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-4" asChild>
          <Button
            variant="default"
            className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer"
          >
            <User className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-45" align="start">
          <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/profile/:userId")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Projects</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/about")}>
              About
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/contact")}>
              Contact
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
            Log out
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-red-600 hover:text-red-700 focus:text-red-700"
            onClick={handleDeleteClick}
          >
            Delete Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ConfirmDeleteModal open={deleteModal} onClose={() => setDeleteModal(false)} onConfirm={handleDelete} />
    </>
  );
};

export default UserMenu;
