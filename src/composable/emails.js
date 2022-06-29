import { ref } from "vue";
import axios from "axios";

export default function useEmails() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const emails = ref([]);
  const email = ref([]);
  const emailStats = ref([]);
  const errors = ref("");

  const getEmails = async () => {
    let response = await axios.get(`${apiUrl}/emails`);
    emails.value = response.data.emails;
  };

  const getEmailStats = async () => {
    let response = await axios.get(`${apiUrl}/emails/stats`);
    emailStats.value = response.data.stats;
  };

  const getEmail = async (emailId) => {
    let response = await axios.get(`${apiUrl}/emails/${emailId}`);
    email.value = response.data.email;
  };

  return {
    emails,
    email,
    emailStats,
    errors,
    getEmails,
    getEmailStats,
    getEmail,
  };
}
