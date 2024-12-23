import { getUserInfo } from "@/api/user/get-user-info";

export async function UserInfo() {
  const user = await getUserInfo();

  return (
    <>
      {/* <Avatar className="h-8 w-8 rounded-lg"> */}
      {/*   <AvatarImage src="" alt={user?.username} /> */}
      {/*   <AvatarFallback className="rounded-lg">CN</AvatarFallback> */}
      {/* </Avatar> */}
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{user?.username}</span>
        <span className="truncate text-xs">{user?.email}</span>
      </div>
    </>
  );
}
