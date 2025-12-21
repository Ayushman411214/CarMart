import { checkUser } from "@/lib/checkUser";
import HeaderClient from "./header";

export default async function Header({ isAdminPage = false }) {
    const user = await checkUser();
    const isAdmin = user?.role === "ADMIN";
    // console.log("========================>>> isAdmin:", isAdmin);
    return (
        <HeaderClient
            isAdmin={isAdmin}
            isAdminPage={isAdminPage}
        />
    );
}
