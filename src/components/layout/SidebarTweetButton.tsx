import useCurrentUser from "@/src/hooks/useCurrentUser";
import useLoginModal from "@/src/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push("/");
  }, [loginModal, router, currentUser]);

  return (
    <div onClick={onClick}>
      <div className="mt-6 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-sky-500 p-4 transition hover:bg-opacity-80 lg:hidden">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden cursor-pointer rounded-full bg-sky-500 px-4 py-2 transition hover:bg-opacity-90 lg:block">
        <p className="hidden text-center text-[20px] font-semibold text-white lg:block">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
