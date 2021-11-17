import { API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";
import DashboardList from "@/components/DashboardList";
import styles from "@/styles/Dash.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useRouter } from "next/router";

export default function DashboardPage({ creations, token }) {
  const router = useRouter();

  const deleteEvent = async (id) => {
    if (confirm("Jste si jistí?")) {
      const res = await fetch(`${API_URL}/creations/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message, {
          theme: "colored",
        });
      } else {
        router.reload();
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />

      <div className={styles.dashList}>
        {creations.map((cre) => (
          <DashboardList key={cre.id} cre={cre} handleDelete={deleteEvent} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/creations/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const creations = await res.json();

  return {
    props: {
      creations,
      token,
    },
  };
}
